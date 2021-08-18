using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Alimento_Teste.Lib.Interfaces;
using Simple.Sqlite;

namespace API_Alimento_Teste.DA
{
    public class Database : IDatabase
    {
        private readonly string dbPath;
        private SqliteDB db;
        public Database()
        {
            
        }
        public IAlimentos Alimentos { get; set; }
        
        public void Config()
        {
            db = new SqliteDB(dbPath);
            Alimentos = new Alimento_SQLite(db);
        }
    }
}