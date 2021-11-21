using System.ComponentModel.DataAnnotations;

namespace demo_EmpApi.DTOs
{
    public class RegisterDTO
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        [Required]
        public string userName { get; set; }
        [Required]
        public int age { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public string Password { get; set; }
        public string empBreif { get; set; }
    }
}