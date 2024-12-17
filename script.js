document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("user-form");
    const otpForm = document.getElementById("otp-form");
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");
    
    const formSection = document.getElementById("form-section");
    const otpSection = document.getElementById("otp-section");
    const todoSection = document.getElementById("todo-section");

    let globalName = "";
    let globalEmail = "";
    let verifyOtp = "";
    let tasks = [];

    // Simulate OTP generation and email sending
    userForm.addEventListener("submit", (e) => {
        e.preventDefault();
        globalName = document.getElementById("name").value;
        globalEmail = document.getElementById("email").value;

        verifyOtp = String(Math.floor(100000 + Math.random() * 900000)); // Simulate OTP
        alert(`Your OTP is: ${verifyOtp}`);
        
        formSection.classList.add("hidden");
        otpSection.classList.remove("hidden");
    });

    // Verify OTP
    otpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const otpInput = document.getElementById("otp").value;

        if (otpInput === verifyOtp) {
            otpSection.classList.add("hidden");
            todoSection.classList.remove("hidden");
            alert("OTP Verified! Welcome to your To-Do List.");
        } else {
            alert("Incorrect OTP. Please try again.");
        }
    });

    // Add Task
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskInput = document.getElementById("task-input").value;

        const task = {
            id: Date.now(),
            content: taskInput,
        };
        tasks.push(task);
        renderTasks();
        taskForm.reset();
    });

    // Render Task List
    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${task.content}</span>
                <div class="task-buttons">
                    <button onclick="updateTask(${task.id})">Update</button>
                    <button onclick="deleteTask(${task.id})">Delete</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }

    // Update Task
    window.updateTask = (id) => {
        const task = tasks.find((t) => t.id === id);
        const newContent = prompt("Update Task", task.content);
        if (newContent) {
            task.content = newContent;
            renderTasks();
        }
    };

    // Delete Task
    window.deleteTask = (id) => {
        tasks = tasks.filter((task) => task.id !== id);
        renderTasks();
    };
});
