using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClimaTempo.Web.Entidades
{
    public class Period
    {
        [JsonProperty("begin")]
        public DateTime begin { get; set; }
        [JsonProperty("end")]
        public DateTime end { get; set; }
    }
}
