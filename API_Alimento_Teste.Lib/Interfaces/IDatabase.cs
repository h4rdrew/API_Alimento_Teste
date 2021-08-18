namespace API_Alimento_Teste.Lib.Interfaces
{
    public interface IDatabase
    {
        public IAlimentos Alimentos { get; }
        public void Config();
    }
}
