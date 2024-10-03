
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ message: 'delayed success!' }); // Resolves after 500ms
      }, 500);
    });
  };
  
  const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ error: 'delayed exception!' }); // Rejects after 500ms
      }, 500);
    });
  };
  
 
  resolvedPromise()
    .then(result => console.log(result))  
    .catch(error => console.error(error));
  
  rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));  
  