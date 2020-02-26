using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using wshlv1.API.Models;

namespace wshlv1.API.Data
{
    public class TeamRepository : ITeamRepository
    {
        private readonly DataContext _context;
        public TeamRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Team> GetTeam(int id)
        {
            var team = await _context.Teams.Include(p=>p.Players).FirstOrDefaultAsync(t => t.Id == id);
            return team;
        }

        public async Task<IEnumerable<Team>> GetTeams()
        {
            var teams = await _context.Teams.ToListAsync();
            return teams;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}