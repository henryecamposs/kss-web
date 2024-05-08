<%@ Page Title="" Language="C#" MasterPageFile="~/capapresentacion/MasterPage.master" AutoEventWireup="true" CodeFile="distribuidores.aspx.cs" Inherits="Default2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">

	<div class="clearfix  main_content  floatleft boxDatos">
		<form id="frmDistribuidor" runat="server">
				<div class="clearfix box bordes-redondos sombra">
					<h2 class="sombra-derecha">Datos de Distribuidor</h2>
					<span>Nombre Empresa: </span>
					<br />
					<input type="text" placeholder="Name" id="Text2" /><br />
					<span style="width: 50%">RIF Empresa: </span>
					<span>Nro. Telefónico: </span>
					<br />
					<input style="width: 48%" type="text" placeholder="Name" id="Text3" />
					<input style="width: 47%" type="text" placeholder="Name" id="Text4" />
					<br />
					<span>Dirección: </span>
					<br />
					<input type="text" placeholder="Name" id="Text7" />
					<br />
					<span style="width: 50%">Nombre Contacto: </span>
					<span>Nro. Telefónico: </span>
					<br />
					<input style="width: 48%" type="text" placeholder="Name" id="Text1" />
					<input style="width: 47%" type="text" placeholder="Name" id="Text5" />
					<br />
					<input type="submit" value="Guardar" id="mc-embedded-subscribe" />
				</div>

			<div class="clearfix box bordes-redondos sombra">
				<h2 class="sombra-derecha">Lista de Técnicos</h2>
				<table class="listaItems">
					<tr class="encabezado">
						<td>Código</td>
						<td>Nombres</td>
						<td>&nbsp;</td>
					</tr>
					<tr class="Item">
						<td>000001</td>
						<td>Pedro Pérez</td>
						<td class="Botones"><a href="#">Modificar</a> <a href="#">Eliminar</a> <a href="#">Consultar</a></td>
					</tr>
					<tr class="Item">
						<td>000002</td>
						<td>Henry Campos</td>
						<td class="Botones"><a href="#">Modificar</a> <a href="#">Eliminar</a> <a href="#">Consultar</a></td>
					</tr>
				</table>
				<div class="pagination">

					<nav>
						<ul>
							<li><a href=""><< </a></li>
							<li><a href="">1</a></li>
							<li><a href="">2</a></li>
							<li><a href="">3</a></li>
							<li><a href="">4</a></li>
							<li><a href="">>> </a></li>
						</ul>
					</nav>
				</div>
			</div>

			<div  class="clearfix box bordes-redondos sombra">
				<h2 class="sombra-derecha">Datos de Técnico</h2>
				<span>Nombre  y Apellido: </span>
				<br />
				<input type="text" placeholder="Name" id="Text6" /><br />
				<span style="width: 50%">Cédula Identidad: </span>
				<span>RIF: </span>
				<br />
				<input style="width: 48%" type="text" placeholder="Name" id="Text8" />
				<input style="width: 47%" type="text" placeholder="Name" id="Text9" />
				<br />
				<span>Dirección: </span>
				<br />
				<input type="text" placeholder="Name" id="Text10" />
				<br />
				<span style="width: 50%">Cargo:</span>
				<span>Nro. Telefónico: </span>
				<br />
				<input style="width: 48%" type="text" placeholder="Name" id="Text11" />
				<input style="width: 47%" type="text" placeholder="Name" id="Text12" />
				<br />
				<input type="submit" value="Guardar" id="Submit1" />
			</div>

			<div  class="clearfix box bordes-redondos sombra">
				<h2 class="sombra-derecha">Lista de Empresas</h2>
				<table class="listaItems">
					<tr class="encabezado">
						<td>Código</td>
						<td>RIF</td>
						<td>Razón Social</td>
						<td>&nbsp;</td>
					</tr>
					<tr class="Item">
						<td>000001</td>
						<td>J-12345678-9</td>
						<td>Kalixto Systems Solutions, C.A.</td>
						<td class="Botones"><a href="#">Modificar</a> <a href="#">Eliminar</a> <a href="#">Consultar</a></td>
					</tr>
					<tr class="Item">
						<td>000002</td>
						<td>J-12345678-9</td>
						<td>Empresa Demo</td>
						<td class="Botones"><a href="#">Modificar</a> <a href="#">Eliminar</a> <a href="#">Consultar</a></td>
					</tr>
				</table>
				<div class="pagination">

					<nav>
						<ul>
							<li><a href=""><< </a></li>
							<li><a href="">1</a></li>
							<li><a href="">2</a></li>
							<li><a href="">3</a></li>
							<li><a href="">4</a></li>
							<li><a href="">>> </a></li>
						</ul>
					</nav>
				</div>
			</div>

			<div class="clearfix box sombra bordes-redondos">
				<h2 class="sombra-derecha">Datos de Cliente</h2>
				<span>Nombre Empresa: </span>
				<br />
				<input type="text" placeholder="Name" id="Text13" /><br />
				<span style="width: 50%">RIF Empresa: </span>
				<span>Nro. Telefónico: </span>
				<br />
				<input style="width: 48%" type="text" placeholder="Name" id="Text14" />
				<input style="width: 47%" type="text" placeholder="Name" id="Text15" />
				<br />
				<span>Dirección: </span>
				<br />
				<input type="text" placeholder="Name" id="Text16" />
				<br />
				<span style="width: 50%">Nombre Contacto: </span>
				<span>Nro. Telefónico: </span>
				<br />
				<input style="width: 48%" type="text" placeholder="Name" id="Text17" />
				<input style="width: 47%" type="text" placeholder="Name" id="Text18" />
				<br />
				<input type="submit" value="Guardar" id="Submit2" />
			</div>


			<div class="clearfix box sombra bordes-redondos">
				<h2 class="sombra-derecha">Registro de Licencias</h2>
				<table class="listaItems">
					<tr class="encabezado">
						<td>Código</td>
						<td>Técnico</td>
						<td>Empresa</td>
						<td>Fecha </td>
						<td>Código Activación</td>
						<td>&nbsp;</td>
					</tr>
					<tr class="Item">
						<td>0000001</td>
						<td>Pedro Pérez</td>
						<td>Kalixto Systems Solutions,C.A.</td>
						<td>01/01/2015</td>
						<td>123456-234534-231245</td>
						<td class="Botones"><a href="#">Consultar</a></td>
					</tr>
					<tr class="Item">
						<td>0000002</td>
						<td>Henry Campos</td>
						<td>Empresa Demo,C.A.</td>
						<td>01/01/2015</td>
						<td>908980-786543-342562</td>
						<td class="Botones"><a href="#">Consultar</a></td>
					</tr>
				</table>
				<div class="pagination">

					<nav>
						<ul>
							<li><a href=""><< </a></li>
							<li><a href="">1</a></li>
							<li><a href="">2</a></li>
							<li><a href="">3</a></li>
							<li><a href="">4</a></li>
							<li><a href="">>> </a></li>
						</ul>
					</nav>
				</div>
			</div>

			<div  class="clearfix box bordes-redondos sombra">
				<h2 class="sombra-derecha">Generar Código Activación</h2>
				<span>Nombre Empresa: </span>
				<br />
				<input type="text" placeholder="Name" id="Text22" /><br />
				<span>RIF Empresa: </span>
				<br />
				<input style="width: 40%" type="text" placeholder="Name" id="Text24" />
				<span>Tipo Licencia: </span>
				<asp:DropDownList ID="DropDownList1" runat="server" CssClass="DropDown">
					<asp:ListItem Value="0">Demo</asp:ListItem>
					<asp:ListItem Value="1">Full</asp:ListItem>
					<asp:ListItem Value="2">Pago por Uso Anual</asp:ListItem>
					<asp:ListItem Value="3">Pago por Uso Mensual</asp:ListItem>
				</asp:DropDownList>
				<br />
				<span>Serial: </span>
				<br />
				<input type="text" placeholder="Name" id="mce-TEXT" /><br />
				<span>Codigo Activación: </span>
				<br />
				<input type="text" placeholder="Name" id="Text25" /><br />
				<input type="submit" value="Generar Código" id="Submit4" />
			</div>

			<div  class="clearfix box bordes-redondos sombra">
				<h2 class="sombra-derecha">Registro de Pagos</h2>
				<table class="listaItems">
					<tr class="encabezado">
						<td>Código</td>
						<td>Nro Transacción</td>
						<td>Banco</td>
						<td>Fecha</td>
						<td>Tipo Trans.</td>
						<td>&nbsp;</td>
					</tr>
					<tr class="Item">
						<td>0000001</td>
						<td>198837664523</td>
						<td>Banesco</td>
						<td>01/01/2015</td>
						<td>Deposito</td>
						<td class="Botones"><a href="#">Modificar</a> <a href="#">Eliminar</a> <a href="#">Consultar</a></td>
					</tr>
					<tr class="Item">
						<td>0000002</td>
						<td>43477746363663</td>
						<td>Venezuela</td>
						<td>01/01/2015</td>
						<td>Transferencia</td>
						<td class="Botones"><a href="#">Modificar</a> <a href="#">Eliminar</a> <a href="#">Consultar</a></td>
					</tr>
				</table>
				<div class="pagination">

					<nav>
						<ul>
							<li><a href=""><< </a></li>
							<li><a href="">1</a></li>
							<li><a href="">2</a></li>
							<li><a href="">3</a></li>
							<li><a href="">4</a></li>
							<li><a href="">>> </a></li>
						</ul>
					</nav>
				</div>
			</div>

			<div class="clearfix box sombra bordes-redondos">
				<h2 class="sombra-derecha">Registro de Pago</h2>
				<span>Nombre de Banco: </span>
				<br />
				<input type="text" placeholder="Name" id="Text19" /><br />
				<span style="width: 50%">Nro. Cuenta: </span>
				<span>Nro. Transacción: </span>
				<br />
				<input style="width: 48%" type="text" placeholder="Name" id="Text20" />
				<input style="width: 47%" type="text" placeholder="Name" id="Text21" />
				<br />
				<span>Razón de Pago:</span>
				<br />
				<asp:DropDownList ID="DropDownTipoLic" runat="server" Width="100%" CssClass="DropDown">
					<asp:ListItem Value="0">Genaración Licencia: Full-8838399-232322-2121 Empresa: Kalixto Systems Solutions Fecha:01/01/2015</asp:ListItem>
					<asp:ListItem Value="1">Genaración Licencia: Pago por Uso Anual-8838399-232322-2121 Empresa: Kalixto Systems Solutions Fecha:02/01/2015</asp:ListItem>
					<asp:ListItem Value="2">Pago por Uso Anual</asp:ListItem>
					<asp:ListItem Value="3">Pago por Uso Mensual</asp:ListItem>
				</asp:DropDownList>
				<br />
				<span style="width: 75px">Monto: </span>
				<input style="width: 20%" type="text" placeholder="Name" id="Text23" />
				<br />
				<input type="submit" value="Guardar" id="Submit3" />

			</div>
		</form>
	</div>
	<div class="clearfix sidebar_container floatright boxDatosLabels">
		<div class="clearfix box sombra-derecha">
			<h2>Distribuidor</h2>
			<span>Técnicos </span>
			<br />
			<div class="barBotonNav sombra-derecha bordes-redondos floatright"><a href="#">Agregar</a> <a href="#">Modificar</a> <a href="#">Eliminar</a> <a href="#">Consultar</a></div>
			<br />
			<span>Clientes </span>
			<br />
			<div class="barBotonNav  bordes-redondos sombra-derecha  floatright"><a href="#">Agregar</a> <a href="#">Modificar</a> <a href="#">Eliminar</a> <a href="#">Consultar</a></div>
			<br />
			<span>Licencias </span>
			<div class="barBotonNav bordes-redondos sombra-derecha floatright"><a href="#">Agregar</a> <a href="#">Modificar</a> <a href="#">Eliminar</a> <a href="#">Consultar</a></div>
			<br />
			<span>Pagos </span>
			<div class="barBotonNav bordes-redondos sombra-derecha floatright"><a href="#">Agregar</a> <a href="#">Modificar</a> <a href="#">Eliminar</a> <a href="#">Consultar</a></div>
			<br />
			<span>Reportes </span>
			<div class="barBotonNav bordes-redondos sombra-derecha floatright"><a href="#">Técnicos</a> <a href="#">Empresas</a> <a href="#">Licencias</a> <a href="#">Pagos	</a></div>
		</div>
	</div>

</asp:Content>

