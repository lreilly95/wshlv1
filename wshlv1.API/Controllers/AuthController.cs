using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using wshlv1.API.Data;
using wshlv1.API.Dtos;
using wshlv1.API.Models;

namespace wshlv1.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            _repo = repo;

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(TeamForRegisterDto teamForRegisterDto)
        {
            //TODO validate request

            teamForRegisterDto.Username = teamForRegisterDto.Username.ToLower();

            if (await _repo.TeamExists(teamForRegisterDto.Username))
                return BadRequest("Username already exists");

            var teamToCreate  = new Team
            {
                Username = teamForRegisterDto.Username
            };

            var createdTeam = await _repo.Register(teamToCreate, teamForRegisterDto.Password);

            return StatusCode(201);
        }
    }
}