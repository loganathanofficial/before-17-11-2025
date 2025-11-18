package com.singlewindow.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.singlewindow.entity.Application;
import com.singlewindow.repository.ApplicationRepository;
import com.singlewindow.service.ApplicationService;

@Service
public class ApplicationServiceImpl implements ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    @Override
    public Application getApplicationByUserId(Long userId) {
        return applicationRepository.findByUserId(userId);
    }
} 