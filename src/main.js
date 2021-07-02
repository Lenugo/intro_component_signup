const firstName = document.getElementById("first-name"),
	lastName = document.getElementById("last-name"),
	email = document.getElementById("email"),
	password = document.getElementById("password"),
	form = document.getElementById("form"),
	formWarning = document.getElementById("form-warning");

form.addEventListener("submit", e => {
	e.preventDefault();

	let warnings = "";
	let inside = false;
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	formWarning.innerHTML = "";

	if (firstName.value.length < 3 || lastName.value.length < 4) {
		warnings += `Name is very short <br />`;
		inside = true;
	}
	if (!regexEmail.test(email.value)) {
		warnings += `Email is invalid <br />`;
		inside = true;
	}
	if (password.value.length < 8) {
		warnings += `Password is invalid <br />`;
		inside = true;
	}

	if (inside) {
		formWarning.innerHTML = warnings;
		formWarning.style.color = "red";
	} else {
		formWarning.innerHTML = "Thank You";
		formWarning.style.color = "red";
		formWarning.style.fontSize = "1.2rem";
	}
});
