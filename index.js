function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(root, node) {


  if(node.data > root.data ) {
    ( !root.right) ? root.right = node : findOrAdd(root.right, node)
  } else if (node.data < root.data) {
    ( !root.left) ? root.left = node : findOrAdd(root.left, node)
  }
  return true
}

function max(tree) {
  if (tree.right) {
    return max(tree.right)
  } else {
    return tree
  }
}

function min(tree) {
  if (tree.left) {
    return min(tree.left)
  } else {
    return tree
  }
}
