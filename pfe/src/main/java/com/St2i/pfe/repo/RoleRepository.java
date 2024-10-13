package com.St2i.pfe.repo;


import com.St2i.pfe.modele.ERole;
import com.St2i.pfe.modele.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);}