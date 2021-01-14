let currentIndex = null;

let store = {
  storeName: "BOOKSTORE NI ALEX",
  inventoryList: undefined,
  earnings: null,
};

let book = {
  title: undefined,
  quantity: undefined,
  value: undefined,
};

function addEarnings(points) {
  store.earnings += points;
}

function addBook(title, quantity, value) {
  if (store.inventoryList === undefined) {
    book = {};
    book.title = title;
    book.quantity = quantity;
    book.value = value;
    store.inventoryList = [book];
    console.log(`You added the book ${title} to the inventory.`);
  } else if (store.inventoryList !== undefined) {
    let contains =
      store.inventoryList.filter(function (obj) {
        return obj.title === title;
      }).length >= 1;

    if (contains === false) {
      book = {};
      book.title = title;
      book.quantity = quantity;
      book.value = value;
      store.inventoryList.push(book);
      console.log(`You added the book ${title} to the inventory.`);
    } else {
      console.log("Book Already Exists!");
    }
  }
}

function restockBook(title, quantity) {
  let contains =
    store.inventoryList.filter(function (obj) {
      return obj.title === title;
    }).length >= 1;
  let checkTitle = store.inventoryList.filter((book) => book.title === title);

  if (contains === true) {
    for (let i = 0; i < checkTitle.length; i++) {
      checkTitle[i].quantity += quantity;
      console.log(`Successfully restocked the book ${checkTitle[i].title}`);
    }
  } else {
    console.log("Book is not in the inventory!");
  }
}

function sellBook(title, quantity) {
  for (let i = 0; i < store.inventoryList.length; i++) {
    if (store.inventoryList[i].title === title) {
      //   console.log(store.inventoryList[i]);
      if (store.inventoryList[i].quantity == 0) {
        console.log(
          `Uh oh, it looks like ${store.inventoryList[i].title} is out of stock`
        );
        // break;
      } else if (store.inventoryList[i].quantity < quantity) {
        console.log(`Only ${store.inventoryList[i].quantity} stocks left.`);
      } else {
        store.inventoryList[i].quantity -= quantity;
        addEarnings(store.inventoryList[i].value * quantity);
        console.log(`Transaction Successful!`);
      }
    }
  }
}

function totalEarnings() {
  console.log(`${store.storeName} total earnings: ${store.earnings} PHP`);
}

function listInvetory() {
  for (let i = 0; i < store.inventoryList.length; i++) {
    console.log(store.inventoryList[i]);
  }
}
