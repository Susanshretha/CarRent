
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('open');
    });
});


document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;


    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('dateError').textContent = '';
    document.getElementById('daysError').textContent = '';
    document.getElementById('successMessage').textContent = '';

   
    const fullName = document.getElementById('fullName').value;
    if (fullName.trim() === '') {
        isValid = false;
        document.getElementById('nameError').textContent = 'Full Name is required.';
    }

   
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        isValid = false;
        document.getElementById('emailError').textContent = 'Email is required.';
    } else {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        }
    }

    
    const pickupDate = document.getElementById('pickupDate').value;
    const currentDate = new Date().toISOString().split('T')[0];
    if (pickupDate.trim() === '') {
        isValid = false;
        document.getElementById('dateError').textContent = 'Pickup Date is required.';
    } else if (pickupDate < currentDate) {
        isValid = false;
        document.getElementById('dateError').textContent = 'Pickup Date cannot be in the past.';
    }

   
    const numDays = document.getElementById('numDays').value;
    if (numDays.trim() === '' || numDays <= 0) {
        isValid = false;
        document.getElementById('daysError').textContent = 'Number of Days must be a positive number.';
    }

   
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Reservation submitted successfully!';
       
        document.getElementById('reservationForm').reset();
    }
});







