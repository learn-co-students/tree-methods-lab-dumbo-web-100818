function inOrder(node) {
  if (node.left) {
    inOrder(node.left)
  }
  console.log(node.data)
  if (node.right) {
    inOrder(node.right)
  }
}

function findOrAdd(root, node) {
  //if the root data is greater than node data then you check to the left
  // if root.left doesn't have anything then you insert it there i.e. root.left = node
  //otherwise, restart the process
  //if the root data is greater than node data then you check to the right, if root.right doesn't have anything then you insert it there
  //otherwise, restar the process
  if (node === root) {
    return true;
  }
  if (node.data < root.data) {
    if (!root.left) {
      root.left = node;
    } else if (root.left && root.left !== node) {
      return findOrAdd(root.left, node)
    } else if (root.left === node) {
      return true;
    }
  }
  if (node.data > root.data) {
    if (!root.right) {
      root.right = node;
    } else if (root.right && root.right !== node) {
      return findOrAdd(root.right, node)
    } else if (root.right === node) {
      return true;
    }
  }
}

function max(node) {
  //create a variable to equal to the first node's data
  //first check to see if there's a right node, because right nodes always have the highest amount
  //if there is then check to see if that node's data value is higher than 'value', if it is then 'value' should now equal to node's data value
  //call the function again
  //if there isn't a right node then check the left node
  //if there is a left node then check to see if there's a right node
  // if there's a right node then check to see if that value is greater than value, if not then return value otherwise call the function again
  if(node.right) {
    return max(node.right);
  } else {
    return node;
  }
}

function min(node) {
  if (node.left) {
    return max(node.left);
  } else {
    return node;
  }
}
