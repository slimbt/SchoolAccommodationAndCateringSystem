package com.St2i.pfe.repo;




import com.St2i.pfe.modele.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface employeeRepo extends JpaRepository<Employee, Long> {

    Employee findById(long id);


    @Query("SELECT e FROM Employee e WHERE e.id IN (SELECT u.id_employee FROM User u JOIN u.roles r WHERE r.name = 'ROLE_ADMIN')")
    List<Employee> findEmployeesWithAdminRole();


    @Query("SELECT e FROM Employee e WHERE e.id IN (SELECT u.id_employee FROM User u JOIN u.roles r WHERE r.name = 'ROLE_MODERATOR')")
    List<Employee> findOnlyEmployees();
}
