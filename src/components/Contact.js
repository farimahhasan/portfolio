import React, { useTransition } from 'react';
import instagram from '../assets/icon/instagram.svg';
import telegram from '../assets/icon/telegram.svg';
import whatsapp from '../assets/icon/whatsapp.svg';
import location from '../assets/icon/geoLocation.svg';
import share from '../assets/icon/share.svg';
import email from '../assets/icon/email.svg';
import tel from '../assets/icon/tel.svg';
import { useState , useEffect } from 'react';
import { validate } from './validate';

const Contact = () => {
     
    const [value,setValue]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })

    const [error,setError]=useState({});


    const changeHandler=(e)=>{
        setValue(
           { ...value, [e.target.name]: e.target.value }
        )
    }
    const [focus,setFocus]=useState({})
    const focusHandler=event=>{
       setFocus({...focus,[event.target.name]:true})
    }
  
    const [errorSubmit,setErrorSubmit]=useState(false)
    const submitHandler=event=>{
        event.preventDefault();
        if(!Object.keys(error).length){
           setErrorSubmit(false)
        }
        else{
            setErrorSubmit(true)
           setFocus({
               email:true,
               name:true,
               subject:true,
               message:true,
           }) 
        }
     }
    useEffect(()=>{
        setError(validate(value));
    }, [value],[focus])

    return (
        <section id='contact' className='contact'>
         <div className="containerAll">
            <div className="section-title">
                <h2>Contact</h2>
                <p>Contact Me</p>
            </div>
            <div className="contentContainer">
               <div className='d-flex'>
               <div className="info-box">
                        <i className="bi">
                        <img src={location} alt="icon location"/>

                        </i>
                        <h3>My Address</h3>
                        <p>Iran , Tehran</p>
                </div>

                <div className="info-box">
                        <i className="bi">
                        <img src={share} alt="icon share"/>
                        </i>
                        <h3>Social Profiles</h3>
                        <div className="social-links d-flex">
                            <a href="https://www.instagram.com/farimahhasan">
                            <img src={instagram} alt="icon instagram"/>
                            </a>
                            <a href="https://t.me/Farimahhasan79">
                            <img src={telegram} alt="icon telegram"/>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=989022213791">
                            <img src={whatsapp} alt="icon whatsapp"/>
							</a>
                        </div>
                    </div>

               </div>
               <div className='d-flex'>
               <div className="info-box">
                        <i className="bi">
                        <img src={email} alt="icon email"/>
                        </i>
                        <h3>Email Me</h3>
                       <p><a href='mailto:farimah.hsni@gmail.com'>farimah.hsni@gmail.com</a></p>
                    
                </div>

                <div className="info-box">
                        <i className="bi">
                        <img src={tel} alt="icon tel"/>

                        </i>
                        <h3>Call Me</h3>
                       <p><a href='tel:09022213791'>+98 9022213791</a></p>
                    </div>

               </div>


               <form onSubmit={submitHandler} className={errorSubmit ? "invalid" : "valid"}   >
                    <div>
                        <input  id="name" name="name" placeholder="Your Name" type="text" value={value.name} onChange={changeHandler}  onFocus={focusHandler} />
                            {error.name && focus.name && <span>{error.name}</span>}
                    </div>
                    <div >
                        <input  id="email" name="email" placeholder="Your Email" type="email" value={value.email} onChange={changeHandler} onFocus={focusHandler} />
                            {error.email && focus.email && <span>{error.email}</span>}
                    </div>
                    <div>
                        <input id="subject" name="subject" placeholder="Subject" type="text" value={value.subject} onChange={changeHandler} onFocus={focusHandler}/>
                            {error.subject && focus.subject && <span>{error.subject}</span>}
                    </div>
                    <div >
                        <textarea cols="20"  id="Message" name="message" placeholder="Message" rows="5" value={value.message} onChange={changeHandler} onFocus={focusHandler}>
                        </textarea>
                        {error.message && focus.message && <span>{error.message}</span>}
                    </div>
                <div><button type="submit">Send Message</button></div>
               </form>
            </div> 
          </div>
        </section>
    );
};

export default Contact;

