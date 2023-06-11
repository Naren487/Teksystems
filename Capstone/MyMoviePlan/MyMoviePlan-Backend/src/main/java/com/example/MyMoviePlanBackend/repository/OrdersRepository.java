package com.example.MyMoviePlanBackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.MyMoviePlanBackend.entity.Orders;


public interface OrdersRepository extends CrudRepository<Orders,Integer>{

}
