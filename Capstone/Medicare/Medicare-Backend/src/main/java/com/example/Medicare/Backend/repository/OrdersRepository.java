package com.example.Medicare.Backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.Medicare.Backend.entity.Orders;

public interface OrdersRepository extends CrudRepository<Orders,Integer>{

}
