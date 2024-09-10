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

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000") // Allow requests from the React front-end running on localhost:3000
public class MenuController {

    @Autowired
    private MenuService menuService; // Inject the MenuService for handling business logic

    @Autowired
    private CategoryRepository categoryRepository; // Inject the CategoryRepository for interacting with the category database

    // Fetches a list of all menu items
    @GetMapping("/menu/getallmenu")
    public List<Menu> getAllMenus() {
        return menuService.getAllMenus(); // Use service to get the list of all menu items
    }

    // Fetches a specific menu item by its ID
    @GetMapping("/menu/{id}")
    public Menu getMenuById(@PathVariable Long id) {
        return menuService.getMenuById(id); // Use service to find a menu item by its ID
    }

    // Retrieves the image of a menu item by its ID
    @GetMapping("/menu/image/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long id) {
        Menu menu = menuService.getMenuById(id); // Get menu item by ID
        if (menu != null && menu.getImage() != null) {
            // If menu item and its image exist, return the image in JPEG format
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG) // Image type can be JPEG or PNG
                    .body(menu.getImage());
        }
        return ResponseEntity.notFound().build(); // If image is not found, return 404
    }

    // Creates a new menu item
    @PostMapping("/menu/create")
    public Menu createMenu(@RequestParam("item") String item,
                           @RequestParam("description") String description,
                           @RequestParam("price") Double price,
                           @RequestParam("availability") Boolean availability, // Changed to Boolean
                           @RequestParam("category") Long categoryId,
                           @RequestParam("image") MultipartFile image) throws IOException {

        // Find the category by its ID; if not found, throw an error
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        // Create a new menu object and set its properties
        Menu menu = new Menu();
        menu.setItem(item);
        menu.setDescription(description);
        menu.setPrice(price);
        menu.setAvailability(availability); // Set the availability
        menu.setCategory(category); // Set the category for this menu item
        menu.setImage(image.getBytes()); // Save the image as byte data

        if (!image.isEmpty()) {
            // Resize or compress image before storing
            byte[] resizedImage = resizeImage(image);
            menu.setImage(resizedImage);
        }
        // Save the menu item through the service and return it
        return menuService.saveMenu(menu);
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

    // Updates an existing menu item
    @PutMapping("/menu/update/{id}")
    public Menu updateMenu(@PathVariable Long id,
                           @RequestParam("item") String item,
                           @RequestParam("description") String description,
                           @RequestParam("price") Double price,
                           @RequestParam("availability") Boolean availability, // Changed to Boolean
                           @RequestParam("category") Long categoryId,
                           @RequestParam(value = "image", required = false) MultipartFile image) throws IOException {

        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        // Retrieve the menu item by ID
        Menu menu = menuService.getMenuById(id);

        if (menu != null) {
            // Update text fields
            menu.setItem(item);
            menu.setDescription(description);
            menu.setPrice(price);
            menu.setAvailability(availability); // Update availability
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

    // Deletes a menu item by its ID
    @DeleteMapping("/menu/delete/{id}")
    public void deleteMenu(@PathVariable Long id) {
        // Delete the menu item through the service
        menuService.deleteMenu(id);
    }
}
