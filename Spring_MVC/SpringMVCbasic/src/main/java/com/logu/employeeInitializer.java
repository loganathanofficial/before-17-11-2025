package com.logu;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class employeeInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

	@Override
	protected Class<?>[] getRootConfigClasses() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		return new Class[] {Config.class};
	}

	@Override
	protected String[] getServletMappings() {
		return new String[] {"//"};
	}

}
