(function() {
    emailjs.init('l4zQWTRrqk99JTqf1');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        this.contact_number.value = Math.random() * 100000 | 0;
        
        var templateParams = {
            from_name: document.getElementById('contact-form').querySelector('#name').value,
            message: document.getElementById('contact-form').querySelector('textarea').value,
            email: document.getElementById('contact-form').querySelector('#email').value
        };

        emailjs.send('service_weq57xo', 'template_hlsoeyo', templateParams)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
               document.getElementById('contact-form').querySelector('#name').value = ''
               document.getElementById('contact-form').querySelector('textarea').value = ''
               document.getElementById('contact-form').querySelector('#email').value = ''
            }, function(error) {
               console.log('FAILED...', error);
            });
    });
}