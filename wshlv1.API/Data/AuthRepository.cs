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
        public async Task<Official> Login(string username, string password)
        {
            var official = await _context.Officials.FirstOrDefaultAsync(x => x.Username == username);

            if(official == null) //If no user exists with given username
                return null;

            if(!VerifyPasswordHash(password, official.PasswordHash, official.PasswordSalt)) //If password verification fails
                return null;

            return official;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt)) //Salt password
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password)); //Compute hash of salted password
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if(computedHash[i] != passwordHash[i]) return false; //If computed hash is incorrect.
                }
            } 
            return true;
        }

        public async Task<Official> Register(Official official, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt); 

            official.PasswordHash = passwordHash;
            official.PasswordSalt = passwordSalt;

            await _context.Officials.AddAsync(official);
            await _context.SaveChangesAsync();

            return official;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key; //Set password salt to random key.
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password)); //Compute hash on byte array representing password.
            }
        }

        public async Task<bool> OfficialExists(string username) //Returns true if team exists with name.
        {
            if (await _context.Officials.AnyAsync(x=>x.Username == username))
                return true;

            return false;
        }
    }
}