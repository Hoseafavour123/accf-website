
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {

    const nameDonor = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    let Amount = document.getElementById("amount").value;
    let amount = parseFloat(Amount.replace('$', ''));

    if (!nameDonor || !email || !phone) {
        alert('Please provide your details');
    }
    else {
        fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameDonor,
                email,
                phone,
                amount
            })
        }).then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({ url }) => {
            window.location = url
        })
    }
    
}) 