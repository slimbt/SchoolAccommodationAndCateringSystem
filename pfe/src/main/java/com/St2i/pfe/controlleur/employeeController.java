
package com.St2i.pfe.controlleur;
//import org.springframework.beans.factory.annotation.Autowired(required=true);
import com.St2i.pfe.modele.Employee;
import com.St2i.pfe.repo.employeeRepo;
import com.St2i.pfe.service.employeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/employees")
public class employeeController {
    @Autowired
    private employeeRepo employeeRepository;
    @Autowired
    public employeeService eService;
    @GetMapping("/")
    public List<Employee> getAllEmployees() {return eService.getAllEmployees();}

    @DeleteMapping("/{x}")
    public void deleteEmployee(@PathVariable Long x) {
        eService.deleteEmployeeById(x);
    }
    @GetMapping("/{y}")
    public Employee getEmployee (@PathVariable Long y) {
        return eService.getEmployeeById(y);
    }
    @PostMapping
    public Employee addEmployee (@RequestBody Employee employee) {
        return eService.addEmployee(employee);
    }
    @PutMapping("/{id}")
    public Employee editEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return eService.addEmployee(employee);
    }
    @GetMapping("/addd")
    public ResponseEntity<List<Employee>> getAdminEmployees() {
        List<Employee> adminEmployees = employeeRepository.findEmployeesWithAdminRole();
        return ResponseEntity.ok(adminEmployees);
    }

    @GetMapping("/adddd")
    public ResponseEntity<List<Employee>> getOnlyEmployees() {
        List<Employee> onlyEmployees = employeeRepository.findOnlyEmployees();
        return ResponseEntity.ok(onlyEmployees);
    }

    @PutMapping("/{employeeId}/cre")
    public ResponseEntity<Employee> updateEmployeeCre(@PathVariable Long employeeId, @RequestBody Map<String, Long> creIdMap) {
        Long creId = creIdMap.get("creId");
        if (creId == null) {
            return ResponseEntity.badRequest().body(null);
        }
        Optional<Employee> employeeOpt = eService.updateEmployeeCre(employeeId, creId);
        return employeeOpt.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @GetMapping("/count")
    public Long countemp() {
        return eService.countemp();
    }
}