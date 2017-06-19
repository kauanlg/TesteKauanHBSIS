namespace test.models
{
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Contexto dos objetos do cliente no banco
    /// </summary>
    public class ClienteModelContext : DbContext
    {
        public ClienteModelContext(DbContextOptions<ClienteModelContext> options) : base(options)
        {

        }

        public DbSet<Cliente> Cliente { get; set; }

        public DbSet<TipoCliente> TipoCliente { get; set; }

    }
}