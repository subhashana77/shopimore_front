import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

import mainImage from "../asset/register/main.png";
import imgName from "../asset/register/profile-user.png";
import imgTelephone from "../asset/register/phone-call.png";
import imgGmail from "../asset/register/gmail.png";
import imgPassword from "../asset/register/key.png";
import imgCountry from "../asset/register/flag.png";
import imgAddress from "../asset/register/home.png";
import Sweetalert from "../util/Sweetalert";
import CountryList from "../component/CountryList";
import CountryData from "../Data.json";
// import Select from "react-select/base";
// import CustomListDropDown from "../component/CountryDropDown";

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestData = { name, telephone, email, password, country, address, reg_date }
        setIsPending(true);

        try {
            let res = await fetch('http://localhost/projects/shopimore_back/api/client/client-register.php',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(requestData),
            });
            let resJson = await res.json();
            console.log(resJson);
            if (resJson.success === true) {
                await Sweetalert(
                    "success",
                    "Successfully",
                    name + " has registered!"
                );

                setName(() => "");
                setTelephone(() => "");
                setEmail(() => "");
                setPassword(() => "");
                setCountry(() => "");
                setAddress(() => "");

                setIsPending(false);
            } else {
                await Sweetalert(
                    "error",
                    "Oops...",
                    name + " registration fail!"
                );
                setIsPending(false);
            }
        } catch (error) {
            console.log(error);
        }
    }



    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const response = await fetch(
    //                 `https://restcountries.com/v3.1/all`
    //             );
    //
    //             if (!response.ok) {
    //                 throw new Error(
    //                     `This is an HTTP error: The status is ${response.status}`
    //                 );
    //             }
    //             let actualData = await response.json();
    //
    //             console.log(actualData);
    //
    //             setData(actualData);
    //             setError(null);
    //         } catch(err) {
    //             setError(err.message);
    //             setData(null);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     getData()
    // }, []);


    return (
        <div className="register">





            {/*<h1>API Posts</h1>*/}
            {/*{loading && <div>A moment please...</div>}*/}
            {/*{error && (*/}
            {/*    <div>{`There is a problem fetching the post data - ${error}`}</div>*/}
            {/*)}*/}
            {/*<ul>*/}
            {/*    {data && data.map(({ region }) => (*/}
            {/*        <li>*/}
            {/*            <h3>{region}</h3>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}






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
                                <CountryList placeholder="Your country..." data={CountryData}/>
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