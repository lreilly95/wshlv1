using System.Collections.Generic;
using System.Threading.Tasks;
using wshlv1.API.Models;

namespace wshlv1.API.Data
{
    public interface ITeamRepository 
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Team>> GetTeams();
        Task<Team> GetTeam(int id);
    }
}