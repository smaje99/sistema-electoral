namespace SistemaElectoral.Models
{
    public class User
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public bool state { get; set; }
        public string role { get; set; }
        public Institute institute { get; set; }
        public string[] permissions { get; set; }
    }
}