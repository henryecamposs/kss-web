using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cp_Entidad
{
   public class Usuario
    {
        private string nombre = string.Empty;

        public string Nombre
        {
            get { return nombre; }
            set { nombre = value; }
        }
        private string contraseña = string.Empty;

        public string Contraseña
        {
            get { return contraseña; }
            set { contraseña = value; }
        }
    }
}
