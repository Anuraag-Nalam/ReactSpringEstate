package com.example.MernEstate.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MernEstate.model.Property;

//check the generics here once, getting doubt

public interface PropertyRepository extends JpaRepository<Property, Long> {

}
