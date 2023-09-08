import "../styles/disconnect.style.css";
import { useLocation, useNavigate } from "react-router-dom";

function Disconnect() {
    const location = useLocation();
    const history = useNavigate();
    // Get the 'response' query parameter from the URL
  const queryParams = new URLSearchParams(location.search);
  const responseString = queryParams.get('response');

  // Parse the JSON data if it exists
  
  let responseData = null;
    if (responseString) {
        try {
            responseData = JSON.parse(decodeURIComponent(responseString));
            
        } catch (error) {
            console.error('Error parsing response data:', error);
        }
    }

    const handleClick = () => {
        history(`/messages?response=${encodeURIComponent(responseString)}`);
  };
  return (
    <div className="container">
      <div className="box">
        <h4 style={{fontWeight: 400}}>Facebook Page Integration</h4>
        <h4 style={{fontWeight: 400}}>Integrated Page: <strong>Amazon Business</strong></h4>
        <button style={{backgroundColor: '#E1523F'}}>Disable Integration</button>
        <button onClick={handleClick}>Reply to Messages</button>
      </div>
    </div>
  );
}

export default Disconnect;
