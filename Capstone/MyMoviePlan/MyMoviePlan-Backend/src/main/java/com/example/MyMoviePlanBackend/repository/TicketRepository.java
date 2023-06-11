package com.example.MyMoviePlanBackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.MyMoviePlanBackend.entity.Ticket;

public interface TicketRepository extends CrudRepository<Ticket, Integer> {
//	Iterable<Ticket> findByStatus(boolean i);
	Iterable<Ticket> findByName(String name);

	Iterable<Ticket> findByStatus(boolean b);
}
