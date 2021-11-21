using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using demo_EmpApi.Data;
using demo_EmpApi.DTOs;
using demo_EmpApi.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace demo_EmpApi.Controllers
{

    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        public AccountController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<AppEmp>> EmpRegister(RegisterDTO rDto)
        {
            if (await userIsExist(rDto.userName)) return BadRequest("UserName is Taken!");
            using var hmac = new HMACSHA512();
            var emp = new AppEmp
            {
                userName = rDto.userName,
                firstName = rDto.firstName,
                lastName = rDto.lastName,
                age = rDto.age,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(rDto.Password)),
                PasswordSalt = hmac.Key,
                email = rDto.email,
                empBreif = rDto.empBreif
            };
            _context.Employees.Add(emp);
            _context.SaveChangesAsync();

            return emp;
        }

        [HttpPost("login")]
        public async Task<ActionResult<AppEmp>> emoLogin(LoginDTO logDto)
        {
            var emp = await _context.Employees.SingleOrDefaultAsync(emp => emp.userName == logDto.userName);
            if(emp == null) return BadRequest("Invalid User Name !");
            using var hmac = new HMACSHA512(emp.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(logDto.Password));

              for(int i=0 ;i<computedHash.Length;i++){
                if(computedHash[i] != emp.PasswordHash[i]) return Unauthorized("Invalid Password !");
            }
            return emp;
        }

        private async Task<bool> userIsExist(string userName)
        {
            return await _context.Employees.AnyAsync(emp => emp.userName == userName);
        }
    }
}