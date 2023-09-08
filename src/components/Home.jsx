import "../styles/home.style.css";
import { LoginSocialFacebook } from 'reactjs-social-login';
import { useNavigate } from 'react-router-dom'

function Home() {
  const history = useNavigate();

  const handleLoginResolve = (response) => {
    // Convert the response object to a JSON string
    const responseString = JSON.stringify(response);

    // Navigate to the '/disconnect' page with the response data as a parameter
    history(`/disconnect?response=${encodeURIComponent(responseString)}`);
  };

  const handleLoginReject = (error) => {
    console.log(error);
  };

  return (
    <div className="container">
      <div className="box">
        <h3>Facebook Page Integration</h3>
        <LoginSocialFacebook 
          appId="6578962202217341" 
          onResolve={handleLoginResolve}
          onReject={handleLoginReject}
        >
          <button className="btn">Connect Page</button>
        </LoginSocialFacebook>
      </div>
    </div>
  );
}

export default Home;
