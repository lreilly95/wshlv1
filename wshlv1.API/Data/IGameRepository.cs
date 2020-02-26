using System.Collections.Generic;
using System.Threading.Tasks;
using wshlv1.API.Models;

namespace wshlv1.API.Data
{
    public interface IGameRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Game>> GetGames();
        Task<Game> GetGame(int id);
    }
}