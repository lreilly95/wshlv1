using System;

namespace wshlv1.API.Models
{
    public class Goalie
    {
        public int Id { get; set; }
        public int TeamId { get; set; }
        public Team Team { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Number { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int GamesPlayed { get; set; }
        public int GamesWon { get; set; }
        public double SavePercentage { get; set; }
        public double GAA { get; set; }
    }
}