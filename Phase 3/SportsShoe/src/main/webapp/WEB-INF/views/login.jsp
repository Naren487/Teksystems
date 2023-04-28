
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" isELIgnored="false"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 <html>
 <head>
 <title>
 Sports Shoe
 </title>
 <!-- Font Awesome -->
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet"
/>
<!-- Google Fonts -->
<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  rel="stylesheet"
/>
<!-- MDB -->
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.css"
  rel="stylesheet"
/>
 </head>
 
 <body>
 <div class="container">
 <header>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="user/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
<section class="vh-100" style="    height: 92vh!important;">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1613659924-nike-zoomx-invin-1613659905.jpg?crop=0.633xw:1.00xh;0.173xw,0&resize=980:*"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form action="userLogin" method="post">
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
          <br>
            <h3>User Login</h3>
          </div>
          <h4 class="text-success"> ${msg}</h4>


          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="number" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" name="number" />
            <label class="form-label" for="form3Example3">Phone</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password"  name="password"/>
            <label class="form-label" for="form3Example4">Password</label>
          </div>

 
          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="register"
                class="link-danger">Register Here</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
 </div>
 </body>
 <!-- MDB -->
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js"
></script>
 </html>