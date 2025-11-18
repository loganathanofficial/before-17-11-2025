package com.singlewindow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.singlewindow.entity.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    Application findByUserId(Long userId);
} 