// SendEmailButton.js
import React from 'react';

function SendEmailButton({ student }) {
  const sendMailConfirmation = () => {
    // Create an email body
    const subject = 'Login Details for SR Tutorial Account';
    const message = `Hello ${student.stud_name},\n\nYour login details for SR Tutorial Account are as follows:\nEmail: ${student.email}\nPassword: ${student.password}\n\nPlease keep your credentials secure.\n\nBest regards,\nThe SR Tutorial Team`;

    // Open the user's default email client with a pre-filled email
    const emailLink = `mailto:${student.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = emailLink;
  };

  return (
    <button onClick={sendMailConfirmation}>Send Mail</button>
  );
}
 
export default SendEmailButton;
