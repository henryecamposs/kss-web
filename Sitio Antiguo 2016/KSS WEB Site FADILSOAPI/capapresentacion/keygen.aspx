<%@ Page Title="" Language="C#" MasterPageFile="~/capapresentacion/MasterPage.master" AutoEventWireup="true" CodeFile="keygen.aspx.cs" Inherits="Default2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" runat="server" ContentPlaceHolderID="ContentPlaceHolder1">
	<div class="clearfix main_content floatleft boxDatos ">
		<div class="clearfix box">
			<form id="form1" runat="server">
				<h2>Generar Código Activación</h2>
				<span>Nombre Empresa: </span>
				<br />
				<input type="text" placeholder="Name" id="Text2" /><br />
				<span>RIF Empresa: </span>
				<br />
				<input style="width: 40%" type="text" placeholder="Name" id="Text3" />
				<span>Tipo Licencia: </span>
				<asp:DropDownList ID="DropDownTipoLic" runat="server" cssclass="DropDown">
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
				<input type="text" placeholder="Name" id="Text1" /><br />
				<input type="submit" value="Generar Código" id="mc-embedded-subscribe" />
			</form>
		</div>

	</div>
	<div class="clearfix sidebar_container floatright boxDatosLabels">
		<div class="clearfix box">
				<h2>Datos de Licenciamiento</h2>
				<span>Distribuidor: </span>Kalixto Systems Solutions C.A.<br />
				<span>Empresa: </span><a href="">Empresa Demo, C.A.</a><br />
				<span>RIF: </span>J-12345678-9<br />
				<span>Dirección: </span>Local PB, Edificio,Nombre Calle, Nombre Avenida, Nombre Urbanización, Ciudad, Estado, País<br />
				<span>Contacto: </span>Pedro Pérez<br />
				<span>Nro.Teléfono: </span>+58 2125555555
		</div>
		<%--	<div class="clearfix sidebar">
						<div class="clearfix single_sidebar">
							<div class="popular_post">
								<div class="sidebar_title"><h2>Most Popular</h2></div>
								<ul>
									<li><a href="">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. </a></li>
									<li><a href="">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. </a></li>
									<li><a href="">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. </a></li>
									<li><a href="">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. </a></li>
									<li><a href="">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. </a></li>
								</ul>
							</div>
							</div>
						<div class="clearfix single_sidebar category_items">
							<h2>Categories</h2>
							<ul>
								<li class="cat-item"><a href="">Category Name</a>(12)</li>
								<li class="cat-item"><a href="">Category Name </a>(12)</li>
								<li class="cat-item"><a href="">Category Name</a>(12)</li>
								<li class="cat-item"><a href="">Category Name </a>(12)</li>
								<li class="cat-item"><a href="">Category Name </a>(12)</li>
							</ul>
						</div>
						<div class="clearfix single_sidebar">
							<h2>Recent Post</h2>
							<ul>
								<li><a href="">Category Name <span>(12)</span></a></li>
								<li><a href="">Category Name <span>(12)</span></a></li>
								<li><a href="">Category Name <span>(12)</span></a></li>
								<li><a href="">Category Name <span>(12)</span></a></li>
								<li><a href="">Category Name <span>(12)</span></a></li>
							</ul>
						</div>
					</div>--%>
	</div>

</asp:Content>


