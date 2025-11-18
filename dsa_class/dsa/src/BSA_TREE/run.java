package BSA_TREE;

public class run {

	public static void main(String[] args) {
		int arr[]= {50,0,40,58,58,88,90};
		
		node root=new node(arr[0]);
		bsa_tree_imp tree_imp=new bsa_tree_imp();
		for(int i=1;i<arr.length;i++) {
			tree_imp.insert(root, arr[i]);
		}
		System.out.println("================preOrder==============");
		tree_imp.preOrder(root);
		System.out.println("\n====================inOrder===============");
		tree_imp.inOrder(root);
		System.out.println("\n================postOrder==============");
		tree_imp.postOrder(root);
	}
}
