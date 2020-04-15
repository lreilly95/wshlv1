using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using wshlv1.API.Models;

namespace wshlv1.API.Data
{
    public class GameRepository : IGameRepository
    {
        private readonly DataContext _context;
        public GameRepository(DataContext context)
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

        public async Task<Game> GetGame(int id) //Returns game with id
        {
            var game = await _context.Games.FirstOrDefaultAsync(g => g.Id == id);
            return game;
        }

        public async Task<IEnumerable<Game>> GetGames() //Returns all games
        {
            var games = await _context.Games.ToListAsync();
            return games;
        }

        public async Task<IEnumerable<Game>> GetHomeGames(int id) //Returns games where home team matches id
        {
            var games = await _context.Games.Where(g => g.HomeTeamId == id).ToListAsync();
            return games;
        }

        public async Task<IEnumerable<Game>> GetAwayGames(int id) //Returns games where away team matches id
        {
            var games = await _context.Games.Where(g => g.AwayTeamId == id).ToListAsync();
            return games;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}