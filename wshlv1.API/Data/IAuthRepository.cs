using System.Threading.Tasks;
using wshlv1.API.Models;

namespace wshlv1.API.Data
{
    public interface IAuthRepository
    {
        Task<Team> Register(Team team, string password);
        Task<Team> Login(string username, string password);
        Task<bool> TeamExists(string username);
    }
}