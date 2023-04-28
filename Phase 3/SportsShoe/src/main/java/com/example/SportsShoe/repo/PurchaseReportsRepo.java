package com.example.SportsShoe.repo;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.SportsShoe.entities.PurchaseReport_data;

public interface PurchaseReportsRepo extends CrudRepository<PurchaseReport_data,Integer> {
	Iterable<PurchaseReport_data> findByCategoryAndDate(String category,String date);
}
