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
    public class GamesController : ControllerBase
    {
        private readonly IGameRepository _repo;
        private readonly IMapper _mapper;
        public GamesController(IGameRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        //GET /games
        [HttpGet]
        public async Task<IActionResult> GetGames()
        {
            var games = await _repo.GetGames();
            var gamesToReturn = _mapper.Map<IEnumerable<GameForListDto>>(games);
            return Ok(gamesToReturn);
        }
        //GET /games/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetGame(int id)
        {
            var game = await _repo.GetGame(id);
            var gameToReturn = _mapper.Map<GameForListDto>(game);
            return Ok(gameToReturn);
        }

    }
}