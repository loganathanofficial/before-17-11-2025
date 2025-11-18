package com.singlewindow.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.singlewindow.entity.Application;
import com.singlewindow.service.ApplicationService;
import com.singlewindow.responses.ApiResponse;

@RestController
@RequestMapping("/api")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @GetMapping("/application/user/{userId}")
    public ResponseEntity<?> getApplicationByUserId(@PathVariable Long userId) {
        try {
            Application application = applicationService.getApplicationByUserId(userId);
            if (application != null) {
                return ResponseEntity.ok(new ApiResponse<>(200, "Application found", application));
            } else {
                return ResponseEntity.ok(new ApiResponse<>(404, "No application found for this user", null));
            }
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse<>(500, "Error fetching application: " + e.getMessage(), null));
        }
    }
} 