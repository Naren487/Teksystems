<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
<title>SportsShoe | Products</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
<!-- Font Awesome -->
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
				<li><a href="products" class="nav-link ">Products</a></li>
				<li class="nav-item"><a class="nav-link " href="categories">Categories</a>
				</li>
				<li class="nav-item"><a class="nav-link active" href="Users">Registered
						Users</a></li>
				<li class="nav-item"><a class="nav-link" href="admin/Report">Purchase
						Report</a>
						<li class="nav-item"><a class="nav-link" href="chage_password">Change Password</a></li>
						</li>
				<li class="nav-item"><a class="nav-link" href="logout">Logout</a>
				</li>

			</ul>
		</nav>
	</header>
	<br>

	<div class="row" style="width: 100%;">
		<!-- <div class="alert alert-success" *ngIf='message'>{{message}}</div> -->

		<div class="container">
			<h3 class="text-center">List of Registered Users</h3>
			<hr>
			<div class="container text-left">
			<form action="/SearchUser" method="post">
				<div class="input-group">
					<div class="form-outline">
						<input type="search" id="form1"  name="name" class="form-control" required/> <label
							class="form-label" for="form1">Search</label>
					</div>
					<button type="submit" class="btn btn-primary">
						<i class="fas fa-search"></i>
					</button>
				</div>
				</form>
			</div>
			<br>
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Number</th>
						<th>Address</th>
						<th>Password</th>
					</tr>
				</thead>
				<tbody>
					<!--   for (Todo todo: todos) {  -->
					<c:forEach var="user" items="${users}">

						<tr>
							<td><c:out value="${user.id}" /></td>
							<td><c:out value="${user.name}" /></td>
							<td><c:out value="${user.number}" /></td>
							<td><c:out value="${user.address}" /></td>
							<td><c:out value="${user.password}" /></td>
						</tr>
					</c:forEach>
					<!-- } -->
				</tbody>

			</table>
		</div>
	</div>
</body>
<!-- MDB -->
<script type="text/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js"></script>
</html>