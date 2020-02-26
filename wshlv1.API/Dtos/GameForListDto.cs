using System;
using wshlv1.API.Models;

namespace wshlv1.API.Dtos
{
    public class GameForListDto
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int HomeTeamId { get; set; }      
        public int AwayTeamId { get; set; }
        public int HomeGoals { get; set; }
        public int AwayGoals { get; set; }
    }
    
}