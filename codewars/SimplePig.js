function pigIt(str) {
    return str.split(' ').map(word => {
      if (/^[a-zA-Z]+$/.test(word)) {
        const firstLetter = word[0];
        return word.slice(1) + firstLetter + 'ay';
      }
      return word;
    }).join(' ');
  }