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
                var playerData = System.IO.File.ReadAllText("Data/PlayerSeedData.json");
                var players = JsonConvert.DeserializeObject<List<Player>>(playerData);
                foreach(var player in players)
                {
                    context.Players.Add(player);
                }

                context.SaveChanges();
            }
        }
    }
}