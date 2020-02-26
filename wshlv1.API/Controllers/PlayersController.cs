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
    public class PlayersController : ControllerBase
    {
        private readonly IPlayerRepository _repo;
        private readonly IMapper _mapper;
        public PlayersController(IPlayerRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetPlayers()
        {
            var players = await _repo.GetPlayers();
            var playersToReturn = _mapper.Map<IEnumerable<PlayerForListDto>>(players);
            return Ok(playersToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPlayer(int id)
        {
            var player = await _repo.GetPlayer(id);
            var playerToReturn = _mapper.Map<PlayerForDetailedDto>(player);
            return Ok(playerToReturn);
        }

    }
}