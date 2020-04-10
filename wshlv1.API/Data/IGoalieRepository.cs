using System.Collections.Generic;
using System.Threading.Tasks;
using wshlv1.API.Models;

namespace wshlv1.API.Data
{
    public interface IGoalieRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Goalie>> GetGoalies();
        Task<Goalie> GetGoalie(int id);
        Task<IEnumerable<Goalie>> GetGoaliesTeam(int teamId);
    }
}