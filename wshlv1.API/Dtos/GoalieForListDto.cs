namespace wshlv1.API.Dtos
{
    public class GoalieForListDto
    {
        public int TeamId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Number { get; set; }
        public int GamesPlayed { get; set; }
        public int GamesWon { get; set; }
        public double SavePercentage { get; set; }
        public double GAA { get; set; }
    }
}