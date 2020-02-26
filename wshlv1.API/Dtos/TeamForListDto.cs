namespace wshlv1.API.Dtos
{
    public class TeamForListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int GamesPlayed { get; set; }
        public int Points { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
        public int OTW { get; set; }
        public int OTL { get; set; }
    }
}