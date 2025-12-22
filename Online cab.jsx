import React from "react";

function OnlineCab() {
  const bookCab = () => {
    // Prompt for passenger name
    const passengerName = prompt("Enter Passenger Name:");

    if (!passengerName) {
      alert("Cab booking cancelled: Passenger name is required.");
      return;
    }

    // Prompt for pickup location
    const pickup = prompt("Enter Pickup Location:");

    if (!pickup) {
      alert("Cab booking cancelled: Pickup location is required.");
      return;
    }

    // Prompt for drop location
    const drop = prompt("Enter Drop Location:");

    if (!drop) {
      alert("Cab booking cancelled: Drop location is required.");
      return;
    }

    // Confirm booking
    const confirmation = confirm(
      `Please confirm your cab booking:\n\nPassenger: ${passengerName}\nPickup: ${pickup}\nDrop: ${drop}`
    );

    if (confirmation) {
      alert(
        `🚕 Cab Booked Successfully!\n\nPassenger: ${passengerName}\nPickup: ${pickup}\nDrop: ${drop}`
      );
    } else {
      alert("❌ Cab booking cancelled by user.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Online Cab Booking Application</h2>
      <button onClick={bookCab}>Book Cab</button>
    </div>
  );
}

export default OnlineCab;
