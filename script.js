function SendMail() {
    try {
        let params = {
            from_name: document.getElementById('user_name').value,
            sender_address: document.getElementById('user_email').value,
            message: document.getElementById('message').value,
            to_name: 'Sarah'
        }
        emailjs.send('service_rsgd5xv', 'template_0a5nuzs', params).then(function (res) {
            alert('Success' + res.status)
        })
    } catch (err) {
        alert(err)
    }
}