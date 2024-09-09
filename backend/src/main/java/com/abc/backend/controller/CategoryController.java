package com.abc.backend.controller;

import com.abc.backend.model.Category;
import com.abc.backend.repository.CategoryRepository;

import com.abc.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    // Get all categories
    @GetMapping("/category/getallcategory")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    // Get a single category by ID
    @GetMapping("/category/{id}")
    public Optional<Category> getCategoryById(@PathVariable Long id) {
        return categoryService.getCategoryById(id);
    }

    // Create a new category
    @PostMapping("/category/create")
    public Category createCategory(@RequestBody Category category) {
        return categoryService.saveCategory(category);
    }

    // Update an existing category
    @PutMapping("/category/update/{id}")
    public Category updateCategory(@PathVariable Long id, @RequestBody Category updatedCategory) {
        Optional<Category> category = categoryService.getCategoryById(id);
        if (category.isPresent()) {
            Category existingCategory = category.get();
            existingCategory.setCategoryName(updatedCategory.getCategoryName());
            return categoryService.saveCategory(existingCategory);
        }
        return null;
    }

    // Delete a category by ID
    @DeleteMapping("/category/delete/{id}")
    public void deleteCategory(@PathVariable Long id) {
        categoryService.deleteCategory(id);
    }

}














