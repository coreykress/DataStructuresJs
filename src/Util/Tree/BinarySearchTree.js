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

    search (value, node = null)
    {
        if (node === null) {
            if (this.root === null) {
                return false;
            }
            node = this.root;
        }

        if (value === node.value) {
            return node;
        }

        // if greater
        if (value > node.value) {
            if (node.right === null) {
                return false;
            }
            return this.search(value, node.right);
        }

        // if less
        if (value < node.value) {
            if (node.left === null) {
                return false;
            }
            return this.search(value, node.left);
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

    remove()
    {

    }
}