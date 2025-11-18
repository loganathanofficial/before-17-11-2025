package DSA_Class;

public class singly_linked_list {
	public static void main(String[] args) {
		node first=new node(1);
		node second=new node(2);
		node third=new node(3);
		
		second.next=first;
		third.next=second;
		node current=third;
		while(current!=null) {
			System.out.println(current.data);
			current=current.next;
			
		}
	}

}
class node{
	node next;
	int data;
	public node(int data) {
		this.data=data;
		this.next=null;
	}
}
