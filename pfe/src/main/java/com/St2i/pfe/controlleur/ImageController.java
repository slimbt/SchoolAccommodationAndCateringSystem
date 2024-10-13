package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.Image;
import com.St2i.pfe.serviceImpl.ImageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/images")
public class ImageController {

    @Autowired
    private ImageServiceImpl imageService;

    @GetMapping
    public List<Image> getAllImages() {
        return imageService.getAllImages();
    }

    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<Image> addImage(
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam("imageFile") MultipartFile imageFile,
            @RequestParam("thumbnailFile") MultipartFile thumbnailFile) {
        try {
            System.out.println("Title: " + title);
            System.out.println("Description: " + description);
            System.out.println("ImageFile: " + imageFile.getOriginalFilename());
            System.out.println("ThumbnailFile: " + thumbnailFile.getOriginalFilename());

            Image image = imageService.saveImage(title, description, imageFile, thumbnailFile);
            return new ResponseEntity<>(image, HttpStatus.CREATED);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteImage(@PathVariable("id") long id) {
        try {
            imageService.deleteImage(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Image> updateImage(
            @PathVariable("id") long id,
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam(value = "imageFile", required = false) MultipartFile imageFile,
            @RequestParam(value = "thumbnailFile", required = false) MultipartFile thumbnailFile) {
        try {
            Image updatedImage = imageService.updateImage(id, title, description, imageFile, thumbnailFile);
            return new ResponseEntity<>(updatedImage, HttpStatus.OK);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

