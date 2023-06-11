package com.example.Medicare.Backend.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Medicare.Backend.entity.Users;
import com.example.Medicare.Backend.repository.UserRepository;


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
