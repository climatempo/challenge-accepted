using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClimaTempo.Web.Entidades
{
    public class Weather
    {
        [JsonProperty("date")]
        DateTime date { get; set; }

        [JsonProperty("text")]
        string text { get; set; }
        
        [JsonProperty("temperature")]
        Temperature temperature { get; set; }
        
        [JsonProperty("rain")]
        Rain rain { get; set; }
    }
}
