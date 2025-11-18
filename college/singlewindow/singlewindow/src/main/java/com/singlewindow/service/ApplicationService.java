package com.singlewindow.service;

import com.singlewindow.entity.Application;

public interface ApplicationService {
    Application getApplicationByUserId(Long userId);
} 