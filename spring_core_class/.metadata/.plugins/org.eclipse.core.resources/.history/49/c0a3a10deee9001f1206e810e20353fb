package spring_core_insert_setter_based;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Driver {
	public static void main(String[] args) {
//		BeanFactory bf=new ClassPathXmlApplicationContext("my_conf.xml");
//		bf.getBean("myid");
		BeanFactory bf=new ClassPathXmlApplicationContext("my_conf.xml");
		student st=bf.getBean("myid", student.class);
		
//		st.setId(101);
//		st.setName("loganathan");
//		st.setPerc(90.00);
		System.out.println("s_id : "+ st.getId());
		System.out.println("s_name : "+ st.getName());
		System.out.println("s_perc : "+ st.getPerc());
	}
	
	
	
}
