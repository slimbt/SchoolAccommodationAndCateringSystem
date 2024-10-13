package com.St2i.pfe.controlleur;

import com.St2i.pfe.jwt.JwtUtils;
import com.St2i.pfe.modele.*;
import com.St2i.pfe.repo.RoleRepository;
import com.St2i.pfe.repo.UserRepository;
import com.St2i.pfe.repo.employeeRepo;
import com.St2i.pfe.repo.parentRepo;
import com.St2i.pfe.serviceImpl.UserDetailsImpl;
import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true", allowedHeaders = "*", methods = {RequestMethod.POST})

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    employeeRepo employeeRepository;

    @Autowired
    parentRepo parentRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);

        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());


        return ResponseEntity.ok(new JwtResponse(jwtCookie.toString(),userDetails.getId(),userDetails.getUsername(),userDetails.getEmail(),roles))
                ;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);
                        //modif mena emp
                        Employee employee = new Employee();
                        employee.setEmail(signUpRequest.getEmail());
                        employee.setUsername(signUpRequest.getUsername());
                        employee.setNom(signUpRequest.getNom());
                        employee.setPrenom(signUpRequest.getPrenom());
                        employee.setCin(signUpRequest.getCin());
                        employee.setPoste(signUpRequest.getPoste());
                        employee.setTelephone(signUpRequest.getTelephone());
                        employeeRepository.save(employee);

                        // Attribution de l'ID de l'employé à l'utilisateur
                        user.setId_employee(employee.getId());

                        //modif toufa

                        user.setRoles(roles);

                        userRepository.save(user);
                        break;
                    case "mod":
                        Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(modRole);
                        //modif mena emp
                        Employee employeeMod = new Employee();
                        employeeMod.setEmail(signUpRequest.getEmail());
                        employeeMod.setUsername(signUpRequest.getUsername());
                        employeeMod.setNom(signUpRequest.getNom());
                        employeeMod.setPrenom(signUpRequest.getPrenom());
                        employeeMod.setCin(signUpRequest.getCin());
                        employeeMod.setPoste(signUpRequest.getPoste());
                        employeeMod.setTelephone(signUpRequest.getTelephone());
                        employeeMod.setPhotoPath(signUpRequest.getPhotoPath());
                        employeeRepository.save(employeeMod);

                        // Attribution de l'ID de l'employé à l'utilisateur
                        user.setId_employee(employeeMod.getId());

                        //modif toufa

                        user.setRoles(roles);

                        userRepository.save(user);
                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);

                        parentModel parent = new parentModel();
                        parent.setEmail(signUpRequest.getEmail());
                        parent.setUsername(signUpRequest.getUsername());
                        parent.setNom(signUpRequest.getNom());
                        parent.setPrenom(signUpRequest.getPrenom());
                        parent.setCin(signUpRequest.getCin());
                        parent.setProfession(signUpRequest.getProfession());
                        parent.setAdresse(signUpRequest.getAdresse());
                        parent.setTelephone(signUpRequest.getTelephone());
parent.setPhotoPath(signUpRequest.getPhotoPath());
                        parentRepository.save(parent);

                        // Attribution de l'ID du parent à l'utilisateur
                        user.setId_parent(parent.getId());

                        //modif toufa

                        user.setRoles(roles);

                        userRepository.save(user);
                }
            });
        }



        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/signout")
    public ResponseEntity<?> logoutUser() {
        ResponseCookie cookie = jwtUtils.getCleanJwtCookie();
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(new MessageResponse("You've been signed out!"));
    }
    @GetMapping("/admins")
    public ResponseEntity<?> getAdminUsers() {
        List<User> adminUsers = userRepository.findAdminUsers();
        return ResponseEntity.ok(adminUsers);
    }




}