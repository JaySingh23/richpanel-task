import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../styles/messages.style.css"


function Messages() {
  const location = useLocation();

  // Get the 'response' query parameter from the URL
  const queryParams = new URLSearchParams(location.search);
  const responseString = queryParams.get('response');

  let responseData = null;

  if (responseString) {
    try {
      responseData = JSON.parse(decodeURIComponent(responseString));
    } catch (error) {
      console.error('Error parsing response data:', error);
    }
  }

  const [responseMessage, setResponseMessage] = useState(null);

//   useEffect(() => {
//   console.log(responseData)
//   console.log(responseData.data.accessToken)
//     }, [responseString]);

  useEffect(() => {
    if (responseData && responseData.data.accessToken) {
      const userAccessToken = responseData.data.accessToken;

      // Make a GET request to the Facebook Graph API
      axios.get(`https://graph.facebook.com/v13.0/me/accounts?access_token=${userAccessToken}`)
        .then((response) => {
          // Handle the response data here
          console.log('API Response:', response.data);
          setResponseMessage('API Response: ' + JSON.stringify(response.data));
        })
        .catch((error) => {
          // Handle errors here
          console.error('Error:', error);
          setResponseMessage('Error: ' + error.message);
        });
    }
  }, [responseData]);

  return (
    <div>
     Messages 
    </div>
  )
}

export default Messages;
