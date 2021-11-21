namespace demo_EmpApi.Entities
{
    public class AppEmp
    {
        public int ID {get;set;}
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string userName {get;set;}
        public int age { get; set; }
        public string email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string empBreif { get; set; }
    }
}