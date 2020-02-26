using Microsoft.EntityFrameworkCore.Migrations;

namespace wshlv1.API.Migrations
{
    public partial class GamesVictor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "VictorId",
                table: "Games",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "VictorId",
                table: "Games");
        }
    }
}
