using demo_EmpApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace demo_EmpApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options):base(options){
            
        }
        public DbSet<AppEmp> Employees {get; set;}
    }
}