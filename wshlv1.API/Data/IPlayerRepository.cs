using System.Collections.Generic;
using System.Threading.Tasks;
using wshlv1.API.Models;

namespace wshlv1.API.Data
{
    public interface IPlayerRepository 
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Player>> GetPlayers();
        Task<IEnumerable<Player>> GetPlayersTeam(int teamId);
        Task<Player> GetPlayer(int id);
    }
}