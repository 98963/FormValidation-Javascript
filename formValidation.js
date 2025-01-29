function validateform() {
    const firstname = document.getElementById("fname").value.trim();
    const lastname = document.getElementById("lname").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const gender = document.getElementsByName("gender");
    const dob = document.getElementById("date").value.trim();
    const zipcode = document.getElementById("zcode").value.trim();
    const number = document.getElementById("number").value.trim();

    
    if (firstname === "") {
        alert("First name is required.");
        return false;
    }

    
    if (lastname === "") {
        alert("Last name is required.");
        return false;
    }

    
    if (address === "") {
        alert("Address is required.");
        return false;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return false;
    }

    
    if (password.length < 6 || password.length > 12) {
        alert("Password must be between 6 and 12 characters.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    
    let gender_select= false;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender_select= true;
            break;
        }
    }
    if (!gender_select) {
        alert("Please select a gender.");
        return false;
    }

    
    if (dob === "") {
        alert("Date of birth is required.");
        return false;
    }

    
    const zipRegex = /^[0-9]+$/;
    if (!zipRegex.test(zipcode)) {
        alert("Zip code must be numeric and cannot contain letters or special characters.");
        return false;
    }

    
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(number)) {
        alert("Mobile number must be a 10-digit number.");
        return false;
    }

    return true;
}

function calculateAge() {
    const dob = document.getElementById("date").value;
    if (dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        document.getElementById("age").value = age;
    }
}
