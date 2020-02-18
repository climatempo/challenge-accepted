using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClimaTempo.Web.Entidades
{
    public class Rain
    {
        [JsonProperty("probability")]
        int probability { get; set; }
        [JsonProperty("precipitation")]
        int precipitation { get; set; }
    }
}
