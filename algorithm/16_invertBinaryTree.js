// LeetCode 226
//1. if root is null, return null
//2. create a temp variable, and assign it to the root.left
//3. change root.left to equal root.right
//4. change root.right to equal temp
//5. invertTree(root.left)
//6. invertTree(root.right)

const invertTree = (root) => {
    if (root === null){
        return null;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;

}