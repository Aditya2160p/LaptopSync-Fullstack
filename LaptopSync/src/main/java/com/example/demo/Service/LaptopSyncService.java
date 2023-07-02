package com.example.demo.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.model.LaptopSync;
import com.example.demo.model.LaptopSync;
import com.example.demo.model.UserData;
import com.example.demo.Repository.LaptopSyncRepo;


@Service
public class LaptopSyncService {
    @Autowired
    LaptopSyncRepo lRepo;
    public LaptopSync create(LaptopSync vehicle){
        return lRepo.save(vehicle);
    }

    public Optional<LaptopSync> read(Long id){
        return lRepo.findById(id);
    }
    
    public LaptopSync update(LaptopSync LaptopSync)
    {
    	return lRepo.save(LaptopSync);
    }
    public void delete(long id)
    {
    	lRepo.deleteById( id);
    }
    public void deleteall()
    {
    	lRepo.deleteAll();
    }
    public List<LaptopSync> readall(){
       List<LaptopSync> allLaptopSync=lRepo.findAll();
       return allLaptopSync;
    }
    public List<LaptopSync> getbymodel(String model)
    {
    	return lRepo.findbyModel(model);
    }
    public Page<LaptopSync> findAll(Pageable pageable) {
		return lRepo.findAll(pageable);
	}

	public List<LaptopSync> getAllVechile(Integer pageNo, Integer pageSize, String sortBy) {
		Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));

		Page<LaptopSync> pagedResult = lRepo.findAll(paging);

		if (pagedResult.hasContent()) {
			return pagedResult.getContent();
		} else {
			return new ArrayList<LaptopSync>();
		}
	}

	public Page<LaptopSync> pagingVehicles(int page, int pageSize) {
		Pageable paging = PageRequest.of(page, pageSize);
		return lRepo.findAll(paging);
	}

	public Page<LaptopSync> pagingAndSortingVehicles(int pageNo, int pageSize, String field) {
		Pageable paging = PageRequest.of(pageNo, pageSize).withSort(Sort.by(field));
		return lRepo.findAll(paging);
	}

	public LaptopSync saveVehicles(LaptopSync s11) {
		return lRepo.save(s11);
	}

	public List<LaptopSync> getAllVehicle() {
		return lRepo.findAll();
	}

	public void deleteByVId(int id) {
		lRepo.deleteById((long) id);

	}
	public Iterable<LaptopSync> sortVehicleGrp(String field, String field1) {
		Sort Field = Sort.by(field);
		Sort Field1 = Sort.by(field1);
		return lRepo.findAll(Field.and(Field1));
	}

	public Iterable<LaptopSync> sortVehicle(String field) {
		Sort Field = Sort.by(field);
		return lRepo.findAll(Field);
	}

	public Optional<LaptopSync> getbyid(long id) {
		return lRepo.findById(id);
	}
}