function addingEventListener() {
    const input = document.getElementById('input');
    if (input) {
        input.addEventListener('click', function() {
            alert('I was clicked!');
        });
    } else {
        console.error("Element with id 'input' not found.");
    }
}

// Ensure the DOM is fully loaded before calling the function
document.addEventListener('DOMContentLoaded', function() {
    addingEventListener();
});
