package com.crudspring.crudspringAPI;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.crudspring.crudspringAPI.model.Car;
import com.crudspring.crudspringAPI.repository.CarRepository;

@SpringBootApplication
public class CrudSpringApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApiApplication.class, args);
	}
	
    @Bean
	CommandLineRunner initDatabase(CarRepository carRepository) {
		return args ->{
			carRepository.deleteAll();

			Car c = new Car();
			
			c.setName("CHEVROLET");
			c.setCategory("SEDAN");

			carRepository.save(c);
		};

	}
}
