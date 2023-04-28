package com.example.SportsShoe.repo;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.SportsShoe.entities.Admin;
import com.example.SportsShoe.entities.Category;

public interface AdminRepo extends CrudRepository<Admin,Integer> {
	Optional<Admin> findByUsernameAndPassword(String username,String Password);
}
