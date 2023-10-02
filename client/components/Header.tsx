import { Link } from "react-router-dom"
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { NavGroup, NavButton } from './Styled'


function Header(){

    function handleClick(){
    const toggle_btn = document.querySelector('.toggle_btn') as HTMLElement;
    const toggleBtnIcon = document.querySelector('.toggle_btn i') as HTMLElement;
    const dropDownMenu = document.querySelector('.dropdown_menu') as HTMLElement;
    
    toggle_btn.onclick = function () {
      dropDownMenu.classList.toggle('open');
      const isOpen = dropDownMenu.classList.contains('open');
    
      toggleBtnIcon.className = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
    }
    }
    const { user, logout, loginWithRedirect } = useAuth0()
    if (user) {
      console.log(user)
    }
  
    const handleSignOut = () => {
      logout({
        logoutParams: {
          returnTo: window.location.origin,
        },
      })
    }
  
    const handleSignIn = () => {
      loginWithRedirect({
        authorizationParams: {
          redirect_uri: `${window.location.origin}`,
        },
      })
    }
  
    return ( <div className="header">
    <nav>
        < div className="navbar">
            <h1>WORLD GYM-</h1>
           {/* <i className="fa-solid fa-xmark" aria-hidden="true"></i> */}
            <ul className="links">
                <Link to={'/'}><li>HOME</li></Link>
                <Link to={'about'}><li>About</li></Link>
                <Link to={'membership'}><li>Membership</li></Link> 
                <Link to={'location'}><li>Location</li></Link> 
                <Link to={'contact'}><li>Contact</li></Link>
                {/* <NavGroup>
            <IfAuthenticated>
          <NavButton className="log-btn" onClick={handleSignOut}>Sign out</NavButton>
          {user && <p>Signed in as: {user?.email}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavButton className="log-btn" onClick={handleSignIn}>Sign in</NavButton>
        </IfNotAuthenticated>
        </NavGroup> */}
            </ul>
        
            <div className="toggle_btn">
                <i onClick={handleClick}className="fa-solid fa-bars"></i>
            </div>
        </div>
        
        
    </nav>
   
    <div className="dropdown_menu">
        <Link to={'/'}><li className="drop-link">HOME</li></Link>
        <Link to={'about'}><li className="drop-link">About</li></Link>
        <Link to={'membership'}><li className="drop-link">Membership</li></Link> 
        <Link to={'location'}><li className="drop-link">Location</li></Link> 
        <Link to={'contact'}><li className="drop-link">Contact</li></Link>
        {/* <NavGroup>
            <IfAuthenticated>
          <NavButton className="log-btn" onClick={handleSignOut}>Sign out</NavButton>
          {user && <p>Signed in as: {user?.email}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavButton className="log-btn" onClick={handleSignIn}>Sign in</NavButton>
        </IfNotAuthenticated>
        </NavGroup> */}
        <Login/>
    </div>

    <div className="text-box">
        <h2>World's Biggest GYM</h2>
        <p>
            We are no.1 GYM all around the WORLD! <br/> We give you Motivation, Inspiration and the Result!
        </p>
        <Link to={'/contact'} className="btn-contact">Contact Us To Know More</Link>
    </div>

</div>)
}

export default Header