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

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
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

    public byte[] resizeImage(MultipartFile imageFile) throws IOException {
        BufferedImage originalImage = ImageIO.read(imageFile.getInputStream());

        // Set desired dimensions
        int width = 300;
        int height = 300;

        // Create a resized version of the image
        BufferedImage resizedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        Graphics2D g = resizedImage.createGraphics();
        g.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
        g.drawImage(originalImage, 0, 0, width, height, null);
        g.dispose();

        // Get the original file extension
        String formatName = getString(imageFile);

        // Convert resized image to byte array
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(resizedImage, formatName, baos);
        return baos.toByteArray();
    }

    private static String getString(MultipartFile imageFile) {
        String originalFilename = imageFile.getOriginalFilename();
        String formatName = "jpg";  // Default to jpg if no valid extension is found

        if (originalFilename != null && originalFilename.contains(".")) {
            String fileExtension = originalFilename.substring(originalFilename.lastIndexOf(".") + 1).toLowerCase();

            // Handle different file types based on the file extension
            if (fileExtension.equals("png")) {
                formatName = "png";
            } else if (fileExtension.equals("jpg") || fileExtension.equals("jpeg")) {
                formatName = "jpg";
            }
            // Add more formats if needed
        }
        return formatName;
    }


    @PostMapping("/menu/create")
    public Menu createMenu(@RequestParam("item") String item,
                           @RequestParam("description") String description,
                           @RequestParam("price") Double price,
                           @RequestParam("availability") String availability,
                           @RequestParam("category") Long categoryId,
                           @RequestParam("image") MultipartFile image) throws IOException {

        // Fetch the category by ID
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        //create new menu instance
        Menu menu = new Menu();
        menu.setItem(item);
        menu.setDescription(description);
        menu.setPrice(price);
        menu.setAvailability(availability);
        menu.setCategory(category); // Assuming Category exists
        menu.setImage(image.getBytes());

        if (!image.isEmpty()) {
            // Resize or compress image before storing
            byte[] resizedImage = resizeImage(image);
            menu.setImage(resizedImage);
        }


        return menuService.saveMenu(menu);
    }

    @PutMapping("/menu/update/{id}")
    public Menu updateMenu(@PathVariable Long id,
                           @RequestParam("item") String item,
                           @RequestParam("description") String description,
                           @RequestParam("price") Double price,
                           @RequestParam("availability") String availability,
                           @RequestParam("category") Long categoryId,
                           @RequestParam(value = "image", required = false) MultipartFile image) throws IOException {

        // Fetch the category by ID
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        // Retrieve the menu item by ID
        Menu menu = menuService.getMenuById(id);

        if (menu != null) {
            // Update text fields
            menu.setItem(item);
            menu.setDescription(description);
            menu.setPrice(price);
            menu.setAvailability(availability);
            menu.setCategory(category);

            // Only update the image if a new one is provided
            if (image != null && !image.isEmpty()) {
                // Resize or compress image before storing
                byte[] resizedImage = resizeImage(image);
                menu.setImage(resizedImage);
            }

            // Save and return updated menu
            return menuService.saveMenu(menu);
        }

        return null;  // Could throw an exception if menu is not found
    }

    @DeleteMapping("/menu/delete/{id}")
    public void deleteMenu(@PathVariable Long id) {
        menuService.deleteMenu(id);
    }

}
