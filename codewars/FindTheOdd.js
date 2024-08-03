function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
      let count;
      let countResult = 0;
      while (count !== -1) {
        count = A.indexOf(A[i], count + 1);
  
        if (count !== -1) {
          countResult++;
        }
      }
      if (countResult % 2 !== 0) {
        return A[i];
      }
    }
  
    return 0;
  }