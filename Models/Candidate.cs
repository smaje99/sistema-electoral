namespace SistemaElectoral.Models
{
    public class Candidate
    {
        public int id { get; set; }
        public User user { get; set; }
        public string electoralCode { get; set; }
        public bool state { get; set; }
        public string proposals { get; set; }
        public string position { get; set; }
        public Announcement announcement { get; set; }
    }
}