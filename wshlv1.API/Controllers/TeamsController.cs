using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using wshlv1.API.Data;
using wshlv1.API.Dtos;

namespace wshlv1.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {
        private readonly ITeamRepository _repo;
        private readonly IMapper _mapper;
        public TeamsController(ITeamRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        //GET /teams
        [HttpGet]
        public async Task<IActionResult> GetTeams()
        {
            var teams = await _repo.GetTeams();
            var teamsToReturn = _mapper.Map<IEnumerable<TeamForListDto>>(teams);
            return Ok(teamsToReturn);
        }
        //GET /teams/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTeam(int id)
        {
            var team = await _repo.GetTeam(id);
            var teamToReturn = _mapper.Map<TeamForListDto>(team);
            return Ok(teamToReturn);
        }
    }
}