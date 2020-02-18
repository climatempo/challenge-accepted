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
    public class WeathersController: ControllerBase
    {
        private static List<Weathers> Load()
        {
            string cJson = System.IO.File.ReadAllText(@"base/weather.json");

            List<Weathers> aWeather = JsonConvert.DeserializeObject<List<Weathers>>(cJson);

            return aWeather;
        }

        private static List<Weathers> Load(int id)
        {
            string cJson = System.IO.File.ReadAllText(@"base/weather.json");

            List<Weathers> aWeather = JsonConvert.DeserializeObject<List<Weathers>>(cJson);

            return aWeather.FindAll(w => w.locale.id == id);
        }

        private static List<Weathers> Load(string locale)
        {
            string cJson = System.IO.File.ReadAllText(@"base/weather.json");

            List<Weathers> aWeather = JsonConvert.DeserializeObject<List<Weathers>>(cJson);

            return aWeather.FindAll(w => w.locale.name == locale);
        }

        [HttpGet("Get")]
        public ActionResult Get()
        {
            return StatusCode(200, JsonConvert.SerializeObject(Load()));
        }

        [HttpGet("GetById/{id}")]
        public ActionResult GetById(int id)
        {
            return StatusCode(200, JsonConvert.SerializeObject(Load(id)));
        }

        [HttpGet("GetByName/{name}")]
        public ActionResult GetByName(string name)
        {
            return StatusCode(200, JsonConvert.SerializeObject(Load(name)));
        }
    }
}
