import React from "react";

function Hotel() {
  const reserveRoom = () => {
    // Prompt for guest name
    const guestName = prompt("Enter Guest Name:");

    if (!guestName) {
      alert("Reservation cancelled: Guest name is required.");
      return;
    }

    // Prompt for room type
    const roomType = prompt(
      "Enter Room Type (Single / Double / Deluxe):"
    );

    if (!roomType) {
      alert("Reservation cancelled: Room type is required.");
      return;
    }

    // Prompt for number of nights
    const nights = prompt("Enter number of nights:");

    if (!nights || isNaN(nights)) {
      alert("Reservation cancelled: Please enter a valid number of nights.");
      return;
    }

    // Confirm reservation
    const confirmation = confirm(
      `Please confirm your reservation:\n\nGuest: ${guestName}\nRoom Type: ${roomType}\nNights: ${nights}`
    );

    if (confirmation) {
      alert(
        `🏨 Reservation Successful!\n\nGuest: ${guestName}\nRoom Type: ${roomType}\nNights: ${nights}`
      );
    } else {
      alert("❌ Reservation cancelled by user.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Hotel Reservation System</h2>
      <button onClick={reserveRoom}>Reserve Room</button>
    </div>
  );
}

export default Hotel;
