const Home = () => {
  return (
    <>
      <div className="membership">
        <h2>Memberships We Offer</h2>
        <p>Here are our offers fot YOU!</p>
        <div className="row">
          <a className="member-col1" href="/membership">
            <div>
              <h3 className="membership-h3">BRONZE</h3>
              <p>$12.99 24hrs ANYTIME</p>
            </div>
          </a>
          <div className="vtcl"></div>
          <a className="member-col2" href="/membership">
            <div>
              <h3 className="membership-h3">SILVER</h3>
              <p>
                $15.99 24hrs ANYTIME <br /> with free use of Massage chair and
                MORE!
              </p>
            </div>
          </a>
          <div className="vtcl"></div>
          <a className="member-col3" href="/membership">
            <div>
              <h3 className="membership-h3">GOLD</h3>
              <p>
                $20.99 24hrs ANYTIME <br /> with Free use of Massage Chair,{' '}
                <br /> Free WIFI, Access to Recovery Room
                <br /> and MORE!
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="facility">
        <h2>What we have?</h2>
        <p>
          You want to get fit? Look nice? Attractive? <br /> Not just lifting,
          there are plenty of workouts here that you can enjoy!
        </p>

        <div className="row">
          <div className="facility-col">
            <img alt="image of cycle 2" src="/photos/features/cycle2.jpeg" />
            <div className="layer">
              <h3>CYCLE</h3>
            </div>
          </div>
          <div className="facility-col">
            <img src="/photos/features/crossfit1.avif" />
            <div className="layer">
              <h3>CROSSFIT</h3>
            </div>
          </div>
          <div className="facility-col">
            <img src="/photos/features/yoga1.avif" />
            <div className="layer">
              <h3>YOGA</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="location">
        <h3>Our Locations</h3>
        <p>We Are Everywhere!</p>
        <div className="column">
          <a href="/location">
            <div className="location-col">
              <img src="/photos/location/newyork.jpeg" />
              <h3>NEW YORK</h3>
              <p>Where we have started! No.1 biggest gym in the world!</p>
              <hr />
            </div>
          </a>
          <a href="/location">
            <div className="location-col">
              <img src="/photos/location/seoul3.jpeg" />
              <h3>SEOUL</h3>
              <p>No.1 biggest gym in Asia! with most memberships enrolled!</p>
              <hr />
            </div>
          </a>
          <a href="/location">
            <div className="location-col">
              <img src="/photos/location/paris1.jpeg" />
              <h3>PARIS</h3>
              <p>Our first gym in Europe! Biggest gym in Europe!</p>
              <hr />
            </div>
          </a>
        </div>
      </div>

      <div className="contact">
        <h2>
          Contact us if you want to join our team <br /> Anywhere from the world
        </h2>
        <a href="/contact" className="btn-contact">
          CONTACT US
        </a>
      </div>
    </>
  )
}

export default Home
