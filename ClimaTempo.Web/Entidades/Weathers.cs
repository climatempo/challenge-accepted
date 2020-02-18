using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClimaTempo.Web.Entidades
{
    public class Weathers
    {
        [JsonProperty("period")] 
        public Period period { get; set; }
        
        [JsonProperty("locale")]
        public Locale locale { get; set; }
        
        [JsonProperty("weather")]
        public List<Weather> weathers { get; set; }
    }
}
