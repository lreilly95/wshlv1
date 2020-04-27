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
    public class GoaliesController : ControllerBase
    {
        private readonly IGoalieRepository _repo;
        private readonly IMapper _mapper;
        public GoaliesController(IGoalieRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        //GET /goalies
        [HttpGet]
        public async Task<IActionResult> GetGoalies()
        {
            var goalies = await _repo.GetGoalies();
            var goaliesToReturn = _mapper.Map<IEnumerable<GoalieForListDto>>(goalies);
            return Ok(goaliesToReturn);
        }
        //GET /goalies/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetGoalie(int id)
        {
            var goalie = await _repo.GetGoalie(id);
            var goalieToReturn = _mapper.Map<GoalieForListDto>(goalie);
            return Ok(goalieToReturn);
        }
        //GEt /goalies/team5 eg
        [HttpGet("team{teamId}")]
        public async Task<IActionResult> GetGoaliesTeam(int teamId)
        {
            var goalies = await _repo.GetGoaliesTeam(teamId);
            var goaliesToReturn = _mapper.Map<IEnumerable<GoalieForListDto>>(goalies);
            return Ok(goaliesToReturn);
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGoalie(int id, GoalieForUpdateDto goalieForUpdateDto)
        {
            var goalieFromRepo = await _repo.GetGoalie(id);

            _mapper.Map(goalieForUpdateDto, goalieFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating goalie {id} failed on save.");
        }
    }
}