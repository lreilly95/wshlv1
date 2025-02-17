using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using wshlv1.API.Models;

namespace wshlv1.API.Data
{
    public class PlayerRepository : IPlayerRepository
    {
        private readonly DataContext _context;
        public PlayerRepository(DataContext context)
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

        public async Task<Player> GetPlayer(int id) //Returns player with id.
        {
            var player = await _context.Players.FirstOrDefaultAsync(p => p.Id == id);
            return player;
        }

        public async Task<IEnumerable<Player>> GetPlayers() //Returns all players
        {
            var players = await _context.Players.ToListAsync();
            return players;
        }

        public async Task<IEnumerable<Player>> GetPlayersTeam(int teamId)
        {
            var players = await _context.Players.Where(p=>p.TeamId==teamId).ToListAsync();
            return players;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}