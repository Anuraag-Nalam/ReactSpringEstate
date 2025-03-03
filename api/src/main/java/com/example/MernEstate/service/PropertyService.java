package com.example.MernEstate.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.MernEstate.model.Property;
import com.example.MernEstate.repository.PropertyRepository;

@Service

public class PropertyService {
    @Autowired
    private PropertyRepository propertyRepository;

    public Property saveProperty(Property property) {
        return propertyRepository.save(property);
    }
}
