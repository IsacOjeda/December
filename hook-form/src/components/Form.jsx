import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstname, setFirst] = useState("");
    const [lastname, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [cpassword, setCpassword] = useState("");  
    const[validated,setValidation] = useState("");

    
    const firstName = (e) => {
    	setFirst(e.target.value);
        if(e.target.value.length<1){
            setValidation("First Name is required");
        }else if(e.target.value.length<3){
            setValidation("First Name must be 3 Characters or longer");
        }else{
            setValidation("");
        }
    };
    const lastName = (e) => {
    	setLast(e.target.value);
        if(e.target.value.length<1){
            setValidation("");
        }else if(e.target.value.length<3){
            setValidation("Last Name must be 3 Characters or longer");
        }else{
            setValidation("");
        }
    };
    const emails = (e) => {
    	setEmail(e.target.value);
        if(e.target.value.length<1){
            setValidation("");
        }else if(e.target.value.length<2){
            setValidation("Email must be 3 Characters or longer");
        }else{
            setValidation("");
        }
    };
    const passwords = (e) => {
    	setPassword(e.target.value);
        if(e.target.value.length<1){
            setValidation("");
        }else if(e.target.value.length<8){
            setValidation("Password must be at least 8 Characters");
        }else{
            setValidation("");
        }
    };
    const cPasswords = (e) => {
    	setCpassword(e.target.value);
        if( e.target.value != password){
            setValidation("Passwords must match");
        }else{
            setValidation("");
        }

    };
    
    return (
        <>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstname} onChange={(firstName)} />
                    {
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastname} onChange={(lastName)} />

                </div>
                <div>
                    <label>Email: </label> 
                    <input type="text" value={email} onChange={(emails)} />

                </div>
                <div>
                    <label>Password: </label> 
                    <input type="text" value={password} onChange={(passwords)} />

                </div>
                <div>
                    <label>Confirm Password: </label> 
                    <input type="text" value={cpassword} onChange={(cPasswords)} />

                </div>

                <input type="submit" value="Create User" />
            </form>
                    {
                        validated ?
                        <p>{validated}</p>:
                        ""
                    }
        </>
    );
}
export default Form;
