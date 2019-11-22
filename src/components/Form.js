import React, { useState } from 'react';
import styled from 'styled-components';

const SubscribeForm = () => {
    
    const [firstname, setFirstname] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [submission, setSubmission] = useState()
    const [message, setMessage] = useState()


    const handleSubmit = e => {
        e.preventDefault()
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
            method: 'POST',
            body: JSON.stringify(data),
            headers:{ 
                'Content-Type': 'application/json',
                'x-auth': 'react-test' 
            } 
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error),
            setSubmission(false),
            setMessage('Oops something went wrong...'),
        )
        .then(response => console.log('Success:', response),
            setSubmission(true),
            setMessage('Thank you for subscribing!'),
        )
    }

    return (
        <Wrapper>
            {submission 
            ? 
            <div className='thank__you'>
                <p>{message}</p>
            </div>
            :
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='left'>
                        <label>First name: *</label>
                        <input 
                            type="text" 
                            name="firstname" 
                            onChange={e => {setFirstname(e.target.value)}}
                            required
                        />
                    </div>
                    <div className='right'>
                        <label>Last name: *</label>
                        <input 
                            type="text" 
                            name="surnamname" 
                            onChange={e => {setSurname(e.target.value)}}
                            required
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='left'>
                        <label>Email: *</label>
                        <input 
                            type="email" 
                            name="email" 
                            onChange={e => {setEmail(e.target.value)}} 
                            required
                        />
                    </div>
                    <div className='right'>
                        <label>Mobile phone: </label>
                        <input 
                            type="tel"
                            name="phone" 
                            onChange={e => {setPhone(e.target.value)}}
                            maxLength="13"
                            minLength="10"
                        />
                    </div>
                </div>
                <input 
                    className='submit'
                    type="submit" 
                    value="Submit" 
                /> 
            </form>
            }
        </Wrapper>
    )
}
    
const Wrapper = styled.div`
    position: relative;
    top: 26vh;
    @media screen and (min-width: 600px) {
        top: 30vh;
    }
    color: #fff;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    text-align: left;
    .thank__you {
        position: relative;
        top: 10vh;
    }
    form {
        display: flex;
        flex-direction: column;
        .row {
            display: flex;
            flex-direction: column;
            @media screen and (min-width: 600px) {
                flex-direction: row;
            }
            .left {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }
            .right {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
            }
            input {
                border: 2px solid #dadada;
                box-sizing: border-box;
                color: #323232;
                font-size: 18px;
                height: 48px;
                line-height: 25.5px;
                padding: 10.5px 14px 14px 14px;
                font-family: 'Muli', sans-serif;
                margin: 1rem 0.75rem 0 1rem;
                @media screen and (min-width: 321px) {
                    margin: 1rem;
                }
                min-width: 300px;
            }
            label {
                min-width: 300px;
                padding: 10.5px 14px 0 14px;
            }
        }
        input.submit {
            background: #333;
            color: #fff;
            border: 2px solid #dadada;
            box-sizing: border-box;
            font-size: 18px;
            height: 48px;
            line-height: 25.5px;
            font-family: 'Muli', sans-serif;
            margin: 2.5rem 0.75rem 0 1rem;
            @media screen and (min-width: 321px) {
                margin: 2.5rem 1rem;
            }
            @media screen and (min-width: 600px) {
                width: 150px;
            }
        }
    }
`

export default SubscribeForm