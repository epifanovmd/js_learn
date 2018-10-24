function applyForVisa(documents) {
  console.log("Обработка заявления...");
  let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      Math.random() > 0
        ? resolve({})
        : reject("В визе отказано: нехватка документов");
    }, 2000);
  });
  return promise;
}
function getVisa(visa) {
  console.log("Виза получена");
  console.log("");
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(visa), 2000);
  });
}

function bookHotel(visa) {
  console.log("Виза", visa);
  console.log("Бронируем отель");
  console.log("");
  return Promise.resolve(visa);
}
function buyTickets(booking) {
  console.log("Бронь", booking);
  console.log("Покупаем билеты");
}

applyForVisa({})
  .then(getVisa)
  .then(bookHotel)
  .then(buyTickets)
  .catch(error => console.log(error));
