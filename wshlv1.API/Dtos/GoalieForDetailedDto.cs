
namespace wshlv1.API.Dtos
{
    public class GoalieForDetailedDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Number { get; set; }
        public int Age { get; set; }
        public string Bio { get; set; }
        public int GamesPlayed { get; set; }
        public int GamesWon { get; set; }
        public double SavePercentage { get; set; }
        public double GAA { get; set; }
        public string PhotoUrl { get; set; }
    }
}