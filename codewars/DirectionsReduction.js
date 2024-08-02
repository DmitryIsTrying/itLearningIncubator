function dirReduc(arr) {
    const opposite = {
      'NORTH': 'SOUTH',
      'SOUTH': 'NORTH',
      'EAST': 'WEST',
      'WEST': 'EAST'
    };
  
    const stack = [];
  
    for (let direction of arr) {
      if (stack.length > 0 && stack[stack.length - 1] === opposite[direction]) {
        stack.pop();
      } else {
        stack.push(direction); 
      }
    }
  
    return stack;
  }