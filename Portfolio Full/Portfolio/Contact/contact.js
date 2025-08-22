
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputs = this.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#e74c3c';
                input.style.boxShadow = '0 0 10px rgba(231, 76, 60, 0.3)';
            } else {
                input.style.borderColor = '#2ecc71';
                input.style.boxShadow = '0 0 10px rgba(46, 204, 113, 0.3)';
            }
        });

        if (isValid) {
            const submitBtn = this.querySelector('.submit-btn');
            const originalHTML = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = 'linear-gradient(45deg, #27ae60, #219a52)';

            setTimeout(() => {
                submitBtn.innerHTML = originalHTML;
                submitBtn.style.background = 'linear-gradient(45deg, #2ecc71, #27ae60)';
                this.reset();
                inputs.forEach(input => {
                    input.style.borderColor = 'rgba(46, 204, 113, 0.3)';
                    input.style.boxShadow = 'none';
                });
            }, 3000);
        } else {

            alert('Please fill in all required fields');
        }
    });
}
