// Get references to page elements
var $firstName = $("#firstName");
var $lastName = $("#lastName");
var $phoneNumber = $("#phoneNumber");
var $email = $("#email");
var $date = $("#date");
var $numberOfGuests = $("#numberOfGuests");
var $comment = $("#comment");
var $submitBtn = $("#submit");
var $reservationList = $("#reservation-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveReservation: function(reservation) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/reservation",
      data: JSON.stringify(reservation)
    });
  },
  getReservation: function() {
    return $.ajax({
      url: "api/reservation",
      type: "GET"
    });
  },
  deleteReservation: function(id) {
    return $.ajax({
      url: "api/reservation/" + id,
      type: "DELETE"
    });
  }
};

// refreshReservation gets new reservation from the db and repopulates the list
var refreshReservation = function() {
  API.getReservation().then(function(data) {
    var $reservation = data.map(function(reservation) {
      var $a = $("<a>")
        .firstName(reservation.firstName)
        .lastName(reservation.lastName)
        .phoneNumber(reservation.phoneNumber)
        .email(reservation.email)
        .date(reservation.date)
        .numberOfGuests(reservation.numberOfGuests)
        .comment(reservation.comment)
        .attr("href", "/reservation/" + reservation.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": reservation.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $reservationList.empty();
    $reservationList.append($reservation);
  });
};

// handleFormSubmit is called whenever we submit a new reservation
// Save the new reservation to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var reservation = {
    firstName: $firstName.val().trim(),
    lastName: $lastName.val().trim(),
    phoneNumber: $phoneNumber.val().trim(),
    email: $email.val().trim(),
    date: $date.val().trim(),
    numberOfGuests: $numberOfGuests.val().trim(),
    comment: $comment.val().trim()
  };

  if (
    !(
      reservation.firstName &&
      reservation.lastName &&
      reservation.email &&
      reservation.date &&
      reservation.numberOfGuests
    )
  ) {
    swal("Oops!", "You must enter the info required");
    return;
  }

  API.saveReservation(reservation).then(function(data) {
    swal("Thank you! your reservation number is " + data);
  });

  $firstName.val("");
  $lastName.val("");
  $phoneNumber.val("");
  $email.val("");
  $date.val("");
  $numberOfGuests.val("");
  $comment.val("");
};

// handleDeleteBtnClick is called when an reservation's delete button is clicked
// Remove the reservation from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteReservation(idToDelete).then(function() {
//     refreshReservation();
//   });
// };

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
