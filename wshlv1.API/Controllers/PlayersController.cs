using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
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
        //GET /players  eg
        [HttpGet]
        public async Task<IActionResult> GetPlayers()
        {
            var players = await _repo.GetPlayers();
            var playersToReturn = _mapper.Map<IEnumerable<PlayerForListDto>>(players);
            return Ok(playersToReturn);
        }
        //GET /players/id  eg
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPlayer(int id)
        {
            var player = await _repo.GetPlayer(id);
            var playerToReturn = _mapper.Map<PlayerForListDto>(player);
            return Ok(playerToReturn);
        }
        //GET /players/team5/  eg
        [HttpGet("team{teamId}")]
        public async Task<IActionResult> GetPlayersTeam(int teamId)
        {
            var players = await _repo.GetPlayersTeam(teamId);
            var playersToReturn = _mapper.Map<IEnumerable<PlayerForListDto>>(players);
            return Ok(playersToReturn);
        }
        [Authorize] //Requries a user to be logged in
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePlayer(int id, PlayerForUpdateDto playerForUpdateDto)
        {
            var playerFromRepo = await _repo.GetPlayer(id);

            _mapper.Map(playerForUpdateDto, playerFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating player {id} failed on save.");
        }
    }
}