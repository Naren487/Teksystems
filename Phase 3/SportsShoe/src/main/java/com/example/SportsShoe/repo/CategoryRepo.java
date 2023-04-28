package com.example.SportsShoe.repo;


import org.springframework.data.repository.CrudRepository;

import com.example.SportsShoe.entities.Category;
import com.example.SportsShoe.entities.Product;

public interface CategoryRepo extends CrudRepository<Category,Integer> {

}
