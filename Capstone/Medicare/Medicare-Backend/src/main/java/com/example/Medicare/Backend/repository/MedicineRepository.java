package com.example.Medicare.Backend.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.Medicare.Backend.entity.Medicine;

public interface MedicineRepository extends CrudRepository<Medicine, Integer> {
	Iterable<Medicine> findByStatus(boolean i);
	Iterable<Medicine> findByName(String name);
}
