package BSA_TREE;

//import java.util.List;

public class bsa_tree_imp {
	node root;
	void createTree(int ele) {
		this.root=new node(ele);
	}
	void insert(node root,int ele) {
		if (root.data>ele) {
			if (root.leftNode==null) {
				root.leftNode=new node(ele);
				System.out.println(ele+" had beed inserted left of "+root.data);
				
			}else {
				insert(root.leftNode, ele);
			}
			
		}else if (root.data<ele) {
			if (root.rightNode==null) {
				root.rightNode=new node(ele);
				System.out.println(ele+" had beed inserted right of "+root.data);
			}else {
				insert(root.rightNode, ele);
			}

		}
	}
	
	void preOrder(node root) {
		if (root!=null) {
			System.out.print(root.data+" ");
			preOrder(root.leftNode);
			preOrder(root.rightNode);
		}
	}
	
	void inOrder(node root) {
		if (root!=null) {
			
			inOrder(root.leftNode);
			System.out.print(root.data+" ");
			inOrder(root.rightNode);
		}
	}
	void postOrder(node root) {
		if (root!=null) {
			
			postOrder(root.leftNode);
			postOrder(root.rightNode);
			System.out.print(root.data+" ");
		}
	}
	
}
