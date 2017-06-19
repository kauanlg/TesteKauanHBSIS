using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace test.models
{
    /// <summary>
    /// Classe que representa o tipo de pessoa física ou jurídica
    /// </summary>
    public class TipoCliente
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TipoClienteId { get; set; }
        public string Nome { get; set; }
    }
}