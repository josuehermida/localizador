// Function to display current date and time
function displayDateTime() {
    const dateTimeLocation = document.getElementById('date-time-location');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDateTime = currentDate.toLocaleDateString('en-US', options);
    dateTimeLocation.innerHTML = formattedDateTime;
}

// Function to get user's current location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

// Function to display user's current position
function showPosition(position) {
    const dateTimeLocation = document.getElementById('date-time-location');
    dateTimeLocation.innerHTML += "<br>Location: " + position.coords.latitude + ", " + position.coords.longitude;
}

// Call functions when the page loads
window.onload = function() {
    displayDateTime();
    getLocation();
}
