import { useNavigate, Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react"
import "../styles/login.style.css"

function Login() {

    const history=useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/",{
                email, password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch{
            console.log(e);
        }
    }
  return (
    <div className="container">
        <div className="signup" style={{height: '45vh'}}>
            <div className="header">
                <h2 className="header-text">Login to your account</h2>    
            </div>

            <form action="POST">
                <div className="email-box">
                    <p>Email</p>
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
                </div>
                <div className="password-box">
                    <p>Password</p>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
                </div>
                <div className="remember-box">
                    <input value="test" type="checkbox" style={{height: '15px'}}/>
                    <p style={{fontSize: '0.8rem'}}>Remember me</p> 
                </div>
                <button onClick={submit}>Login</button>
            </form>
            
            
            <p style={{fontSize: '0.9rem'}}>New to myApp? <Link to="/signup" style={{textDecoration: 'none'}}>Sign up</Link></p>
        </div>
    </div>
    
  )
}

export default Login