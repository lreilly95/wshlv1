using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace wshlv1.API.Controllers
{
    public class FallbackController : Controller
    {
        public IActionResult Index()
        {
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(),
            "wwwroot", "index.html"), "text/HTML");
        }
    }
}