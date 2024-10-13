package com.St2i.pfe.serviceImpl;

import com.St2i.pfe.modele.Image;
import com.St2i.pfe.repo.ImageRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public class ImageServiceImpl {

    @Autowired
    private ImageRepo imageRepository;

    private final String uploadDir = "uploads/";

    public List<Image> getAllImages() {
        return imageRepository.findAll();
    }

    public Image saveImage(String title, String description, MultipartFile imageFile, MultipartFile thumbnailFile) throws IOException {
        System.out.println("Saving image and thumbnail");

        // Ensure the upload directory exists
        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Save image file
        String imageFileName = saveFile(imageFile);

        // Save thumbnail file
        String thumbnailFileName = saveFile(thumbnailFile);

        // Create Image entity
        Image image = new Image();
        image.setTitle(title);
        image.setDescription(description);
        image.setItemImageSrc(imageFileName);
        image.setThumbnailImageSrc(thumbnailFileName);

        return imageRepository.save(image);
    }

    public void deleteImage(long id) {
        imageRepository.deleteById(id);
    }

    public Image updateImage(long id, String title, String description, MultipartFile imageFile, MultipartFile thumbnailFile) throws IOException {
        Image image = imageRepository.findById(id).orElseThrow(() -> new RuntimeException("Image not found"));

        image.setTitle(title);
        image.setDescription(description);

        if (imageFile != null && !imageFile.isEmpty()) {
            String imageFileName = saveFile(imageFile);
            image.setItemImageSrc(imageFileName);
        }

        if (thumbnailFile != null && !thumbnailFile.isEmpty()) {
            String thumbnailFileName = saveFile(thumbnailFile);
            image.setThumbnailImageSrc(thumbnailFileName);
        }

        return imageRepository.save(image);
    }

    private String saveFile(MultipartFile file) throws IOException {
        if (file == null || file.isEmpty()) {
            return null;
        }

        // Ensure the upload directory exists
        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String fileName = file.getOriginalFilename();
        Path targetLocation = uploadPath.resolve(fileName);

        // Copy the file, replacing any existing file
        Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

        return fileName;
    }

}
