using Microsoft.EntityFrameworkCore;
using wshlv1.API.Models;

namespace wshlv1.API.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Player> Players { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Goalie> Goalies { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<Official> Officials { get; set; }

        //Override to create the many-many relationship between teams & games,
        //not supported natively for SQLite in Entity Framework.
        protected override void OnModelCreating(ModelBuilder builder) 
        {
            builder.Entity<Game>()
                .HasKey(k => new {k.HomeTeamId, k.AwayTeamId});

            builder.Entity<Game>()
                .HasOne(t => t.HomeTeam)
                .WithMany(t => t.HomeGames)
                .HasForeignKey(t => t.HomeTeamId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Game>()
                .HasOne(t => t.AwayTeam)
                .WithMany(t => t.AwayGames)
                .HasForeignKey(t => t.AwayTeamId)
                .OnDelete(DeleteBehavior.Restrict);
        }       
    }
}