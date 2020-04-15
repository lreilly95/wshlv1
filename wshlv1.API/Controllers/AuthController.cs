using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
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
        private readonly IConfiguration _config;
        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _config = config;
            _repo = repo;

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(OfficialForRegisterDto officialForRegisterDto)
        {
            //TODO validate request

            officialForRegisterDto.Username = officialForRegisterDto.Username.ToLower();

            if (await _repo.OfficialExists(officialForRegisterDto.Username))
                return BadRequest("Username already exists");

            var officialToCreate = new Official
            {
                Username = officialForRegisterDto.Username
            };

            var createdOfficial = await _repo.Register(officialToCreate, officialForRegisterDto.Password);

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(OfficialForLoginDto officialForLoginDto)
        {
            var officialFromRepo = await _repo.Login(officialForLoginDto.Username.ToLower(), officialForLoginDto.Password);

            if (officialFromRepo == null)
                return Unauthorized();

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, officialFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, officialFromRepo.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });
        }
    }
}