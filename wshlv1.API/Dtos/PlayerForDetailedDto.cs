using wshlv1.API.Models;

namespace wshlv1.API.Dtos
{
    public class PlayerForDetailedDto
    {
        public int Id { get; set; }
        public char Position { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Number { get; set; }
        public string Age { get; set; }
        public string Bio { get; set; }
        public int GamesPlayed { get; set; }
        public int Points { get; set; }
        public int Goals { get; set; }
        public int Assists { get; set; }
        public int PIMs { get; set; }
        public int PlusMinus { get; set; }
        public int SOG { get; set; }
        public string PhotoUrl { get; set; }
    }
}