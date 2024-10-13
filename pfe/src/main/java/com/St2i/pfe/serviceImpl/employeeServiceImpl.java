package com.St2i.pfe.serviceImpl;



import com.St2i.pfe.modele.Employee;
import com.St2i.pfe.modele.User;
import com.St2i.pfe.modele.parentModel;
import com.St2i.pfe.repo.UserRepository;
import com.St2i.pfe.repo.employeeRepo;
import com.St2i.pfe.service.employeeService;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class employeeServiceImpl implements employeeService {
    @Autowired
    private employeeRepo employeerepo ;
    @Autowired
    private UserRepository userRepository;
    @Override
    public List<Employee> getAllEmployees() {
        // TODO Auto-generated method stub
        return  employeerepo.findAll();

    }

   // @Override
   // public Employee getEmployeeById(Long id) {
       // Optional<Employee> e= employeerepo.findById(id);
        //return e.isPresent() ? e.get() : null;
   // }

    @Override
    public Employee addEmployee(Employee e) {
        return employeerepo.save(e);
    }

    @Override
    public Employee editEmployee(Employee e) {
        // TODO Auto-generated method stub
        return employeerepo.save(e);
    }

    @Override
    public Employee getEmployeeById(Long id) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            Long id_employee = user.getId_employee(); // Récupère l'ID du parent lié à cet utilisateur
            Optional<Employee> employeeOptional = employeerepo.findById(id_employee);
            return employeeOptional.orElse(null); // Retourne les coordonnées du parent s'ils existent
        }
        return null;
    }


    @Override
    public void deleteEmployeeById(Long id) {
        employeerepo.deleteById(id);
        Optional<User> userOptional = userRepository.findByEmployeeId(id);

        // Si l'utilisateur existe, le supprimer
        userOptional.ifPresent(user -> userRepository.delete(user));
    }

    public Optional<Employee> updateEmployeeCre(Long employeeId, Long id_cre) {
        Optional<Employee> employeeOpt = employeerepo.findById(employeeId);
        if (employeeOpt.isPresent()) {
            Employee employee = employeeOpt.get();
            employee.setCreId(id_cre); // Assurez-vous que votre modèle Employee a un champ `creId`
            employeerepo.save(employee);
            return Optional.of(employee);
        }
        return Optional.empty();
    }
    public Long countemp() {
        return employeerepo.count();
    }
}
