using MySql.Data.MySqlClient;

namespace SistemaElectoral.Schemas;

public class UserSchema
{
    public static MySqlParameter EmailParameter(object value)
    {
        return new MySqlParameter("_Email", value);
    }
}
