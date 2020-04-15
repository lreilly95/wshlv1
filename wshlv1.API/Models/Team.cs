using System.Collections.Generic;

namespace wshlv1.API.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int GamesPlayed { get; set; }
        public int Points { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
        public int OTW { get; set; }
        public int OTL { get; set; }
        public int GoalsFor { get; set; }
        public int GoalsAgainst { get; set; }
        public ICollection<Player> Players { get; set; }
        public ICollection<Goalie> Goalies { get; set; }
        public ICollection<Game> HomeGames { get; set;}
        public ICollection<Game> AwayGames { get; set;}
    }
}