import React , { useContext, useState } from "react"
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, dispatch} = useContext(AuthContext);

    const handleLogin = (e) =>{
        e.preventDefault();
        login({email, password}, dispatch);

    };
    return (
        <div className="login">
            <form action="" className="loginform">
                <input type="text" placeholder="email" className="logininput" 
                onChange={
                    (e) => setEmail(e.target.value)
                }/>
                <input type="password" placeholder="password" className="logininput" 
                onChange={
                    (e) => setPassword(e.target.value)
                }/>
                <button className="loginBtn" onClick={handleLogin} disabled={isFetching}>Login</button>
            </form>
        </div>
    )
}

 
