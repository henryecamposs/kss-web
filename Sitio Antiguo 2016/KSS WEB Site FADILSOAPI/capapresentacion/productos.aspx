<%@ Page Title="Sistema FADILSOAPI" Language="C#" MasterPageFile="~/capapresentacion/MasterPage.master" AutoEventWireup="true" CodeFile="productos.aspx.cs" Inherits="_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>

<asp:Content ID="Content2" runat="server" ContentPlaceHolderID="ContentPlaceHolder1">

	<section id="content_area">
		<div class="clearfix wrapper main_content_area">
			<div class="clearfix main_content floatleft">
				<div class="clearfix slider">
					<ul class="pgwSlider">
						<li>
							<img src="images/sistemas/ksstalabarteria/thumbs/thumb_Image1.png" alt="KSS Talabarteria 2016" data-description="Una Bella apariencia!" data-large-src="images/sistemas/ksstalabarteria/slide_Image1.png" />
						</li>
						<li>
							<img src="images/sistemas/ksstalabarteria/thumbs/thumb_Image18.jpg" alt="Punto de venta (POS)" data-description="Realiza tareas comunes." data-large-src="images/sistemas/ksstalabarteria/slide_Image18.jpg" />
						</li>
						<li>
							<img src="images/sistemas/ksstalabarteria/thumbs/thumb_Image2.jpg" alt="Archivos de Productos" data-description="Agrega y modifica de manera intuitiva." data-large-src="images/sistemas/ksstalabarteria/slide_Image2.jpg" />
						</li>
						<li>
							<img src="images/sistemas/ksstalabarteria/thumbs/thumb_Image5.jpg" alt="Conexión a Base de Datos" data-description="Fácil conexión y configuración." data-large-src="images/sistemas/ksstalabarteria/slide_Image5.jpg" />
						</li>
					</ul>
				</div>

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
			<div class="clearfix sidebar_container floatright">
				<div class="panel panel-default">
					<div class="panel-body">
						<ul class="nav nav-tabs">
							<li class=""><a href="#home" data-toggle="tab" aria-expanded="false">Home</a></li>
							<li class="active"><a href="#profile" data-toggle="tab" aria-expanded="true">Profile</a></li>
							<li class="disabled"><a>Disabled</a></li>
							<li class="dropdown">
								<a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">Dropdown <span class="caret"></span>
								</a>
								<ul class="dropdown-menu">
									<li><a href="#dropdown1" data-toggle="tab">Action</a></li>
									<li class="divider"></li>
									<li><a href="#dropdown2" data-toggle="tab">Another action</a></li>
								</ul>
							</li>
						</ul>
					</div>
					<div id="myTabContent" class="tab-content">
						<div class="tab-pane fade" id="home">
							<dl>
								<dt>KSS Talabarteria</dt>
								<dd>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</dd>
							</dl>
							
						</div>
						<div class="tab-pane fade active in" id="profile">
							<p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
						</div>
						<div class="tab-pane fade" id="dropdown1">
							<p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
						</div>
						<div class="tab-pane fade" id="dropdown2">
							<p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>

</asp:Content>





