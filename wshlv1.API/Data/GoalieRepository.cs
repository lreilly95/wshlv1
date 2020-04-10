using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using wshlv1.API.Models;

namespace wshlv1.API.Data
{
    public class GoalieRepository : IGoalieRepository
    {
        private readonly DataContext _context;
        public GoalieRepository(DataContext context)
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

        public async Task<Goalie> GetGoalie(int id) //Returns goalie with id.
        {
            var goalie = await _context.Goalies.FirstOrDefaultAsync(g => g.Id == id);
            return goalie;
        }

        public async Task<IEnumerable<Goalie>> GetGoalies() //Returns all goalies.
        {
            var goalies = await _context.Goalies.ToListAsync();
            return goalies;
        }
        public async Task<IEnumerable<Goalie>> GetGoaliesTeam(int teamId) //returns all goalies playing for team with teamId
        {
            var goalies = await _context.Goalies.Where(p=>p.TeamId==teamId).ToListAsync();
            return goalies;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}