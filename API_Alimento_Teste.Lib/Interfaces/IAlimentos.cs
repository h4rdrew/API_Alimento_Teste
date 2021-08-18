using API_Alimento_Teste.Lib.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API_Alimento_Teste.Lib.Interfaces
{
    public interface IAlimentos
    {
        public int Cadastro_Alimento(Model_Alimento alimento);
        public int Atualiza_Alimento(Model_Alimento alimento);
        public IEnumerable<Model_Alimento> ConsultaAlimento_Nome(string nome);
        public Model_Alimento ConsultaAlimento(int id);
        public IEnumerable<Model_Alimento> ListarAlimentos();
    }
}
