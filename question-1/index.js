function lowerCaseWords(mixedArrayrray) {
    return new Promise((resolve, reject) => {
      try {
        const words = mixedArray
          .filter(item => typeof item === 'string') 
          .map(word => word.toLowerCase()); 
  
        resolve(words); 
      } catch (error) {
        reject(error); 
      }
    });
  }
  

  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray)
    .then(result => console.log(result))  
    .catch(error => console.error(error));
  