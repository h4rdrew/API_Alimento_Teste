using Simple.DatabaseWrapper.Attributes;

namespace API_Alimento_Teste.Lib.Models
{
    public class Model_Alimento
    {
        [PrimaryKey]
        public int ID { get; set; }
        public string Nome { get; set; }
    }
}
