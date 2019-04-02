function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode){
  let currentNode = rootNode
  if(newNode.data < rootNode.data){
      currentNode = rootNode.left
      if(currentNode){
        findOrAdd(currentNode, newNode)
      } else {
        rootNode.left = newNode
      }
  } else if(newNode.data > rootNode.data) {
    currentNode = rootNode.right
    if(currentNode){
      findOrAdd(currentNode, newNode)
    } else {
      rootNode.right = newNode
    }
  }
  return true
}

// let node = {data: 5,
//               left: {data: 3,
//                         left: null,
//                         right: null
//                     },
//               right: {data: 7,
//                         left: null,
//                         right: {data: 9, left: null, right: null}
//                       }
//             }

function max(currentNode) {
  if (currentNode.right) {
    return max(currentNode.right)
  } else {
    return currentNode
  }
}

function min(currentNode) {
  if (currentNode.left) {
    return min(currentNode.left)
  } else {
    return currentNode
  }
}