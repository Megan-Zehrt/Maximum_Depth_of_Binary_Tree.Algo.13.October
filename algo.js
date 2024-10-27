// 104. Maximum Depth of Binary Tree



// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.







/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    let ans = 0

    function dfs(node){

        if(node == null) return 0

        let left = dfs(node.left)
        let right = dfs(node.right)

        ans = Math.max(ans, 1 + Math.max(left, right))

        return 1 + Math.max(left, right)
    }

    dfs(root)

    return ans
};