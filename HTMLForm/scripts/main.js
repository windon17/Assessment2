$(document).ready(function () {


    $(function () {
        $('#btnSubmit').on('click', submit);

        //not working
        function submit() {
            var messages = [];
            //validate form inputs

            $("#firstName").on('blur', function () {
                var firstName = $("#firstName").val();
                var reqMessage = $("#firstName").closest(".input-group").find(".requiredMsg");
                if (firstName === '') {
                    messages.push("First Name Required");
                    firstName.classList.add("invalid");
                } else {
                    firstName.classList.remove("invalid");
                }
            });

            $("#lastName").on('blur', function () {
                var lastName = $("#lastName").val();
                var reqMessage = $("#lastName").closest(".input-group").find(".requiredMsg");
                if (lastName === '') {
                    messages.push("First Name Required");
                    lastName.classList.add("invalid");
                } else {
                    lastName.classList.remove("invalid");
                }
            });

            $("#emailAddress").on('blur', function () {
                //Check to see if EmailAddress contains the "@" symbol and the ".com" string.
                var emailAddress = $("#emailAddress").val();
                var reqMessage = $("#emailAddress").closest(".input-group").find(".requiredMsg");
                if (emailAddress.indexOf("@") < 1 && emailAddress.indexOf(".com") < 1) {
                    messages.push("Valid Email Address Required");
                    emailAddress.classList.add("invalid");
                } else {
                    emailAddress.classList.remove("invalid");
                }

            });

            $("#why").on('blur', function () {
                var why = $("#why").val();
                var reqMessage = $("#why").closest(".input-group").find(".requiredMsg");

                if (why === '') {
                    messages.push("Reason for wanting blender is required.");
                    why.classList.add("invalid");
                } else {
                    why.classList.remove("invalid");
                }
            });

            $("#referral").on('blur', function () {
                var referral = $("#referral").val();
                var reqMessage = $("#referral").closest(".input-group").find(".requiredMsg");
                if (referral === '') {
                    messages.push("Please let us know how you found us.");
                    referral.classList.add("invalid");
                } else {
                    referral.classList.remove("invalid");
                }
            });

            $("#terms").on('blur', function () {
                var terms = document.getElementById("terms");
                var reqMessage = $("#terms").closest(".input-group").find(".requiredMsg");
                if (terms.checked === false) {
                    messages.push("You must accept the terms and conditions");
                    terms.classList.add("invalid");
                } else {

                    terms.classList.remove("invalid");
                }
            });
            console.log(messages);
            var formattedMessages =
                "<span style='color: red'>" + messages.join("; ") + "</span>";
            if (messages.length > 0) {
                $("#messages").html(formattedMessages);
            } else {
                //if no errors
                $("#messages").html("Form successfully submitted!");
            }
        }

    });

});