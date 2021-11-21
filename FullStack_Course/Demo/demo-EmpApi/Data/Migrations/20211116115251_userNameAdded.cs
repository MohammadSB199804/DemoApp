using Microsoft.EntityFrameworkCore.Migrations;

namespace demo_EmpApi.Data.Migrations
{
    public partial class userNameAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "userName",
                table: "Employees",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "userName",
                table: "Employees");
        }
    }
}
