package com.example.MyMoviePlanBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MyMoviePlanBackend.entity.Users;
import com.example.MyMoviePlanBackend.repository.UserRepository;


@RestController()
@CrossOrigin
@RequestMapping(value="")
public class UserController {
	@Autowired
	public UserRepository userRepo;
	
	
	@GetMapping("/getUsers")
	public Iterable<Users> getAll() {
		Iterable<Users> data=userRepo.findAll();
		return data;
	}
	@PostMapping("/addUser")
	public String sayHello(@RequestBody Users user ) {
		userRepo.save(user);	
		return "Data Saved";
	}
}
