package com.example.MyMoviePlanBackend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MyMoviePlanBackend.entity.Ticket;
import com.example.MyMoviePlanBackend.repository.TicketRepository;

@RestController()
@CrossOrigin
@RequestMapping("")
public class TicketsController {
	@Autowired
	private TicketRepository ticketRepo;
	@GetMapping("/getAllProducts")
	public Iterable<Ticket> getAll() {
		Iterable<Ticket> data=ticketRepo.findAll();
		System.out.println(data);
		return data;
	}
	@GetMapping("/getProducts")
	public Iterable<Ticket> getProducts() {
		Iterable<Ticket> data=ticketRepo.findByStatus(true);
		System.out.println(data);
		return data;
	}
	
	
	@GetMapping("/getProduct/{id}")
	public Optional<Ticket> getproduct(@PathVariable("id") int id) {
		Optional<Ticket> data=ticketRepo.findById(id);
		System.out.println(data);
		return data;
	}
	
	
	@PutMapping("/addProduct")
	public String addData(@RequestBody Ticket ticket ) {
		ticketRepo.save(ticket);
		return "Data Saved";
	}
	
	@GetMapping("/deleteProduct/{pid}")
	public String deleteData(@PathVariable("pid") String pid) {
		System.out.println(pid);
		ticketRepo.deleteById(Integer.parseInt(pid));
		return "Data Deleted";
	}
	
	@GetMapping("/updateStatus/{id}")
	public String UpdateStatus(@PathVariable("id") int id) {
		Ticket ticket=ticketRepo.findById(id).get();
//		med.setStatus(status);
		if(ticket.getStatus()==true) {
			ticket.setStatus(false);
		}
		else if(ticket.getStatus()==false) {
			ticket.setStatus(true);
		}
		ticketRepo.save(ticket);
		return "status changed";
//		
	}
}
