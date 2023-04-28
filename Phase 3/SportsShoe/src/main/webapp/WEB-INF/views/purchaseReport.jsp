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
				<li class="nav-item"><a class="nav-link" href="Users">Registered
						Users</a></li>
				<li class="nav-item"><a class="nav-link active" href="Report">Purchase
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
			<h3 class="text-center">List of Purchase Reports</h3>
			<hr>
			<div class="row mb-4" style="margin: 0 57vh;">
					<form action="/admin/filterData" method="post">
				<div class="col">
					<div class="form-outline w-100">
						<label
							class="form-label" for="form3Example1">Category</label>
						<select class="w-100"
								name="category">
								<c:forEach var="cat" items="${cate}">
									<option value="${cat.categories}">${cat.categories}</option>
								</c:forEach>
							</select> 
					
					</div>
				</div>
				<div class="col ">
					<div class="form-outline w-100">
					
						 <label
							class="form-label" for="form3Example1">Date</label>
						<input type="text" id="form3Example1" name="date"class="form-control" />
					</div>
				<button class="btn btn-success">Filter</button>
				</div>
					</form>

			</div>
			<br>
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>ID</th>
						<th>User Name</th>
						<th>User Contact</th>
						<th>Product Name</th>
						<th>Category</th>
						<th>Purchase Date</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<!--   for (Todo todo: todos) {  -->
					<c:forEach var="report" items="${reports}">

						<tr>
							<td><c:out value="${report.id}" /></td>
							<td><c:out value="${report.username}" /></td>
							<td><c:out value="${report.userNumber}" /></td>
							<td><c:out value="${report.productName}" /></td>
							<td><c:out value="${report.category}" /></td>
							<td><c:out value="${report.date}" /></td>
							<td><c:out value="${report.price}" /></td>
						</tr>
					</c:forEach>
					<!-- } -->
				</tbody>

			</table>
		</div>
	</div>
</body>
</html>