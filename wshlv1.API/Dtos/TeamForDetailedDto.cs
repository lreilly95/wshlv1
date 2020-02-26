using System.Collections.Generic;
using wshlv1.API.Models;

namespace wshlv1.API.Dtos
{
    public class TeamForDetailedDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int GamesPlayed { get; set; }
        public int Points { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
        public int OTW { get; set; }
        public int OTL { get; set; }
        public ICollection<PlayerForDetailedDto> Players { get; set; }
        public ICollection<GoalieForDetailedDto> Goalies { get; set; }
    }
}