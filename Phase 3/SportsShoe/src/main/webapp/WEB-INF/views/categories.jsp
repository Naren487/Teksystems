<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
<title>SportsShoe | Products</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
</head>
<body>

	<header>
		<nav style="    background-color: black;
    font-weight: bolder;" class="navbar navbar-expand-md navbar-dark bg-primary"
			style="background-color: tomato">
			<div>
				<a href="https://www.javaguides.net" class="navbar-brand text-dark">SportsShoe Admin </a>
			</div>

			<ul class="navbar-nav">
		<li><a href="products"
					class="nav-link ">Products</a></li>
					 <li class="nav-item">
    <a class="nav-link active" href="categories">Categories</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="Users">Registered Users</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="Report">Purchase Report</a>
  </li>
  <li class="nav-item"><a class="nav-link" href="chage_password">Change Password</a></li>
  <li class="nav-item">
    <a class="nav-link" href="logout">Logout</a>
  </li>
		
			</ul>
		</nav>
	</header>
	<br>

	<div class="row" style="width: 100%;">
		<!-- <div class="alert alert-success" *ngIf='message'>{{message}}</div> -->

		<div class="container">
			<h3 class="text-center">List of Categories</h3>
			<hr>
			<div class="container text-left">

				<a href="addCategories" class="btn btn-success">Add
					New Category</a>
					    ${msg}
			</div>
			<br>
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					<!--   for (Todo todo: todos) {  -->
					<c:forEach var="cat" items="${categories}">

						<tr>
							<td><c:out value="${cat.id}" /></td>
							<td><c:out value="${cat.categories}" /></td>
						</tr>
					</c:forEach>
					<!-- } -->
				</tbody>

			</table>
		</div>
	</div>
</body>
</html>