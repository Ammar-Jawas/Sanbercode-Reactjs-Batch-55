const myFunctionPromise = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (param) {
        resolve(param * 2);
      } else {
        reject("Maaf tidak ada nilai dalam parameter");
      }
    }, 1000);
  });
};

myFunctionPromise(7)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
