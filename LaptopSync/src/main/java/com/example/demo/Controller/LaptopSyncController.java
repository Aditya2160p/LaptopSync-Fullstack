package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.UserRepo;
import com.example.demo.Service.LaptopSyncService;
import com.example.demo.Service.UserService;
import com.example.demo.model.LaptopSync;
import com.example.demo.model.UserData;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/api/Laptops")
@CrossOrigin
public class LaptopSyncController {
	@Autowired
	LaptopSyncService vservice;
	@Autowired
	UserService uservice;
	@Autowired
	UserRepo u;
	@Operation(summary = "Adds a new Laptop")
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "Laptop added successfully"),
			@ApiResponse(responseCode = "400", description = "Laptop is invalid") })
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(value = "/add")
	public String pt(@RequestBody LaptopSync s11) {
		vservice.create(s11);
		return "your record saved";
	}
	@Operation(summary = "gives all values present")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "successful"),
			@ApiResponse(responseCode = "401", description = "invalid credentials"),
			@ApiResponse(responseCode = "404", description = "not found") })
	@GetMapping(value = "/allLaptops", produces = "application/json")
	public List<LaptopSync> get() {
		return vservice.readall();
	}
	@Operation(summary = "gives all values present")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "successful"),
			@ApiResponse(responseCode = "401", description = "invalid credentials"),
			@ApiResponse(responseCode = "404", description = "not found") })
	@GetMapping(value = "/bymodel/{model}")
	public List<LaptopSync> getbymodel(@PathVariable("model") String model) {
		return vservice.getbymodel(model);
	}
	@Operation(summary = "gives all values present")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "successful"),
			@ApiResponse(responseCode = "401", description = "invalid credentials"),
			@ApiResponse(responseCode = "404", description = "not found") })
	@GetMapping(value = "/byid/{id}")
	public Optional<LaptopSync> getbyid(@PathVariable("id") long id) {
		return vservice.getbyid(id);
	}
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable("id") long id) {
		vservice.delete(id);
		return "id : " + id + " is deleted";
	}
	@PostMapping("/signup")
	public ResponseEntity<UserData> createlogin(@RequestBody UserData login) {

		System.out.println(login);
		UserData createdlogins = uservice.create(login);
		System.out.print(login);
		return ResponseEntity.ok(createdlogins);
	}
@PutMapping("/update")
public LaptopSync update(@RequestBody LaptopSync data)
{
	return vservice.create(data);
}
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody UserData loginDTO) {
		String username = loginDTO.getEmail();
		String password = loginDTO.getPassword();

		UserData user = u.findByEmail(username);
		if (user != null && user.getPassword().equals(password)) {
			return ResponseEntity.ok("Login successful");
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
		}
	}

	@GetMapping("/login")
	public List<UserData> login() {
		return u.findAll();
	}
	@GetMapping(value = "/pagingLaptop/{pageNo}/{pageSize}")
	Page<LaptopSync> vehiclePaging(@PathVariable ("pageNo") int pageno,
			@PathVariable ("pageSize") int pageSize) {
		return vservice.pagingVehicles(pageno, pageSize);

	}
	@GetMapping(value = "/pagingSortingLaptop/{pageNo}/{pageSize}/{field}")
	Page<LaptopSync> PagingAndSorting(@PathVariable ("pageNo") int pageno,
			@PathVariable ("pageSize") int pageSize,@PathVariable ("field")String field) {
		return vservice.pagingAndSortingVehicles(pageno, pageSize,field);

	}
}