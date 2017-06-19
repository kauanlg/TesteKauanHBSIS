using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using test.models;

namespace test.Controllers
{
    [Route("api/[controller]")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public class ClienteController : Controller
    {
        private ClienteModelContext _context = null;
        public ClienteController(ClienteModelContext context)
        {
            _context = context;
        }
        [HttpGet("[action]")]
        public List<Cliente> GetData()
        {
            List<Cliente> data = null;
            data = _context.Cliente.ToList();
            return data;
        }

        [HttpGet("[action]")]
        public List<TipoCliente> GetTipoCliente()
        {
            List<TipoCliente> data = null;
            data = _context.TipoCliente.ToList();
            return data;
        }

        [HttpGet]
        [Route("GetDetails/{id?}")]
        public Cliente GetDetails(int? id)
        {
            Cliente data = new Cliente();
            if (id.HasValue)
            {
                data = _context.Cliente.Where(p => p.ClienteId == id.Value).FirstOrDefault();
                if (data == null)
                {
                    data = new Cliente();
                }
            }
            return data;
        }

        [HttpPost("[action]")]
        public IActionResult Save([FromBody] Cliente cliente)
        {
            bool isNew = false;
            Cliente data = _context.Cliente.Where(p => p.ClienteId == cliente.ClienteId).FirstOrDefault();
            if (data == null)
            {
                data = new Cliente();
                isNew = true;
            }
            data.Nome = cliente.Nome;
            data.Identificador = cliente.Identificador;
            data.Telefone = cliente.Telefone;
            data.TipoClienteId = cliente.TipoClienteId;

            if (isNew)
            {
                _context.Add(data);
            }
            _context.SaveChanges();
            return Ok(data);
        }

        [HttpDelete("[action]")]
        public IActionResult Delete([FromBody] int id)
        {
            Cliente data = _context.Set<Cliente>().FirstOrDefault(c => c.ClienteId == id);
            _context.Entry(data).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
            _context.SaveChanges();
            return Ok(true);
        }
    }
}
