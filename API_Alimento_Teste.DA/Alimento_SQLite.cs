using API_Alimento_Teste.Lib.Interfaces;
using API_Alimento_Teste.Lib.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Simple.Sqlite;

namespace API_Alimento_Teste.DA
{
    public class Alimento_SQLite : IAlimentos
    {
        SqliteDB DB;
        public Alimento_SQLite(SqliteDB DB)
        {
            this.DB = DB;
            DB.CreateTables()
              .Add<Model_Alimento>()
              .Commit();
        }
        public int Atualiza_Alimento(Model_Alimento alimento)
        {
            return (int)DB.InsertOrReplace(alimento);
        }

        public int Cadastro_Alimento(Model_Alimento alimento)
        {
            return (int)DB.Insert(alimento);
        }

        public Model_Alimento ConsultaAlimento(int id)
        {
            return DB.Get<Model_Alimento>("ID", id);
        }

        public IEnumerable<Model_Alimento> ConsultaAlimento_Nome(string nome)
        {
            return DB.GetAllWhere<Model_Alimento>("Nome", nome);
        }

        public IEnumerable<Model_Alimento> ListarAlimentos()
        {
            return DB.GetAll<Model_Alimento>();
        }
    }
}
