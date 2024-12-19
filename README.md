To-Do List with OTP Verification

This project is a simple web-based To-Do List application that incorporates an OTP (One-Time Password) verification process. It allows users to register with their name and email, verify their identity via OTP, and then manage a personal to-do list.

Features

User Registration: Users can register with their name and email address.

OTP Verification: A simulated OTP is generated and displayed as an alert for simplicity.

To-Do List Management: Users can add, update, and delete tasks in their to-do list.

Dynamic User Interface: Transition between registration, OTP verification, and to-do list management sections.

Technologies Used

HTML for structure

CSS for styling

JavaScript for interactivity and logic

How to Use

Clone or download the repository to your local machine.

Open the index.html file in your web browser.

Follow the steps below:

Fill out the registration form with your name and email.

Submit the form to generate an OTP (displayed in an alert box).

Enter the OTP in the verification form.

If the OTP is correct, proceed to manage your to-do list.

File Structure

index.html: Contains the structure of the web page.

style.css: Contains the styling for the web page.

script.js: Contains the logic for OTP generation, form submission, and to-do list management.

Code Overview

OTP Generation and Verification

OTP is generated as a 6-digit random number.

The OTP is displayed in an alert box for simplicity.

The user-provided OTP is verified against the generated OTP.

Task Management

Add Task: Allows users to add a task to the to-do list.

Update Task: Users can modify an existing task.

Delete Task: Users can remove a task from the list.

UI Transitions

The application dynamically shows and hides sections (e.g., registration form, OTP form, to-do list) based on the current step.

Example Usage

Registration:

Name: John Doe

Email: john.doe@example.com

OTP Verification:

OTP: 123456 (simulated)

To-Do List:

Add tasks such as "Buy groceries" or "Schedule meeting."

Update a task by clicking the "Update" button.

Delete a task by clicking the "Delete" button.

Known Limitations

OTP is displayed in an alert box for simplicity (not sent via email or SMS).

Tasks are stored in memory and are lost upon page refresh.

Future Enhancements

Integrate a real email service for OTP delivery.

Persist tasks using local storage or a backend database.

Add user authentication for a more robust system.

License

This project is open-source and available under the MIT License.

Acknowledgements

Inspired by common user registration and task management workflows.

Developed as a practice project for learning JavaScript DOM manipulation and event handling.
