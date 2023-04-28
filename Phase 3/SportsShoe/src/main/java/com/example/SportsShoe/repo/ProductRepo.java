package com.example.SportsShoe.repo;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.SportsShoe.entities.Product;

public interface ProductRepo extends CrudRepository<Product,Integer> {
	Iterable<Product> findByCategory(String name);
}
