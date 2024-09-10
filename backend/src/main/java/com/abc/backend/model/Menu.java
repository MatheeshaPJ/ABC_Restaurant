package com.abc.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Arrays;

@Entity
@Getter
@Setter
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long menuId;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(nullable = false)
    private String item;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private Boolean availability;

    // Adding the image field as a byte array
    @Lob
    @Column(name = "image", columnDefinition = "LONGBLOB")
    private byte[] image;



    @Override
    public String toString() {
        return "Menu{" +
                "menuId=" + menuId +
                ", category=" + category +
                ", item='" + item + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", availability=" + availability +
                ", image=" + Arrays.toString(image) +
            '}';
    }
}
