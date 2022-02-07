namespace SistemaElectoral.Utils;

public class Configuration
{
    private static readonly IConfigurationRoot Config = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json")
        .Build();

    private static readonly IConfigurationSection ConnectionStrings = Config
        .GetSection("ConnectionStrings");

    public static string GetConnectionStrings(string connection)
    {
        return ConnectionStrings.GetSection(connection).Value;
    }
}
