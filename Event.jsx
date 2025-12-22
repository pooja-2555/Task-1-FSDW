import React from "react";

function Event() {
  const registerEvent = () => {
    // Prompt for participant name
    const name = prompt("Enter Participant Name:");

    if (!name) {
      alert("Registration cancelled: Name is required.");
      return;
    }

    // Prompt for event name
    const eventName = prompt("Enter Event Name:");

    if (!eventName) {
      alert("Registration cancelled: Event name is required.");
      return;
    }

    // Prompt for email
    const email = prompt("Enter Email ID:");

    if (!email) {
      alert("Registration cancelled: Email is required.");
      return;
    }

    // Confirmation alert
    const confirmation = confirm(
      `Please confirm your registration:\n\nParticipant: ${name}\nEvent: ${eventName}\nEmail: ${email}`
    );

    if (confirmation) {
      alert(
        `🎉 Registration Successful!\n\nThank you ${name} for registering for ${eventName}.`
      );
    } else {
      alert("❌ Registration cancelled by user.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Event Registration</h2>
      <button onClick={registerEvent}>Register Now</button>
    </div>
  );
}

export default Event;
