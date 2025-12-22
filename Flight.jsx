import React from "react";

function Flight() {
  const bookTicket = () => {
    // Prompt dialog – get user name
    const name = prompt("Enter passenger name:");

    if (!name) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    // Prompt dialog – get destination
    const destination = prompt("Enter destination:");

    if (!destination) {
      alert("Booking cancelled: Destination is required.");
      return;
    }

    // Confirm dialog – confirm booking
    const confirmBooking = confirm(
      `Please confirm your booking:\n\nPassenger: ${name}\nDestination: ${destination}`
    );

    if (confirmBooking) {
      // Alert dialog – success message
      alert(
        `✅ Ticket Booked Successfully!\n\nPassenger: ${name}\nDestination: ${destination}`
      );
    } else {
      alert("❌ Booking cancelled by user.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Flight Ticket Booking</h2>
      <button onClick={bookTicket}>Book Flight Ticket</button>
    </div>
  );
}

export default Flight;
