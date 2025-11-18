package linkedlist;

public class myLinkedList {
	node tail;
	node head;
	void insert(int ele) {
		node n=new node(ele);
		if(head==null) {
			head=n;
			tail=n;
		}else {
			tail.next=n;
			tail=n;
			
		}
		System.out.println(ele+" had been inserted succesfully!");
	}
	void disply() {
		if(head==null) {
			System.out.println("linked list is empty!");
		}else {
			node temp=this.head;
			while(temp.next!=null) {
				System.out.print(temp.data+"->");
				
				temp=temp.next;
			}
			System.out.println(temp.data);
		}
	}
}
