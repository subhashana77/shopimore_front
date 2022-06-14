import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import mainImage from "../asset/register/main.png";
import imgName from "../asset/register/profile-user.png";
import imgTelephone from "../asset/register/phone-call.png";
import imgGmail from "../asset/register/gmail.png";
import imgPassword from "../asset/register/key.png";
import imgCountry from "../asset/register/flag.png";
import imgAddress from "../asset/register/home.png";
import Sweetalert from "../util/Sweetalert";

const Register = () => {

    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [isPending, setIsPending] = useState(false);

    const current = new Date();
    const reg_date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestData = { name, telephone, email, password, country, address, reg_date }
        setIsPending(true);

        fetch('http://localhost/projects/shopimore_back/api/client/client-register.php',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(requestData)
        }).then(() => {
            Sweetalert(
                "Successfully",
                "success",
                name + " has registered!"
            );
            setName(() => "");
            setTelephone(() => "");
            setEmail(() => "");
            setPassword(() => "");
            setCountry(() => "");
            setAddress(() => "");

            setIsPending(false);
        });
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
                                <input type="text" required value={name} placeholder="Full name" onChange={ (e) => setName(e.target.value) }/>
                            </div>
                            <div className="input-div">
                                <img src={imgTelephone} alt="telephone"/>
                                <input type="number" required value={telephone} placeholder="Telephone" onChange={ (e) => setTelephone(e.target.value) }/>
                            </div>
                            <div className="input-div">
                                <img src={imgGmail} alt="email"/>
                                <input type="email" required value={email} placeholder="E-Mail Address" onChange={ (e) => setEmail(e.target.value) }/>
                            </div>
                            <div className="input-div">
                                <img src={imgPassword} alt="password"/>
                                <input type="password" required value={password} placeholder="Password" onChange={ (e) => setPassword(e.target.value) }/>
                            </div>
                            <div className="input-div">
                                <img src={imgCountry} alt="country"/>
                                <input type="text" required value={country} placeholder="Your country" onChange={ (e) => setCountry(e.target.value) }/>
                            </div>
                            <div className="input-div">
                                <img src={imgAddress} alt="address"/>
                                <input type="text" required value={address} placeholder="Living Address" onChange={ (e) => setAddress(e.target.value) }/>
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