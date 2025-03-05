const timeDisplay = document.querySelector("#clock");

// create a function to update the date and time
function updateDateTime() {
// create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    timeDisplay.textContent = currentDateTime.split(" ")[1];
    if(currentDateTime.split(" ")[1].split(":")[0] < "12"){

        document.body.style.backgroundColor = "green";
    }
    else if(currentDateTime.split(" ")[1].split(":")[0] >= "12" && currentDateTime.split(" ")[1].split(":")[0] < "18"){

        document.body.style.backgroundColor = "orange";
    }
    else {document.body.style.backgroundColor = "blue";}
}

    // call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);