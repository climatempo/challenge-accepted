using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Threading.Tasks;
using ClimaTempo.Web.Entidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net;
using System.Text;
using Newtonsoft.Json.Linq;

namespace ClimaTempo.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LocalesController: ControllerBase
    {
        private static List<Locale> Load()
        {
            string cJson = System.IO.File.ReadAllText(@"base/locales.json");

            List<Locale> aLocales = JsonConvert.DeserializeObject<List<Locale>>(cJson);

            return aLocales;
        }

        [HttpGet]
        public ActionResult Get()
        {
            return StatusCode(200, JsonConvert.SerializeObject(Load()));
        }

    }
}
