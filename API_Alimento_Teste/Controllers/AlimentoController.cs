using API_Alimento_Teste.Lib.Interfaces;
using API_Alimento_Teste.Lib.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Alimento_Teste.Controllers
{
    [ApiController]
    [Route("alimentos")]
    public class AlimentoController : Controller
    {
        private readonly IDatabase _db;
        public AlimentoController(IDatabase db)
        {
            _db = db;
        }

        [HttpGet]
        [Route("consulta_alimento")]
        public IActionResult Consulta_Alimento(int id)
        {
            var resultado = new Model_Alimento();
            if (id != 0) resultado = _db.Alimentos.ConsultaAlimento(id);
            return Ok(resultado);
        }

        [HttpPost]
        [Route("cadastra_alimento")]
        public IActionResult CadastraAlimento([FromBody] Model_Alimento alimento)
        {
            var resultado = _db.Alimentos.Cadastro_Alimento(alimento);
            return Ok(resultado);
        }

        [HttpPost]
        [Route("atualiza_alimento")]
        public IActionResult AtualizaAlimento([FromForm] Model_Alimento alimento)
        {
            var resultado = _db.Alimentos.Atualiza_Alimento(alimento);
            return Ok(resultado);
        }

        [HttpGet]
        [Route("busca_alimento_nome")]
        public IActionResult ConsultaAlimento_Nome(string nome)
        {
            var resultado = _db.Alimentos.ConsultaAlimento_Nome(nome);
            return Ok(resultado);
        }

        [HttpGet]
        [Route("lista_todos_alimentos")]
        public IActionResult ListarTodosAlimentos()
        {
            var resultado = _db.Alimentos.ListarAlimentos();
            return Ok(resultado);
        }
    }
}
