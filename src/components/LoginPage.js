import React ,{useState,useEffect} from "react";
import Axios from 'axios'


export const LoginPage=({Login,error})=>{
    const [emailLog,setEmail] = useState({email:""})
    const [passwordLog,setPassword] = useState({password:""})

    const login =()=>{
        Axios.post('https://localhost3001/login',
        {   
            email : emailLog,
            password : passwordLog
            
        }).then((response)=>{
            console.log(response);
        });
    }

    return(
    <>
        <form >
            <div>
                <h1>Login-Page</h1>
                <label>Email:</label>
                <input type="email" name="email" id="email" onChange={(e)=>{
                    setEmail(e.target.value);
                }}></input>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" id="password" onChange={(e)=>{
                    setPassword(e.target.value);
                }}>
                </input>
            </div>
            <div>          
                <button onClick={login} value="Login">Login</button>
            </div>
        </form>
    </>
    );
}

export default LoginPage