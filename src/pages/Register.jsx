import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import mainImage from "../asset/register/main.png";
import imgName from "../asset/register/profile-user.png";
import imgTelephone from "../asset/register/phone-call.png";
import imgGmail from "../asset/register/gmail.png";
import imgPassword from "../asset/register/key.png";
import imgCountry from "../asset/register/flag.png";
import imgAddress from "../asset/register/home.png";

const Register = () => {

    const [clientName, setName] = useState('');
    const [clientTelephone, setTelephone] = useState('');
    const [clientEmail, setEmail] = useState('');
    const [clientPassword, setPassword] = useState('');
    const [clientCountry, setCountry] = useState('');
    const [clientAddress, setAddress] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestData = { clientName, clientTelephone, clientEmail, clientPassword, clientCountry, clientAddress }
        setIsPending(true);

        fetch('http://localhost/projects/shopimore_back/api/client/client-register.php',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(requestData)
        }).then(() => {
            alert("User Registered!");
            setIsPending(false);
            history.go(-1);
            history.push('/');
        });

        console.log(requestData);
    }

    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-6 m-auto p-5">
                        <div className="image">
                            <img className='w-100' src={mainImage} alt="login main image"/>
                        </div>
                    </div>
                    <div className="col-6 m-auto p-5">
                        <h3>Create your account</h3>
                        <span>Shopimore desktop application</span>
                        <form onSubmit={handleSubmit}>
                            <div className="input-div">
                                <img src={imgName} alt="name"/>
                                <input type="text" required value={clientName} placeholder="Full name" onChange={ (e) => setName(e.target.value) }/>
                            </div>
                            <div className="input-div">
                                <img src={imgTelephone} alt="telephone"/>
                                <input type="text" required value={clientTelephone} placeholder="Telephone" onChange={ (e) => setTelephone(e.target.value) }/>
                            </div>
                            <div className="input-div">
                                <img src={imgGmail} alt="email"/>
                                <input type="text" required value={clientEmail} placeholder="E-Mail Address" onChange={ (e) => setEmail(e.target.value) }/>
                            </div>
                            <div className="input-div">
                                <img src={imgPassword} alt="password"/>
                                <input type="text" required value={clientPassword} placeholder="Password" onChange={ (e) => setPassword(e.target.value) }/>
                            </div>
                            <div className="input-div">
                                <img src={imgCountry} alt="country"/>
                                <input type="text" required value={clientCountry} placeholder="Your country" onChange={ (e) => setCountry(e.target.value) }/>
                            </div>
                            <div className="input-div">
                                <img src={imgAddress} alt="address"/>
                                <input type="text" required value={clientAddress} placeholder="Living Address" onChange={ (e) => setAddress(e.target.value) }/>
                            </div>
                            {!isPending && <button>Create my account</button>}
                            {isPending && <button disabled>Creating...</button>}
                            <div className="w-100 text-center"><span>Already have an account?<a href="#">Sign In</a></span></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;