using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using wshlv1.API.Models;

namespace wshlv1.API.Data
{
    public class Seed
    {
        protected static readonly IHostingEnvironment env;

        public static void SeedPlayers(DataContext context)
        {
            if (!context.Players.Any()) //If players table is empty, seed table with player data.
            { 
                string path = "Data/dev-dbtables/Players.json"; //Dev data includes ID field. 

                if (env.IsProduction())
                    path = "Data/prod-dbtables/Players.json";  //Production data does not include ID field, this is generated by SQL Server.
                     
                var playerData = System.IO.File.ReadAllText(path);     
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
                string path = "Data/dev-dbtables/Teams.json"; //Dev data includes ID field. 

                if (env.IsProduction())
                    path = "Data/prod-dbtables/Teams.json";  //Production data does not include ID field, this is generated by SQL Server.
                     
                var teamData = System.IO.File.ReadAllText(path);  
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
                string path = "Data/dev-dbtables/Games.json"; //Dev data includes ID field. 

                if (env.IsProduction())
                    path = "Data/prod-dbtables/Games.json";  //Production data does not include ID field, this is generated by SQL Server.
                     
                var gameData = System.IO.File.ReadAllText(path);
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
                string path = "Data/dev-dbtables/Goalies.json"; //Dev data includes ID field. 

                if (env.IsProduction())
                    path = "Data/prod-dbtables/Goalies.json";  //Production data does not include ID field, this is generated by SQL Server.
                     
                var goalieData = System.IO.File.ReadAllText(path);
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
                string path = "Data/dev-dbtables/Officials.json"; //Dev data includes ID field. 

                if (env.IsProduction())
                    path = "Data/prod-dbtables/Officials.json";  //Production data does not include ID field, this is generated by SQL Server.
                     
                var officialData = System.IO.File.ReadAllText(path);
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