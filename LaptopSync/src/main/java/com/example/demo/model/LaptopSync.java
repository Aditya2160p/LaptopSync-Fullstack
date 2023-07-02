package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="laptop_sync_data")
public class LaptopSync {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long laptopid;
private String brand;
private String model;
private int price;
private String processor;
private String gpu;
private String ramandrom;
public LaptopSync(Long laptopid, String brand, String model, int price, String processor, String gpu, String ramandrom) {
	super();
	this.laptopid = laptopid;
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.processor = processor;
	this.gpu = gpu;
	this.ramandrom = ramandrom;
}
public LaptopSync() {
	super();
}
public Long getLaptopid() {
	return laptopid;
}
public void setLaptopid(Long laptopid) {
	this.laptopid = laptopid;
}
public String getBrand() {
	return brand;
}
public void setBrand(String brand) {
	this.brand = brand;
}
public String getModel() {
	return model;
}
public void setModel(String model) {
	this.model = model;
}
public int getPrice() {
	return price;
}
public void setPrice(int price) {
	this.price = price;
}
public String getProcessor() {
	return processor;
}
public void setProcessor(String processor) {
	this.processor = processor;
}
public String getGpu() {
	return gpu;
}
public void setGpu(String gpu) {
	this.gpu = gpu;
}
public String getramandrom() {
	return ramandrom;
}
public void setramandrom(String ramandrom) {
	this.ramandrom = ramandrom;
}
@Override
public String toString() {
	return "LaptopSync [laptopid=" + laptopid + ", brand=" + brand + ", model=" + model + ", price=" + price
			+ ", processor=" + processor + ", gpu=" + gpu + ", ramandrom=" + ramandrom + "]";
}


}
