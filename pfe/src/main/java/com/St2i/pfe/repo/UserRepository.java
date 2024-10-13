package com.St2i.pfe.repo;


import com.St2i.pfe.modele.User;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);



	@Query("SELECT u FROM User u WHERE u.id_parent = :parentId")
	Optional<User> findByParentId(@Param("parentId") Long parentId);

	@Query("SELECT u FROM User u WHERE u.id_employee = :employeeId")
	Optional<User> findByEmployeeId(@Param("employeeId") Long employeeId);

	@Query("DELETE FROM User u WHERE u.id_employee = :employeeId")
	void deleteByEmployeeId(@Param("employeeId") Long employeeId);

	@Query("SELECT u FROM User u JOIN u.roles r WHERE r.name = 'ROLE_ADMIN'")
	List<User> findAdminUsers();




}

