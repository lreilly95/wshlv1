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
            CreateMap<Player, PlayerForDetailedDto>()
            .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<Team, TeamForListDto>();
            CreateMap<Team, TeamForDetailedDto>();
            CreateMap<Goalie, GoalieForListDto>();
            CreateMap<Goalie, GoalieForDetailedDto>()
            .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<Game, GameForListDto>();

        }
    }
}