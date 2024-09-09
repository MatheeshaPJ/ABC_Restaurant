package com.abc.backend.controller;

import com.abc.backend.model.Category;
import com.abc.backend.model.Menu;
import com.abc.backend.repository.CategoryRepository;
import com.abc.backend.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class MenuController {

    @Autowired
    private MenuService menuService;

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/menu/getallmenu")
    public List<Menu> getAllMenus() {
        return menuService.getAllMenus();
    }

    @GetMapping("/menu/{id}")
    public Menu getMenuById(@PathVariable Long id) {
        return menuService.getMenuById(id);
    }

    @GetMapping("/menu/image/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long id) {
        Menu menu = menuService.getMenuById(id);
        if (menu != null && menu.getImage() != null) {
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG) // Or IMAGE_PNG based on the type of image
                    .body(menu.getImage());
        }
        return ResponseEntity.notFound().build();
    }


    @PostMapping("/menu/create")
    public Menu createMenu(@RequestParam("item") String item,
                           @RequestParam("description") String description,
                           @RequestParam("price") Double price,
                           @RequestParam("availability") Boolean availability,
                           @RequestParam("category") Long categoryId,
                           @RequestParam("image") MultipartFile image) throws IOException {

        // Fetch the category by ID
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        Menu menu = new Menu();
        menu.setItem_name(item);
        menu.setDescription(description);
        menu.setPrice(price);
        menu.setIsAvailable(availability);
        menu.setCategory(category); // Assuming Category exists
        menu.setImage(image.getBytes());

        return menuService.saveMenu(menu);
    }

    @PutMapping("/menu/update/{id}")
    public Menu updateMenu(@PathVariable Long id,
                           @RequestParam("item") String item,
                           @RequestParam("description") String description,
                           @RequestParam("price") Double price,
                           @RequestParam("availability") Boolean availability,
                           @RequestParam("image") MultipartFile image) throws IOException {
        Menu menu = menuService.getMenuById(id);
        if (menu != null) {
            menu.setItem_name(item);
            menu.setDescription(description);
            menu.setPrice(price);
            menu.setIsAvailable(availability);
            if (image != null) {
                menu.setImage(image.getBytes());
            }
            return menuService.saveMenu(menu);
        }
        return null;
    }

    @DeleteMapping("/menu/delete/{id}")
    public void deleteMenu(@PathVariable Long id) {
        menuService.deleteMenu(id);
    }

}
