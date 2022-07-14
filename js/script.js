// This main function is run whenever a user submits the form
// and passes the form data as a parameter
function main(formData) {
    // TODO: Work on this function
}

// Grab the form element from the DOM
const formElement = document.getElementById("appmt_form");
// Add a submit event listener to the form element
formElement.addEventListener("submit", (e) => {
    // Prevent the form from reloading the page when submitted
    e.preventDefault();

    // Grab the data from the form with the FormData object
    const formData = new FormData(e.target);
    // Call the main function and provide the form entries
    main([...formData.entries()]);
})