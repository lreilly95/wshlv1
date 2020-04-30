using System.ComponentModel.DataAnnotations;

namespace wshlv1.API.Dtos
{
    public class OfficialForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(25, MinimumLength = 4, ErrorMessage= "Password must be between 4 & 25 characters")]
        public string Password { get; set; }
    }
}