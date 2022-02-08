using MySql.Data.MySqlClient;

using SistemaElectoral.Models;
using SistemaElectoral.Schemas;

namespace SistemaElectoral.Services;

public class UserService
{
    public static User GetUser(string email)
    {
        MySqlParameter[] parameters = { UserSchema.EmailParameter(email) };
        var table = Database.Database.QueryCallStoredProcedure("spUser_Get", parameters);
        var data = table.Select()[0];

        User user = new User {
            IdUser = (int) data["IdUser"],
            Active = (bool) data["Active"],
            PersonalData = new PersonalData {
                IdPersonalData = (int) data["IdPersonalData"],
                Name = (string) data["NamePersonalData"]
            },
            Institute = new Institute {
                IdInstitute = (int) data["IdInstitute"],
                Name = (string) data["NameInstitute"]
            },
            Role = new Role {
                IdRole = (int) data["IdRole"],
                Name = (string) data["NameRole"]
            }
        };

        return user;
    }
}
