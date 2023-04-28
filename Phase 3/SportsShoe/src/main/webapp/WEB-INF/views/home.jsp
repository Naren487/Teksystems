
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
<title>Sports Shoe</title>
<!-- Font Awesome -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
	integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
	crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
	integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
	crossorigin="anonymous">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
	integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
	crossorigin="anonymous"></script>
<link
	href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700&subset=latin-ext"
	rel="stylesheet">


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
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  top:60px;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
#slider-text {
	padding-top: 40px;
	display: block;
}

#slider-text .col-md-6 {
	overflow: hidden;
}

#slider-text h2 {
	font-family: 'Josefin Sans', sans-serif;
	font-weight: 400;
	font-size: 30px;
	letter-spacing: 3px;
	margin: 30px auto;
	padding-left: 40px;
}

#slider-text h2::after {
	border-top: 2px solid #c7c7c7;
	content: "";
	position: absolute;
	bottom: 35px;
	width: 100%;
}

#itemslider h4 {
	font-family: 'Josefin Sans', sans-serif;
	font-weight: 400;
	font-size: 12px;
	margin: 10px auto 3px;
}

#itemslider h5 {
	font-family: 'Josefin Sans', sans-serif;
	font-weight: bold;
	font-size: 12px;
	margin: 3px auto 2px;
}

#itemslider h6 {
	font-family: 'Josefin Sans', sans-serif;
	font-weight: 300;;
	font-size: 10px;
	margin: 2px auto 5px;
}

.badge {
	background: #b20c0c;
	position: absolute;
	height: 40px;
	width: 40px;
	border-radius: 50%;
	line-height: 31px;
	font-family: 'Josefin Sans', sans-serif;
	font-weight: 300;
	font-size: 14px;
	border: 2px solid #FFF;
	box-shadow: 0 0 0 1px #b20c0c;
	top: 5px;
	right: 25%;
}

#slider-control img {
	padding-top: 60%;
	margin: 0 auto;
}

@media screen and (max-width: 992px) {
	#slider-control img {
		padding-top: 70px;
		margin: 0 auto;
	}
}

.carousel-showmanymoveone .carousel-control {
	width: 4%;
	background-image: none;
}

.carousel-showmanymoveone .carousel-control.left {
	margin-left: 5px;
}

.carousel-showmanymoveone .carousel-control.right {
	margin-right: 5px;
}

.carousel-showmanymoveone .cloneditem-1, .carousel-showmanymoveone .cloneditem-2,
	.carousel-showmanymoveone .cloneditem-3, .carousel-showmanymoveone .cloneditem-4,
	.carousel-showmanymoveone .cloneditem-5 {
	display: none;
}

@media all and (min-width: 768px) {
	.carousel-showmanymoveone .carousel-inner>.active.left,
		.carousel-showmanymoveone .carousel-inner>.prev {
		left: -50%;
	}
	.carousel-showmanymoveone .carousel-inner>.active.right,
		.carousel-showmanymoveone .carousel-inner>.next {
		left: 50%;
	}
	.carousel-showmanymoveone .carousel-inner>.left,
		.carousel-showmanymoveone .carousel-inner>.prev.right,
		.carousel-showmanymoveone .carousel-inner>.active {
		left: 0;
	}
	.carousel-showmanymoveone .carousel-inner .cloneditem-1 {
		display: block;
	}
}

@media all and (min-width: 768px) and (transform-3d) , all and
	(min-width: 768px) and (-webkit-transform-3d) {
	.carousel-showmanymoveone .carousel-inner>.item.active.right,
		.carousel-showmanymoveone .carousel-inner>.item.next {
		-webkit-transform: translate3d(50%, 0, 0);
		transform: translate3d(50%, 0, 0);
		left: 0;
	}
	.carousel-showmanymoveone .carousel-inner>.item.active.left,
		.carousel-showmanymoveone .carousel-inner>.item.prev {
		-webkit-transform: translate3d(-50%, 0, 0);
		transform: translate3d(-50%, 0, 0);
		left: 0;
	}
	.carousel-showmanymoveone .carousel-inner>.item.left,
		.carousel-showmanymoveone .carousel-inner>.item.prev.right,
		.carousel-showmanymoveone .carousel-inner>.item.active {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		left: 0;
	}
}

@media all and (min-width: 992px) {
	.carousel-showmanymoveone .carousel-inner>.active.left,
		.carousel-showmanymoveone .carousel-inner>.prev {
		left: -16.666%;
	}
	.carousel-showmanymoveone .carousel-inner>.active.right,
		.carousel-showmanymoveone .carousel-inner>.next {
		left: 16.666%;
	}
	.carousel-showmanymoveone .carousel-inner>.left,
		.carousel-showmanymoveone .carousel-inner>.prev.right,
		.carousel-showmanymoveone .carousel-inner>.active {
		left: 0;
	}
	.carousel-showmanymoveone .carousel-inner .cloneditem-2,
		.carousel-showmanymoveone .carousel-inner .cloneditem-3,
		.carousel-showmanymoveone .carousel-inner .cloneditem-4,
		.carousel-showmanymoveone .carousel-inner .cloneditem-5,
		.carousel-showmanymoveone .carousel-inner .cloneditem-6 {
		display: block;
	}
}

@media all and (min-width: 992px) and (transform-3d) , all and
	(min-width: 992px) and (-webkit-transform-3d) {
	.carousel-showmanymoveone .carousel-inner>.item.active.right,
		.carousel-showmanymoveone .carousel-inner>.item.next {
		-webkit-transform: translate3d(16.666%, 0, 0);
		transform: translate3d(16.666%, 0, 0);
		left: 0;
	}
	.carousel-showmanymoveone .carousel-inner>.item.active.left,
		.carousel-showmanymoveone .carousel-inner>.item.prev {
		-webkit-transform: translate3d(-16.666%, 0, 0);
		transform: translate3d(-16.666%, 0, 0);
		left: 0;
	}
	.carousel-showmanymoveone .carousel-inner>.item.left,
		.carousel-showmanymoveone .carousel-inner>.item.prev.right,
		.carousel-showmanymoveone .carousel-inner>.item.active {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		left: 0;
	}
}

.buttons {
	font-size: 15px;
	margin: 10px;
}
</style>
</head>

<body>
	<div class="container">
		<header>
			<!-- Navbar -->
			<nav class="navbar navbar-expand-lg navbar-light bg-white">
				<div class="container-fluid">
					<button class="navbar-toggler" type="button"
						data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
						aria-controls="navbarExample01" aria-expanded="false"
						aria-label="Toggle navigation">
						<i class="fas fa-bars"></i>
					</button>
					<div class="collapse navbar-collapse" id="navbarExample01">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item active"><a class="nav-link"
								aria-current="page" href="home">Home ${username}</a></li>
							<li class="nav-item"><a class="nav-link"
								href="../user/logout">Logout</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
		<div class="container">
			<h1>Categories</h1>
			<ul class="list-group list-group-horizontal">
				<c:forEach var="cate" items="${categories}">
					<a class="buttons btn btn-primary"
						href="../selectCategories/{${cate.categories}}">
						${cate.categories}</a>
				</c:forEach>
			</ul>
		</div>
		<div class="container-fluid" style="display:flex;">

			<h1 class="text-center">Products</h1><br>
			<c:forEach var="product" items="${items}">
			<div class="card">
				<img src="${product.image}" alt="" style="width: 200px;height:250px;">
				<h1>${product.name}</h1>
				<h3>${product.category}</h3>
				<p class="price">Rs-${product.price}</p>
				<p>${product.description}</p>
				<p>
					<a class="buttons btn btn-success" href="../user/viewProducts/{${product.id}}">View</a>
				</p>
			</div>
			</c:forEach>
		</div>
	</div>
</body>
<!-- MDB -->
<script type="text/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js"></script>
<script>
	$(document).ready(
			function() {

				$('#itemslider').carousel({
					interval : 3000
				});

				$('.carousel-showmanymoveone .item').each(
						function() {
							var itemToClone = $(this);

							for (var i = 1; i < 6; i++) {
								itemToClone = itemToClone.next();

								if (!itemToClone.length) {
									itemToClone = $(this).siblings(':first');
								}

								itemToClone.children(':first-child').clone()
										.addClass("cloneditem-" + (i))
										.appendTo($(this));
							}
						});
			});
</script>
</html>