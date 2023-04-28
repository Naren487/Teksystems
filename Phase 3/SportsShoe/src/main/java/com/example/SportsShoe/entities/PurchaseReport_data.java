package com.example.SportsShoe.entities;

import java.security.Timestamp;
import java.sql.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class PurchaseReport_data {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(columnDefinition="text")
	private String username;
	@Column(columnDefinition="text")
	private String productName;
	@Column(columnDefinition="text")
	private String userNumber;
	@Column(columnDefinition="text")
	private String category;
	@Column(columnDefinition="text")
	private String date;
	private String price;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getUserNumber() {
		return userNumber;
	}
	public void setUserNumber(String userNumber) {
		this.userNumber = userNumber;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "PurchaseReports [id=" + id + ", username=" + username + ", productName=" + productName + ", userNumber="
				+ userNumber + ", category=" + category + ", date=" + date + ", price=" + price + "]";
	}
	
	
}
