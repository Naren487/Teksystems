
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

body {
  background: #f2f4f7;
  color: #28333b;
  font-family: 'DM Sans', sans-serif;
  font-size: 1em;
  padding: 0px 25px;
}
body a {
  color: #28333b;
  text-decoration: none;
  border-bottom: 2px solid rgba(64,179,255,0.5);
  opacity: 0.75;
  transition: all 0.5s ease;
}
body a:hover {
  border-bottom: 2px solid #40b3ff;
  opacity: 1;
}
.field {
  margin-bottom: 25px;
}
.field.full {
  width: 100%;
}
.field.half {
  width: calc(50% - 12px);
}
.field label {
  display: block;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 8px;
}
.field input {
  padding: 12px;
  border-radius: 6px;
  border: 2px solid #e8ebed;
  display: block;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
}
.field input:placeholder {
  color: #e8ebed !important;
}
.flex {
  display: flex;
  flex-direction: row wrap;
  align-items: center;
}
.flex.justify-space-between {
  justify-content: space-between;
}
.card {
height:91%;
  padding: 50px;
  margin: 50px auto;
  max-width: 850px;
  background: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0px 24px 60px -1px rgba(37,44,54,0.14);
}
.card .container {
  max-width: 700px;
  margin: 0 auto;
}
.card .card-title {
  margin-bottom: 50px;
}
.card .card-title h2 {
  margin: 0;
}
.card .card-body .payment-type,
.card .card-body .payment-info {
  margin-bottom: 25px;
}
.card .card-body .payment-type h4 {
  margin: 0;
}
.card .card-body .payment-type .types {
  margin: 25px 0;
}
.card .card-body .payment-type .types .type {
  width: 30%;
  position: relative;
  background: #f2f4f7;
  border: 2px solid #e8ebed;
  padding: 25px;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s ease;
}
.card .card-body .payment-type .types .type:hover {
  border-color: #28333b;
}
.card .card-body .payment-type .types .type:hover .logo,
.card .card-body .payment-type .types .type:hover p {
  color: #28333b;
}
.card .card-body .payment-type .types .type.selected {
  border-color: #40b3ff;
  background: rgba(64,179,255,0.1);
}
.card .card-body .payment-type .types .type.selected .logo {
  color: #40b3ff;
}
.card .card-body .payment-type .types .type.selected p {
  color: #28333b;
}
.card .card-body .payment-type .types .type.selected::after {
  content: '\f00c';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  position: absolute;
  height: 40px;
  width: 40px;
  top: -21px;
  right: -21px;
  background: #fff;
  border: 2px solid #40b3ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card .card-body .payment-type .types .type .logo,
.card .card-body .payment-type .types .type p {
  transition: all 0.5s ease;
}
.card .card-body .payment-type .types .type .logo {
  font-size: 48px;
  color: #8a959c;
}
.card .card-body .payment-type .types .type p {
  margin-bottom: 0;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #8a959c;
}
.card .card-body .payment-info .column {
  width: calc(50% - 25px);
}
.card .card-body .payment-info .title {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.card .card-body .payment-info .title .num {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 2px solid #40b3ff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: 12px;
  font-size: 12px;
}
footer {
  margin: 50px auto;
  max-width: 850px;
  text-align: center;
}
.button {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.5px;
  padding: 15px 25px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.5s ease;
  background: transparent;
  border: 2px solid transparent;
}
.button.button-link {
  padding: 0 0 2px;
  margin: 0 25px;
  border-bottom: 2px solid rgba(64,179,255,0.5);
  border-radius: 0;
  opacity: 0.75;
}
.button.button-link:hover {
  border-bottom: 2px solid #40b3ff;
  opacity: 1;
}
.button.button-primary {
  background: #40b3ff;
  color: #fff;
}
.button.button-primary:hover {
  background: #218fd9;
}
.button.button-secondary {
  background: transparent;
  border-color: #e8ebed;
  color: #8a959c;
}
.button.button-secondary:hover {
  border-color: #28333b;
  color: #28333b;
}

.buttons {
	font-size: 15px;
	margin: 10px;
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");body{background-color: #eee;font-family: "Poppins", sans-serif;font-weight: 300}.cart{height: 100vh}.progresses{display: flex;align-items: center}.line{width: 76px;height: 6px;background: #63d19e}.steps{display: flex;background-color: #63d19e;color: #fff;font-size: 12px;width: 30px;height: 30px;align-items: center;justify-content: center;border-radius: 50%}.check1{display: flex;background-color: #63d19e;color: #fff;font-size: 17px;width: 60px;height: 60px;align-items: center;justify-content: center;border-radius: 50%;margin-bottom: 10px}.invoice-link{font-size: 15px}.order-button{height: 50px}.background-muted{background-color:#fafafc}
</style>
</head>

<body>
	<div class="container">
		
		<article class="card">
	<div class="container">
		<div class="card-title">
			
		</div>
		<div class="card-body" style="    position: relative;
    left: 192px;
    bottom: 58px;">
    <div class="container mt-4 mb-4" style="position: relative;
    left: -23vh;">
    <div class="row d-flex cart align-items-center justify-content-center">
        <div class="col-md-10" style="height: 64%;
    top: -19%;box-shadow:0px 0px 12px 12px #888888;">
            <div class="card">
                <div class="d-flex justify-content-center border-bottom">
                    <div class="p-3">
                       <h2>Order Conformaton</h2>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-md-6 border-right p-5">
                        <div class="text-center order-details">
                            <div class="d-flex justify-content-center mb-5 flex-column align-items-center"> 
                            <span class="check1"><i class="fa fa-check"></i></span> 
                            <span class="font-weight-bold">Order Confirmed</span>
                               </div> <button class="btn btn-danger btn-block order-button"><a class="btn btn-dark" href="../home">Go to Home Page</a></button>
                        </div>
                    </div>
                    <div class="col-md-6 background-muted">
                        <div class="p-3 border-bottom">
                            <div class="d-flex justify-content-between align-items-center"> 
                            <span><i class="fa fa-clock-o text-muted"></i> 3 days delivery</span> 
                            <span><i class="fa fa-refresh text-muted"></i> Refund Policy</span> </div>
                            <div class="mt-3">
                                <h6 class="mb-0">Thank you for Choosing our service</h6> 
                                <div class="d-flex flex-column mt-3">
                                 <small><i class="fa fa-check text-muted"></i> Order Conformed</small> 
                                 <small><i class="fa fa-check text-muted"></i> Order Received</small> </div>
                            </div>
                        </div>
                        
                       
                        <div class="row g-0">
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span class="font-weight-bold">Total</span> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span class="font-weight-bold">Rs: ${product.price}/-</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div> </div>
            </div>
        </div>
    </div>
</div>
			
		</div>
	</div>
</article>
<footer>
	Design based on example found <a href="https://uxdesign.cc/understanding-user-psychology-to-improve-your-product-design-f4e5f930b89e" target="_blank">here</a>
</footer>
		</div>
</body>
<!-- MDB -->
<script type="text/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js"></script>

</html>