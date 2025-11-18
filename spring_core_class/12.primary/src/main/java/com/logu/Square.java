package com.logu;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class Square  implements Shape{
	@Override
	public void side() {
		System.out.println("4 saids");
	}

}
