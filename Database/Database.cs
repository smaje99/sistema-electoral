using MySql.Data.MySqlClient;
using System.Data;

using SistemaElectoral.Utils;

namespace SistemaElectoral.Database;

public class Database
{
    private static MySqlConnection Connection = new(
        Configuration.GetConnectionStrings("SQLConnect")
    );

    private static void Connect()
    {
        try
        {
            Connection.Open();
        }
        catch (Exception)
        {
            throw new Exception("Not connection with database");
        }
    }

    private static void Disconnect()
    {
        Connection.Close();
    }

    private static int ExecuteCommand(MySqlCommand command)
    {
        var resultExecute = 0;
        try
        {
            Connect();
            resultExecute = command.ExecuteNonQuery();
        }
        catch (Exception e)
        {
            throw new Exception("Wrong execution", e);
        }
        finally
        {
            Disconnect();
        }
        return resultExecute;
    }

    public static int OperationCallStoredProcedure(string procedureName, MySqlParameter[] parameters)
    {
        MySqlCommand command = new(procedureName, Connection);
        command.CommandType = CommandType.StoredProcedure;
        command.Parameters.AddRange(parameters);

        var result = ExecuteCommand(command);

        return result;
    }

    public static DataTable QueryCallStoredProcedure(string procedureName, MySqlParameter[] parameters)
    {
        MySqlCommand command = new MySqlCommand(procedureName, Connection);
        command.CommandType = CommandType.StoredProcedure;
        command.Parameters.AddRange(parameters);

        MySqlDataAdapter adapter = new MySqlDataAdapter();
        adapter.SelectCommand = command;

        DataSet result = new();
        adapter.Fill(result);

        return result.Tables[0];
    }
}
