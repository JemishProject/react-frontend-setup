import React, {useEffect} from "react";
import { Helmet } from "react-helmet";

const Login: React.FC = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://otpless.com/auth.js';
        script.id = 'otplessIdScript';
        document.body.appendChild(script);
      
      
        const otpless = (otplessUser: any) => {
          alert(JSON.stringify(otplessUser))
          // Additional code to handle otplessUser
        };
        (window as any).otpless = otpless;
        return () =>{
          console.log("home is unmounting")
          const divid: any =document.getElementById("otplessIdScript")
          document.body.removeChild(divid)
        }
      },[])
      
    return (
    <div>
        <Helmet>
            <title>Login</title>
            <meta name="description" content={"Login"} />
            {/* Add more meta tags or SEO-related elements as needed */}
        </Helmet>
        <div>
            Log In
        </div>
        <div id="otpless-login-page"></div>
    </div>
    )
}

export default Login;