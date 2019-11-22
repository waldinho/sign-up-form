import React, { useState } from 'react';

const SubscribeForm = () => {

    const [firstname, setFirstname] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [sending, setSending] = useState(false)
    const [submission, setSubmission] = useState()
    const [message, setMessage] = useState()

    const handleFirstnameChange = event => {
        setFirstname(event.target.value)
    }
    const handleSurnameChange = event => {
        setSurname(event.target.value)
    }
    const handleEmailChange = event => {
        setEmail(event.target.value)
    }
    const handlePhoneChange = event => {
        setPhone(event.target.value)
    }
    
    const handleSubmit = event =>{
        event.preventDefault();
        setSending(true)
        const url ='https://ckzvgrbymezqegu.form.io/reacttestform/submission'
        const data = { 
            data: {
                firstName: firstname, 
                lastName: surname,
                email: email,
                mobilePhone: phone,
            }
        }
        fetch(url, { 
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{ 
                'Content-Type': 'application/json',
                'x-auth': 'react-test' 
            } 
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error),
            setSending(false),
            setSubmission(false),
            setMessage('Oops something went wrong...'),
        )
        .then(response => console.log('Success:', response),
            setSending(false),
            setSubmission(true),
            setMessage('Thank you for subscribing!'),
        )
    }

    return (
        console.log('sending: ', sending),
        console.log('submission: ', submission),
        console.log('message: ', message),
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstname" onChange={handleFirstnameChange} />
            <input type="text" name="surnamname" onChange={handleSurnameChange} />
            <input type="email" name="email" onChange={handleEmailChange} />
            <input type="number" name="phone" onChange={handlePhoneChange} />
            <input type="submit" value="Add user" /> 
        </form> 
        )
    }


export default SubscribeForm