function filterBooksPromise(colorful, amountOfPage) {
  return new Promise(function (resolve, reject) {
    var books = [
      { name: "Shinchan", totalPage: 50, isColorful: true },
      { name: "Kalkulus", totalPage: 250, isColorful: false },
      { name: "Doraemon", totalPage: 40, isColorful: true },
      { name: "Algoritma", totalPage: 250, isColorful: false },
    ];
    if (amountOfPage >= 40) {
      resolve(
        books.filter(
          (x) => x.totalPage >= amountOfPage && x.isColorful == colorful
        )
      );
    } else {
      var reason = "Maaf buku dibawah 40 halaman tidak tersedia";
      reject(reason);
    }
  });
}

let execute = async (colorful, amountOfPage) => {
  try {
    let result = await filterBooksPromise(colorful, amountOfPage);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

execute(true, 30);
