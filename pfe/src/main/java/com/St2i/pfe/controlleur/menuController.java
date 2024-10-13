package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.menuModel;

import com.St2i.pfe.service.menuService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/menu")
public class menuController  {
    @Autowired
    public menuService eService;
    @GetMapping("/")
    public List<menuModel> getAllMenu() {
        return eService.getAllMenu();
    }

    @DeleteMapping("/{x}")
    public void deleteMenu(@PathVariable Long x) {
        eService.deleteMenuById(x);
    }
    @GetMapping("/{y}")
    public menuModel getMenu (@PathVariable Long y) {
        return eService.getMenuById(y);
    }
    @PostMapping
    public menuModel addMenu (@RequestBody menuModel m) {
        return eService.addMenu(m);
    }
    @PutMapping
    public menuModel editMenu(@RequestBody menuModel m) {
        return eService.addMenu(m);}
}


