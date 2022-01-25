namespace SistemaElectoral.Models
{
    public class Announcement
    {
        public int id { get; set; }
        public string name { get; set; }
        public bool isElectoralReport { get; set; }
        public bool isCandidateReport { get; set; }
        public Institute institute { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public DateTime electoralStartDate { get; set; }
        public DateTime electoralEndDate { get; set; }
        public DateTime nominationStartDate { get; set; }
        public DateTime nominationEndDate { get; set; }
    }
}