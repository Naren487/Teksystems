
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>

<link
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
	rel="stylesheet" />
<!-- Google Fonts -->
<link
	href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
	rel="stylesheet" />
<!-- MDB -->
<link
	href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.css"
	rel="stylesheet" />
<style>
main {
	margin: 50px;
	height: 20vh;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
	flex-wrap: wrap;
}

user-card {
	padding: 30px;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, .2);
	border-radius: 10px;
	width: 260px;
	display: inherit;
	cursor: pointer;
	background: #505050;
	color: white;
}

user-card:hover {
	box-shadow: 0px 10px 30px rgba(0, 0, 0, 20%);
	transition: 300ms ease;
	color: black;
	font-weight:bolder;}
</style>
</head>

<body>
	<!-- Section: Design Block -->
	<section class="text-center">
		<!-- Background image -->
		<div class="p-5 bg-image"
			style="background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg'); height: 300px;"></div>
		<!-- Background image -->

		<div class="card mx-4 mx-md-5 shadow-5-strong"
			style="margin-top: -100px; background: hsla(0, 0%, 100%, 0.8); backdrop-filter: blur(30px);">
			<div class="card-body py-5 px-md-5" style="    height: 31pc;">

				<div class="row d-flex justify-content-center">
					<div class="col-lg-8">
						<h2 class="fw-bold mb-5">Sports Shoe Admin Controles</h2>

						<main>
							<a href="categories"> <user-card class="bg-primary"
									avatar="https://cdn.midjourney.com/b4917b7e-f175-4676-a093-b52c1071032a/grid_0.png"
									name="John Doe" description="A peaceful warrior">
								Categories </user-card>
							</a><a href="products"> <user-card class="bg-primary"
									avatar="https://cdn.midjourney.com/272769d6-641a-4959-8ff4-aea3fa394eba/grid_0.png"
									name="Jane Doe" description="An AI image prompt creator">
								Products </user-card>
							</a><a href="Users"> <user-card class="bg-primary"
									avatar="https://cdn.midjourney.com/272769d6-641a-4959-8ff4-aea3fa394eba/grid_0.png"
									name="Jane Doe" description="An AI image prompt creator">
								Registered Users </user-card>
							</a><a href="Report"> <user-card class="bg-primary"	
									avatar="https://cdn.midjourney.com/272769d6-641a-4959-8ff4-aea3fa394eba/grid_0.png"
									name="Jane Doe" description="An AI image prompt creator">
								Purchase Reports </user-card>
							</a>
							<a href="chage_password"> <user-card class="bg-primary"	
									avatar="https://cdn.midjourney.com/272769d6-641a-4959-8ff4-aea3fa394eba/grid_0.png"
									name="Jane Doe" description="An AI image prompt creator">
								Change Password</user-card>
							</a>
						</main>
					</div>
				</div>
			</div>
			
        <a class="btn btn-primary"  href="logout">Logout</a>
		</div>
	</section>
	<!-- Section: Design Block -->


</body>
</html>