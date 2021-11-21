using System.ComponentModel.DataAnnotations;

namespace demo_EmpApi.DTOs
{
    public class LoginDTO
    {   [Required]
        public string userName { get; set; }
        public string Password { get; set; }

    }
}