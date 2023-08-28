const Contact = () => {

const handleSubmit =()=>{
    console.log('submit')

}

    return (
     <>
     <div>
        <div className="container">
        <div className="container-box">
        <div className="left"><img src="/client/public/photos/inspiration/ready.avif" alt=""/></div>
            <div className="right">
                <h3>Register Form</h3>
                <hr/>
                <br/>
                <form  >    
                <label htmlFor="firstName" id="firstName"> First Name:</label>
                <input type="text" id="firstName" placeholder="Please enter your first name" name="firstName" className="field"/>
                <label htmlFor="lastName" id="lastName"> Last Name:</label>
                <input type="text" id="lastName" placeholder="Please enter your last name" name="lastName" className="field"/>
                <label htmlFor="email" id="email"> Email:</label>
                <input type="email" id="email" placeholder="Please enter your email address" name="email" className="field"/>
                <label htmlFor="phone" id="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" required
                    placeholder="Please enter your phone number" className="field"/>
                <label htmlFor="age" id="age">Date of Birth:</label>
                <input type="date" id="age" name="age" value="2000-01-01" min="1940-01-01" max="2022-12-31" className="field"/>
                <button  onSubmit={handleSubmit} className="btn">Send</button>
                </form>
            </div>
        </div>
    </div>
    <p className="reg-msg">Thanks for the register. <br/> We will be in touch with you in 2-3 working days. </p>

    <hr className="hr"/>

    <div className="bottom-box">
        <div className="worldgym">
        <h3>WORLD GYM</h3>
        <br/>
    </div>
    <div className="contactUs">


            <div className="contact-col">
                    <i className="fa-solid fa-phone"></i>
                        <span>
                            <h4>012-345-6789</h4>
                            <p>Monday to Saturday, 9AM to 6PM</p>
                        </span>
                    <i className="fa-solid fa-envelope"></i>
                        <span>
                            <h4>abc@abcdef.com</h4>
                            <p>Email us your query</p>
                        </span>
                    <i className="fa-solid fa-house"></i>
                        <span>
                            <h4>United States</h4>
                            <p>12 Abcdef St, New York</p>
                        </span>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305916712!2d-74.25986415937723!3d40.697149422524795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2snz!4v1679710362872!5m2!1sen!2snz" width="600" height="450" ></iframe>
            </div>
        </div>

    </div>
    </div>
    </>
    )
}

export default Contact