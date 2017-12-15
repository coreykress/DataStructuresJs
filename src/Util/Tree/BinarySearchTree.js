export default class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }

    createNode(value)
    {
        return {
            value: value,
            left: null,
            right: null,
        };
    }

    search (value, node = null, findParent = null)
    {
        if (node === null) {
            if (this.root === null) {
                return false;
            }
            node = this.root;
        }

        if (value === node.value) {
            if (findParent) {
                return false;
            }
            return node;
        }

        // if greater
        if (value > node.value) {
            if (node.right === null) {
                return false;
            }
            if (findParent && node.right.value === value) {
                return node;
            }

            return this.search(value, node.right, findParent);
        }

        // if less
        if (value < node.value) {
            if (node.left === null) {
                return false;
            }
            if (findParent && node.left.value === value) {
                return node;
            }

            return this.search(value, node.left, findParent);
        }
    }

    insert (value, node = null)
    {
        if (node === null) {
            //base case
            if (this.root === null) {
                return this.root = this.createNode(value);
            }
            node = this.root;
        }

        if (value === node.value) {
            return false;
        }

        if (value > node.value) {
            if (node.right === null) {
                node.right = this.createNode(value);
                return;
            }
            return this.insert(value, node.right);
        }

        if (value < node.value) {
            if (node.left === null) {
                node.left = this.createNode(value);
                return;
            }
            return this.insert(value, node.left);
        }
    }

    printTree ()
    {
        return this.root;
    }

    findMin(node = null) {
        if (node === null) {
            if (node.root === null) {
                return false;
            }
            node = this.root;
        }

        if (node.left === null) {
            return node;
        }

        return this.findMin(node.left);
    }

    remove(value, node = null)
    {
        if (node === null) {
            if (this.root === null) {
                return false;
            }
        }

        var nodeToDelete = this.search(value);

        // if there isnt a node with that value, just return false
        if (!nodeToDelete) {
            return false;
        }

        var parentNode = this.search(value, null, true);
        // node has no children ? delete outright
        if (nodeToDelete.left === null && nodeToDelete.right === null) {
            if (parentNode.left.value === nodeToDelete.value) {
                return parentNode.left = null;
            }
            return parentNode.right = null;
        }

        // if node has 1 child then just copy that to the parent of the deleted node
        if (nodeToDelete.left === null && nodeToDelete.right ) {
            return nodeToDelete = nodeToDelete.right;
        }

        if (nodeToDelete.right === null && nodeToDelete.left) {
            return nodeToDelete = nodeToDelete.left;
        }

        // if node has two children, find inorder successor

        // inorder successor, next in line
        // if the node has a right subtree, successor lies in there, go down leftwards node from there
        // if node has no right then search from the root
        var newNode = this.findMin(nodeToDelete.right);

        nodeToDelete.value = newNode.value;

        var newParentNode = this.search(newNode.value, null, true);
        if (newParentNode.left.value === newNode.value) {
            return newParentNode.left = null;
        }
        return newParentNode.right = null;
    }
}
