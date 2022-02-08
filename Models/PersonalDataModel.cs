namespace SistemaElectoral.Models;

public class PersonalData
{
    public int IdPersonalData { get; set; }
    public string Dni { get; set; } = "";
    public string Name { get; set; } = "";
    public bool Gender { get; set; }
    public string Phone { get; set; } = "";
}