package com.example.SportsShoe.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.SportsShoe.entities.Product;
import com.example.SportsShoe.entities.User;
public interface UserRepository extends CrudRepository<User,Integer> {
	Optional<User> findByNumberAndPassword(String number,String password);
	Optional<User> findByNumber(String number);
	Iterable<User> findByName(String name);
}
