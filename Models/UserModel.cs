namespace SistemaElectoral.Models;

internal class UserModel
{
    public int IdUser { get; set; }
    public string Name { get; set; }
    public bool Active { get; set; }
    public InstituteModel Institute { get; set; }
    public RoleModel Role { get; set; }
}