using Newtonsoft.Json;
using System;


namespace ClimaTempo.Web.Entidades
{
    public class Locale
    {

        [JsonProperty("id")]
        public int id { get; set; }
        [JsonProperty("name")]
        public string name { get; set; }
        [JsonProperty("state")]
        public string state { get; set; }
        [JsonProperty("latitude")]
        public double latitude { get; set; }
        [JsonProperty("longitude")]
        public double longitude { get; set; }
    }
}
