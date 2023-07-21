package com.crudspring.crudspringAPI.controller;


import java.util.List;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crudspring.crudspringAPI.model.Car;
import com.crudspring.crudspringAPI.repository.CarRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cars")
@AllArgsConstructor
public class CarController {
    
    
    private final CarRepository carRepository;
   
    

    @GetMapping
    public  List<Car> list() {
        return carRepository.findAll();
    }
}
