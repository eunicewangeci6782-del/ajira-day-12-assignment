
// ======================================
// DAY 11: CONTACT FORM VALIDATION
// ======================================


// STEP 1: Select HTML form elements

const contactForm = document.getElementById("contactForm");

const contactNameInput = document.getElementById("contactName");

const contactEmailInput = document.getElementById("contactEmail");

const contactMessageInput = document.getElementById("contactMessage");

const formFeedback = document.getElementById("formFeedback");


// STEP 2: Listen for form submission

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Prevent the page from refreshing
        event.preventDefault();


        // STEP 3: Collect visitor information

        const contactName = contactNameInput.value.trim();

        const contactEmail = contactEmailInput.value.trim();

        const contactMessage = contactMessageInput.value.trim();


        // STEP 4: Check whether any field is empty

        if (
            contactName === "" ||
            contactEmail === "" ||
            contactMessage === ""
        ) {

            formFeedback.textContent =
                "Please complete all fields.";

            formFeedback.style.color = "red";

            return;
        }


        // STEP 5: Validate the email address

        if (!contactEmailInput.checkValidity()) {

            formFeedback.textContent =
                "Please enter a valid email address.";

            formFeedback.style.color = "red";

            return;
        }


        // STEP 6: Display a success message

        formFeedback.textContent =
            "Thank you, " + contactName +
            "! Your message has been validated successfully.";

        formFeedback.style.color = "green";


        // STEP 7: Clear the form

        contactForm.reset();

    });

}
