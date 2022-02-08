using MySql.Data.MySqlClient;

namespace SistemaElectoral.Schemas;

public class UserSchema
{
    public static MySqlParameter EmailParameter(string value)
    {
        return new MySqlParameter("_Email", value);
    }

    public static MySqlParameter PasswordParameter(string value)
    {
        return new MySqlParameter("_Password", value);
    }
}
