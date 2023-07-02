package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.LaptopSync;
import java.util.*;
public interface LaptopSyncRepo extends JpaRepository<LaptopSync,Long> {
	@Query("select l from LaptopSync l where l.model=:model")
	public List<LaptopSync> findbyModel(@Param("model")String model);
}