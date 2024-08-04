function towerBuilder(nFloors) {
    const arr = [];
  
    for (let i = 0; i < nFloors; i++) {
   
      const spaces = ' '.repeat(nFloors - i - 1);
      const stars = '*'.repeat(2 * i + 1);
  
      const line = spaces + stars + spaces;
      arr.push(line);
    }
  
    return arr;
  }