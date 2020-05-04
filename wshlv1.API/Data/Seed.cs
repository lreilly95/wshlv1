using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using wshlv1.API.Models;

namespace wshlv1.API.Data
{
    public class Seed
    {
        public static void SeedPlayers(DataContext context)
        {
            if (!context.Players.Any()) //If players table is empty, seed table with player data.
            {
                var playerData = System.IO.File.ReadAllText("Data/dbtables/Players.json");
                var players = JsonConvert.DeserializeObject<List<Player>>(playerData);
                foreach(var player in players)
                {
                    context.Players.Add(player);
                }

                context.SaveChanges();
            }
        }
         public static void SeedTeams(DataContext context)
        {
            if (!context.Teams.Any()) //If teams table is empty, seed table with team data.
            {
                var teamData = System.IO.File.ReadAllText("Data/dbtables/Teams.json");
                var teams = JsonConvert.DeserializeObject<List<Team>>(teamData);
                foreach(var team in teams)
                {
                    context.Teams.Add(team);
                }

                context.SaveChanges();
            }
        }
         public static void SeedGames(DataContext context)
        {
            if (!context.Games.Any()) //If games table is empty, seed table with game data.
            {
                var gameData = System.IO.File.ReadAllText("Data/dbtables/Games.json");
                var games = JsonConvert.DeserializeObject<List<Game>>(gameData);
                foreach(var game in games)
                {
                    context.Games.Add(game);
                }

                context.SaveChanges();
            }
        }
         public static void SeedGoalies(DataContext context)
        {
            if (!context.Goalies.Any()) //If goalies table is empty, seed table with goalie data.
            {
                var goalieData = System.IO.File.ReadAllText("Data/dbtables/Goalies.json");
                var goalies = JsonConvert.DeserializeObject<List<Goalie>>(goalieData);
                foreach(var goalie in goalies)
                {
                    context.Goalies.Add(goalie);
                }

                context.SaveChanges();
            }
        }
         public static void SeedOfficials(DataContext context)
        {
            if (!context.Officials.Any()) //If there are no officials accounts, create a defualt admin account.
            {
                var officialData = System.IO.File.ReadAllText("Data/dbtables/Officials.json");
                var officials = JsonConvert.DeserializeObject<List<Official>>(officialData);
                foreach(var offical in officials)
                {
                    context.Officials.Add(offical);
                }

                context.SaveChanges();
            }
        }
    }
}