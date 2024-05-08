using cp_Datos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cp_Negocio
{
   public class AdministradorUsuarios
    {
        public static bool IniciarSesion(cp_Entidad.Usuario Objeto_Usuario)
        {
          return  ManejadorDatos.IniciarSesion(Objeto_Usuario);
        }
    }
}
