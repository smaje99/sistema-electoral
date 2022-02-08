namespace SistemaElectoral.Models;

public class User
{
    public int IdUser { get; set; }
    public string Email { get; set; } = "";
    public string Password { get; set; } = "";
    public bool Active { get; set; }
    public PersonalData PersonalData { get; set; } = new();
    public Institute Institute { get; set; } = new();
    public Role Role { get; set; } = new();
}