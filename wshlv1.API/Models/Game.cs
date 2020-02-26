using System;

namespace wshlv1.API.Models
{
    public class Game
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int HomeTeamId { get; set; }
        public Team HomeTeam { get; set; }       
        public int AwayTeamId { get; set; }
        public Team AwayTeam { get; set; }
        public int HomeGoals { get; set; }
        public int AwayGoals { get; set; }
        public int VictorId { get; set;}
    }
}