using System.Threading.Tasks;
using wshlv1.API.Models;

namespace wshlv1.API.Data
{
    public interface IAuthRepository
    {
        Task<Official> Register(Official official, string password);
        Task<Official> Login(string username, string password);
        Task<bool> OfficialExists(string username);
    }
}