const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const image = document.getElementById('task-image'); // Assuming you have an image with this ID

function addTask() {
    if (inputBox.value === '') {
        alert('Please enter a task');
    } else {
        let listItem = document.createElement("li");
        listItem.textContent = inputBox.value;
        
        let closeBtn = document.createElement("span");
        closeBtn.textContent = "\u00d7";
        closeBtn.classList.add("close");
        closeBtn.onclick = function() {
            listItem.remove();
        };
        
        listItem.appendChild(closeBtn);
        listContainer.appendChild(listItem);
        
        inputBox.value = '';
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        
        // Change the image when task is completed
        if (e.target.classList.contains("checked")) {
            image.src = "images/checked.png"; // Replace with the path of your "completed" image
        } else {
            image.src = "images/unchecked.png"; // Replace with the path of your "incomplete" image
        }
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
