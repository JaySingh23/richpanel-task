import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/signup.style.css"

function Signup() {
    const history = useNavigate();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try{
            await axios.post("https://64fb03231095e26b7f8db321--shiny-truffle-10998f.netlify.app/signup",{
                userName, email, password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
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
    <div className="sign-container">
        <div className="signup">
            <div className="header">
                <h2 className="header-text">Create Account</h2>    
            </div>

            <form action="POST">
                <div className="name-box">
                    <p>Name</p>
                    <input type="name" onChange={(e)=>{setUserName(e.target.value)}} placeholder="Name" />
                </div>
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
                <button onClick={submit}>Sign Up</button>
            </form>
            
            
            <p style={{fontSize: '0.9rem'}}>Already have an account? <Link to="/" style={{textDecoration: 'none'}}>Login</Link></p>
        </div>
    </div>
    
  )
}

export default Signup