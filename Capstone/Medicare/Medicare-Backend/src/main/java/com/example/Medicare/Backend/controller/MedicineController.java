package com.example.Medicare.Backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Medicare.Backend.entity.Medicine;
import com.example.Medicare.Backend.repository.MedicineRepository;

@RestController()
@CrossOrigin
@RequestMapping("")
public class MedicineController {
	@Autowired
	private MedicineRepository medicineRepo;
	@GetMapping("/getAllProducts")
	public Iterable<Medicine> getAll() {
		Iterable<Medicine> data=medicineRepo.findAll();
		System.out.println(data);
		return data;
	}
	@GetMapping("/getProducts")
	public Iterable<Medicine> getProducts() {
		Iterable<Medicine> data=medicineRepo.findByStatus(true);
		System.out.println(data);
		return data;
	}
	
	
	@GetMapping("/getProduct/{id}")
	public Optional<Medicine> getproduct(@PathVariable("id") int id) {
		Optional<Medicine> data=medicineRepo.findById(id);
		System.out.println(id);
		return data;
	}
	
	
	@PutMapping("/addProduct")
	public String addData(@RequestBody Medicine medicine ) {
		medicineRepo.save(medicine);
		return "Data Saved";
	}
	
	@GetMapping("/deleteProduct/{pid}")
	public String deleteData(@PathVariable("pid") String pid) {
		System.out.println(pid);
		medicineRepo.deleteById(Integer.parseInt(pid));
		return "Data Deleted";
	}
	
	@GetMapping("/updateStatus/{id}")
	public String UpdateStatus(@PathVariable("id") int id) {
		Medicine med=medicineRepo.findById(id).get();
//		med.setStatus(status);
		if(med.getStatus()==true) {
			med.setStatus(false);
		}
		else if(med.getStatus()==false) {
			med.setStatus(true);
		}
		medicineRepo.save(med);
		return "status changed";
//		
	}
}
