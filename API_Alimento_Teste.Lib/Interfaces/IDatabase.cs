using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API_Alimento_Teste.Lib.Interfaces
{
    public interface IDatabase
    {
        public IAlimentos Alimentos { get; }
        public void Config();
    }
}
