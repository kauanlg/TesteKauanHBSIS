using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace test.models
{
    /// <summary>
    /// Classe que representa o cliente
    /// </summary>
    public class Cliente
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClienteId { get; set; }
        public string Nome { get; set; }
        public string Identificador { get; set; }
        public string Telefone { get; set; }
        public int TipoClienteId { get; set; }
        public TipoCliente TipoCliente { get; set; }
    }
}