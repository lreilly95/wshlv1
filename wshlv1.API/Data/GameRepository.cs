using System.Collections.Generic;
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

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}