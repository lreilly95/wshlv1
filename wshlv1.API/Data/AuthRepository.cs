using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using wshlv1.API.Models;

namespace wshlv1.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<Team> Login(string username, string password)
        {
            var team = await _context.Teams.FirstOrDefaultAsync(x => x.Username == username);

            if(team == null)
                return null;

            if(!VerifyPasswordHash(password, team.PasswordHash, team.PasswordSalt))
                return null;

            return team;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if(computedHash[i] != passwordHash[i]) return false;
                }
            } 
            return true;
        }

        public async Task<Team> Register(Team team, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            team.PasswordHash = passwordHash;
            team.PasswordSalt = passwordSalt;

            await _context.Teams.AddAsync(team);
            await _context.SaveChangesAsync();

            return team;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> TeamExists(string username)
        {
            if (await _context.Teams.AnyAsync(x=>x.Username == username))
                return true;

            return false;
        }
    }
}