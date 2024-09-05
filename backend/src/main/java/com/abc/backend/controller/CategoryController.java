package com.abc.backend.controller;

import com.abc.backend.model.Category;
import com.abc.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping("/category/create")
    Category newCategory(@RequestBody Category newCategory){
        return categoryRepository.save(newCategory);
    }

}
