const Header = () =>{
    return ( <div className="header">
    <nav>
        <div className="navbar">
            <h1>WORLD GYM-</h1>
           <i className="fa-solid fa-xmark"></i>
            <ul className="links">
                <li><a href="index.html">HOME</a></li>
                <li><a href="about.html">ABOUT</a></li>
                <li><a href="membership.html">MEMBERSHIP</a></li>
                <li><a href="location.html">LOCATION</a></li>
                <li><a href="contact.html">CONTACT</a></li>
            </ul>
            <div className="toggle_btn">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
        
        
    </nav>

    <div className="dropdown_menu">
        <li><a href="index.html">HOME</a></li>
        <li><a href="about.html">ABOUT</a></li>
        <li><a href="membership.html">MEMBERSHIP</a></li>
        <li><a href="location.html">LOCATION</a></li>
        <li><a href="contact.html">CONTACT</a></li>
    </div>

    <div className="text-box">
        <h2>World's Biggest GYM</h2>
        <p>
            We are no.1 GYM all around the WORLD! <br/> We give you Motivation, Inspiration and the Result!
        </p>
        <a href="" className="btn-contact">Contact Us To Know More</a>
    </div>

</div>)
}

export default Header