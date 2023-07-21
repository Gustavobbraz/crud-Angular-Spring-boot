package com.crudspring.crudspringAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crudspring.crudspringAPI.model.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    
}
