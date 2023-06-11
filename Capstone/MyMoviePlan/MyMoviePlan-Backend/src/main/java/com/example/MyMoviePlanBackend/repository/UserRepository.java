package com.example.MyMoviePlanBackend.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.MyMoviePlanBackend.entity.Users;


public interface UserRepository extends CrudRepository<Users, Integer> {

	Iterable<Users> findByName(String name);
	Optional<Users> findByNumberAndPassword(String number, String password);
}
