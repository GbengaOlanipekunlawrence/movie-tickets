// //Business Logic for Movie Tickets
// //Here is a constructor function for Movie tickets that will initialize a new movie ticket object with its attributes assigned to the values passed in to the constructor function.
// function MovieTickets(name, movieDay, age) {
//   this.name = name;
//   this.movieDay = movieDay;
//   this.age = age;

// }

// // business logic prototype for the movies tickets that return everything

// MovieTickets.prototype.everything = function () {
//   return this.name + " " + this.movieDay + " " + this.age + " ";

// };

//Business Logic for MovieTicket
function MovieTicket() {
  this.tickets = {};
  this.currentId = 0;

}
MovieTicket.prototype.addTicket = function (ticket) {
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
};
MovieTicket.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};
MovieTicket.prototype.findTicket = function (id) {
  if (this.tickets[id] != undefined) {
    return this.tickets[id];
  }
  return false;
};
MovieTicket.prototype.deleteTicket = function (id) {
  if (this.tickets[id] === undefined) {
    return false;
  }
  delete this.tickets[id];
  return true;
};

//Business Logic for Tickets--------

function Ticket(name, movieDay, age, cost) {
  this.name = name;
  this.movieDay = movieDay;
  this.age = age;
  this.cost = cost;
}

Ticket.prototype.everything = function () {
  return this.name + " " + this.movieDay + " " + this.age + " " + this.cost + " ";
};

//User Interface Logic---------
let movieTicket = new MovieTicket();
$(document).ready(function () {
  $("form#new-ticket").submit(function (event) {
    event.preventDefault();
    const inputtedName = $(#"name").val();
    const inputtedMovieDay = $(#"movieDay").val();
    const inputtedAge = $(#age).val();
    const inputtedCost = $(#"cost").val();
    let newTicket = new Ticket(inputtedName, inputtedMovieDay, inputtedAge, inputtedCost);
    movieTicket.addTicket(newTicket);
    console.log(movieTicket.tickets);

  });
});

}

// to test the entire code say let anotherMovie = MovieTicket();
// let newTicket = new Ticket("alagba",["Tuesday","Thursday"],5,4500);
// call anotherMovie.addTicket(ticket);

