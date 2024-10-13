package com.St2i.pfe.service;


import com.St2i.pfe.modele.Employee;

import java.util.List;
import java.util.Optional;

public interface employeeService {
    public List<Employee> getAllEmployees();
    public Employee getEmployeeById(Long id);
    public Employee addEmployee (Employee e);
    public Employee editEmployee(Employee e);
    public void deleteEmployeeById(Long id);
    public Optional<Employee> updateEmployeeCre(Long employeeId, Long creId);

    public Long countemp();
}
