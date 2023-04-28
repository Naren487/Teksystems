
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<title>Sports Shoe</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
</head>
<body>
<header>
		<nav style="background-color: black; font-weight: bolder;"
			class="navbar navbar-expand-md navbar-dark bg-primary"
			style="background-color: tomato">
			<div>
				<a href="https://www.javaguides.net" class="navbar-brand text-dark">SportsShoe
					Admin </a>
			</div>

			<ul class="navbar-nav">
				<li><a href="../products" class="nav-link ">Products</a></li>
				<li class="nav-item"><a class="nav-link " href="categories">Categories</a>
				</li>
				<li class="nav-item"><a class="nav-link" href="Users">Registered
						Users</a></li>
				<li class="nav-item"><a class="nav-link" href="Report">Purchase
						Report</a></li>
						<li class="nav-item"><a class="nav-link active" href="chage_password">Change Password</a></li>
				<li class="nav-item"><a class="nav-link" href="logout">Logout</a>
				</li>

			</ul>
		</nav>
	</header>
	<br>
	<div class="container col-md-5">
		<div class="card">
			<div class="card-body">
					<form action="password_changed" method="post">

				<caption>
					<h2>Change Password 
            		
					</h2>
					<h3> ${msg}</h3>
				</caption>

				<fieldset class="form-group">
					<label>Current Password</label> <input type="text"
						 class="form-control"
						name="cpass" required>
				</fieldset>

				<fieldset class="form-group">
					<label>New Password</label> <input type="text" class="form-control"
						name="npass" required>
				</fieldset>


				<button type="submit" class="btn btn-success">Change</button>
				</form>
				<p >${msg}</p>
			</div>
		</div>
	</div>
</body>
</html>