using API_Alimento_Teste.Lib.Interfaces;
using Simple.Sqlite;
using System.IO;

namespace API_Alimento_Teste.DA
{
    public class Database : IDatabase
    {
        private readonly string dbPath;
        private SqliteDB db;
        public Database(string dbPath)
        {
            var fileInfo = new FileInfo(dbPath);
            if (!fileInfo.Directory.Exists) fileInfo.Directory.Create();
            this.dbPath = dbPath;
        }
        public IAlimentos Alimentos { get; private set; }
        
        public void Config()
        {
            db = new SqliteDB(dbPath);
            Alimentos = new Alimento_SQLite(db);
        }
    }
}