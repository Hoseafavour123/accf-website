function sendMail() {
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    }

    const serviceId = "service_1999v6w";
    const templateId = "template_i3cp422";

    emailjs.send(serviceId, templateId, params).then(alert('Sent sucessfully.'));
}