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
				<li><a href="../products" class="nav-link active">Products</a></li>
				<li class="nav-item"><a class="nav-link " href="categories">Categories</a>
				</li>
				<li class="nav-item"><a class="nav-link" href="Users">Registered
						Users</a></li>
				<li class="nav-item"><a class="nav-link" href="Report">Purchase
						Report</a></li>
						<li class="nav-item"><a class="nav-link" href="chage_password">Change Password</a></li>
				<li class="nav-item"><a class="nav-link" href="logout">Logout</a>
				</li>

			</ul>
		</nav>
	</header>
	<br>
	<div class="container col-md-5">
		<div class="card">
			<div class="card-body">


				<c:if test="${create == true}">
					<form action="/admin/saveProduct" method="post"
						enctype="multipart/form-data">

						<h2>Add Product</h2>


						<input type="hidden" name="operation" value="" />
						<fieldset class="form-group">
							<label>Product Name</label> <input type="text"
								value="${product.name}" name="name" class="form-control"
								required="required">
						</fieldset>

						<fieldset class="form-group">
							<label>Category</label> <br> <select class="w-100"
								name="category">
								<c:forEach var="cat" items="${cate}">
									<option value="${cat.categories}">${cat.categories}</option>
								</c:forEach>
							</select>
						</fieldset>
						<fieldset class="form-group">
							<label>Description</label> <input type="text"
								value="${product.description}" name="description"
								class="form-control">
						</fieldset>
						<fieldset class="form-group">
							<label>Image</label> <input type="file" value="${product.image}"
								name="image" class="form-control"><img width="100px"
								height="100px" src="${product.image}" />
						</fieldset>
						<fieldset class="form-group">
							<label>Price</label> <input type="number"
								value="${product.price}" name="price" class="form-control">
						</fieldset>

						<button type="submit" class="btn btn-success">Add</button>
					</form>
				</c:if>

				<c:if test="${edit == true}">
					<form action="../UpdateProduct" method="post"
						enctype="multipart/form-data">
						<h2>Edit Product</h2>

						<input type="hidden" name="id" value="${product.id}" />
						<fieldset class="form-group">
							<label>Product Name</label> <input type="text"
								value="${product.name}" name="name" class="form-control"
								required="required">
						</fieldset>

						<fieldset class="form-group">
							<label>Category</label> <br> <select class="w-100"
								name="category">
								<c:forEach var="cat" items="${cate}">
									<c:if test="${edit == true}">
										<option value="${product.category}">${product.category}</option>
									</c:if>
									<option value="${cat.categories}">${cat.categories}</option>
								</c:forEach>
							</select>
						</fieldset>
						<fieldset class="form-group">
							<label>Description</label> <input type="text"
								value="${product.description}" name="description"
								class="form-control">
						</fieldset>
						<fieldset class="form-group">
							<label>Image</label> <input type="hidden"
								value="${product.image}" name="image" class="form-control"
								required="required"> <img width="100px"
								height="100px" src="${product.image}" />
						</fieldset>
						<fieldset class="form-group">
							<label>Price</label> <input type="number"
								value="${product.price}" name="price" class="form-control">
						</fieldset>

						<button type="submit" class="btn btn-success">Update</button>
					</form>
				</c:if>


				<caption>
					<c:if test="${categorie == true}">
						<form action="saveCategory" method="post">

							<h2>Add Categorie</h2>
				</caption>

				<input type="hidden" name="id" value="<c:out value='${user.id}' />" />

				<fieldset class="form-group">
					<label>New Category Name</label> <input type="text" name="category"
						class="form-control" required="required">
				</fieldset>
				<button type="submit" class="btn btn-success">Add</button>
				</form>
				</c:if>
			</div>
		</div>
	</div>
</body>
</html>