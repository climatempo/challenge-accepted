using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClimaTempo.Web.Entidades
{
    public class Temperature
    {
        [JsonProperty("min")]
        public int min { get; set; }
        [JsonProperty("max")]
        public int max { get; set; }
    }
}
