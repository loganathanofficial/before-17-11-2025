package queue;
import java.util.*;
public class queue {
	public static int rear=0;
	public static int front=0;
	
	public static int[] queuearr;
	
	
	public static void main(String[] args) {
		int size=4;
		queuearr(size);
		EnQueue(12);
		EnQueue(13);
		isEmpty();
		isFull();
		EnQueue(45);
		EnQueue(56);
		EnQueue(78);
		EnQueue(23);
		System.out.println(isEmpty());
		System.out.println(isFull());
		Disply();
		DeQueue();
		DeQueue();
		
		
	}

	private static void queuearr(int size) {
		queuearr=new int[size];
		System.out.println("Queue had been created whith size :"+size);
	}
	
	private static void EnQueue(int ele) {
		if(rear>=queuearr.length) {
			System.out.println("que is full so you cant insert the : "+ele);
		}
		else {
			queuearr[rear]=ele;
			rear++;
			System.out.println(ele+"--inserted succesfully ! ");
		}
		
	}
	
	private static void DeQueue() {
		if(front!=rear) {
			for(int i=front;i<rear-1;i++) {
				queuearr[i]=queuearr[i+1];
			}
			rear--;
		}else {
			System.out.println("queue is empty");
		}
		
	}
	
	private static boolean isEmpty() {
		return rear==front;
	}
	
	private static boolean isFull() {
		return rear>=front;
	}
	
	private static void Disply() {
		for(int i=0;i<rear;i++) {
			System.out.print("\t"+queuearr[i]);
		}
	}
	
	private static boolean Clear() {
		rear=0;
		front=0;
		return true;
	}
	
}
