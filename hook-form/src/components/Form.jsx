import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstname, setFirst] = useState("");
    const [lastname, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [cpassword, setCpassword] = useState("");  

    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password,cpassword };
    	setFirst("");
        setLast("");
    	setEmail("");
    	setPassword("");
        setCpassword("");
    };
    
    return (
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstname} onChange={ (e) => setFirst(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastname} onChange={ (e) => setLast(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                <input type="submit" value="Create User" />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" value={cpassword} onChange={ (e) => setCpassword(e.target.value) } />
                <input type="submit" value="Create User" />
                </div>
            </form>

            <p>Your Form Data</p>
            <p>First Name {firstname}</p>
            <p>Last Name {lastname}</p>
            <p>Email {email}</p>
            <p>Password {password}</p>
            <p>Confirm Password {cpassword}</p>

        </>
    );
}
export default Form;
