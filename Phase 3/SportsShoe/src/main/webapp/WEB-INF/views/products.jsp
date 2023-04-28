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
					class="nav-link active">Products</a></li>
					 <li class="nav-item">
    <a class="nav-link " href="categories">Categories</a>
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
		<hr>
		
		  <img  src="${img}">
      <hr>
			<h3 class="text-center">List of Products</h3>
			<hr>
			<div class="container text-left">

				<a href="addProduct" class="btn btn-success">Add
					New Product</a>
					    ${msg}
			</div>
			<br>
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>CategoryD</th>
						<th>Description</th>
						<th>Image</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<!--   for (Todo todo: todos) {  -->
					<c:forEach var="product" items="${products}">

						<tr>
							<td><c:out value="${product.id}" /></td>
							<td><c:out value="${product.name}" /></td>
							<td><c:out value="${product.category}" /></td>
							<td><c:out value="${product.description}" /></td>
							<td><img src="${product.image}" width="100px" height="100px" /></td>
							<td><c:out value="${product.price}" /></td>
							<td> <a href="edit/{${product.id}}" class="btn btn-primary">Edit</a> <a href="delete/${product.id}" class="btn btn-primary">Delete</a>  </td>
						</tr>
					</c:forEach>
					<!-- } -->
				</tbody>

			</table>
		</div>
	</div>
</body>
</html>