// LeetCode 235: Lowest Common Ancestor of a BST

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const lowestCommonAncestor = (root, p, q) => {

    if(p.val < root.val && q.val < root.val){
        return lowestCommonAncestor(root.left, p, q);
    }
    if(p.val > root.val && q.val > root.val){
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
}