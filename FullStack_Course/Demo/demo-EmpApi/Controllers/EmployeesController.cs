using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using demo_EmpApi.Data;
using demo_EmpApi.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace demo_EmpApi.Controllers
{
    public class EmployeesController : BaseApiController
    {
        private readonly DataContext _context;
        public EmployeesController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppEmp>>> GetAllEmployees()
        {
            return await _context.Employees.ToListAsync();
        }
        [HttpDelete("Delete/{{id}}")]
        public async Task<ActionResult<AppEmp>> DeleteEmployeeByID(int id)
        {
            var emp = _context.Employees.SingleOrDefault(emp => emp.ID == id);
            if(emp != null){
                _context.Employees.Remove(emp);
                _context.SaveChangesAsync();
            }else{
                return BadRequest("User does not exist !");
            }
           return emp;
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AppEmp>> GetEmpByID(int id)
        {
            return await _context.Employees.FindAsync(id);
        }

        private async Task<bool> userIsExist(int id)
        {
            return await _context.Employees.AnyAsync(emp => emp.ID == id);
        }
    }
}