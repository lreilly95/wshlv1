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
    public class GoaliesController : ControllerBase
    {
        private readonly IGoalieRepository _repo;
        private readonly IMapper _mapper;
        public GoaliesController(IGoalieRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetGoalies()
        {
            var goalies = await _repo.GetGoalies();
            var goaliesToReturn = _mapper.Map<IEnumerable<GoalieForListDto>>(goalies);
            return Ok(goaliesToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetGoalie(int id)
        {
            var goalie = await _repo.GetGoalie(id);
            var goalieToReturn = _mapper.Map<GoalieForDetailedDto>(goalie);
            return Ok(goalieToReturn);
        }
    }
}