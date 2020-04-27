using AutoMapper;
using wshlv1.API.Dtos;
using wshlv1.API.Models;

namespace wshlv1.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Player, PlayerForListDto>();
            CreateMap<Team, TeamForListDto>();
            CreateMap<Goalie, GoalieForListDto>();
            CreateMap<Game, GameForListDto>();
            CreateMap<PlayerForUpdateDto, Player>();
            CreateMap<GoalieForUpdateDto, Goalie>();

        }
    }
}