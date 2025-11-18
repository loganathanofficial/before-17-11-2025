package com.logu.Shipment_project;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShipmentController  {
	
	@Autowired
	ShipmentRepository shipmentrepository;

	//	post mapping for inserting shipment data
	
	@PostMapping("/shipment")
	public String insertShipment(@RequestBody Shipment shipment) {
		
		shipmentrepository.save(shipment);
		return "your Shipment data has been saved succesfully !!!";
		
	}
	
//	get mapping for to know all shipment data
	
//	@GetMapping("/shipment")
//	public List<Shipment> getAllShipment(){
//		return shipmentrepository.findAll();
//	}
	
	@GetMapping("/shipment")
	public Shipment getShipment(@RequestParam int id) {
		Optional<Shipment> opt=shipmentrepository.findById(id);
		if (opt.isPresent()) {
			return opt.get();			
		} else {
			return new Shipment();
		}

		
	}
//	this api is to know purticulor shipment information
	@GetMapping("/shipment/{id}")
	public Shipment getsingleShipment(@PathVariable int id){
			Optional<Shipment> opt = shipmentrepository.findById(id);
			if(opt.isPresent()) {
				return opt.get();
			}else {
				return new Shipment();
			}
	}
	
	@PutMapping("/shipment")
	public String updateShipmentData(@RequestBody Shipment shipment) {
		Optional<Shipment> opt=shipmentrepository.findById(shipment.getId());
		if (opt.isPresent()) {
			shipmentrepository.save(shipment);
			return "Data has been updated";
			
		} else {
			return "your trying to update rong shipment data";
		}
	}
	
	@DeleteMapping("/shipment/{id}")
	public String deleteShipment(@PathVariable int id) {
		Optional<Shipment> opt=shipmentrepository.findById(id);
		if(opt.isPresent()) {
			shipmentrepository.deleteById(id);
			return "id "+id+" has been deleted from databas";
		}else {
			return "your trying to delete rong shipment data !!!";
		}
	}
}
