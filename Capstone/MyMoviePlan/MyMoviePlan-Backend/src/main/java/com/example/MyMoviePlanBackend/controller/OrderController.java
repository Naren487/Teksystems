package com.example.MyMoviePlanBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MyMoviePlanBackend.entity.Orders;
import com.example.MyMoviePlanBackend.repository.OrdersRepository;


@RestController()
@CrossOrigin
@RequestMapping(value="")
public class OrderController {
	@Autowired
	public OrdersRepository orderRepo;
	
	
	@GetMapping("/getOrders")
	public Iterable<Orders> getAll() {
		Iterable<Orders> data=orderRepo.findAll();
		return data;
	}
	@PostMapping("/addOrder")
	public String addOrder(@RequestBody Orders order) {
		orderRepo.save(order);
		return "Order Updated";
	}
}

