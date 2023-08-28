const Membership =() => {
    return (
        <>
        <section className="membership">
        <h2>Memberships We Offer</h2>
        <p>
            Here are our offers for YOU!
        </p>
        <div className="row">
            <div className="member-col1">
                <h3>BRONZE</h3>
                <p className="member-p">$12.99 24hrs ANYTIME</p>
                {/* <div className="hrzl"></div> */}
                <p className="explain">
                    We offer 24/7 access, the best in strength and cardio equipment, functional and personal training, &
                    first 3 months with free trial on crossfit & yoga classNamees.
                </p>
            </div>
            <div className="member-col2">
                <h3>SILVER</h3>
                <p className="member-p">$15.99 24hrs ANYTIME <br/> with free use of Massage chair and MORE!
                </p>
                {/* <div className="hrzl"></div> */}
                <p className="explain">
                    We offer 24/7 access, the best in strength and cardio equipment,<br/> functional and personal
                    training, <br/>
                    first 3 months with free trial on crossfit & yoga classNamees,
                    free use of massage chair, parking resevation at rush-hour, hot sauna and spa and MORE!
                </p>
            </div>
            <div className="member-col3">
                <h3>GOLD</h3>
                <p className="member-p">$20.99 24hrs ANYTIME <br/> with Free use of Massage Chair, <br/> Free WIFI, Access to Recovery Room
                    <br/> and
                    MORE! </p>
                {/* <div className="hrzl"></div> */}
                <p className="explain">
                    Everything DOUBLE! <br/>
                    Want to work out with your partner? or friend? <br/>
                    We offer 24/7 access, the best in strength and cardio equipment, functional and personal
                    training, first 3 months with free trial on crossfit & yoga classNamees,
                    free use of massage chair, free WIFI, access to recovery room, parking resevation at rush-hour,
                    hot sauna and spa and MORE!
                </p>

               
            </div>
        </div>

        <a href="" className="btn-contact mem-btn">Contact us to register</a>
    </section>
    </>
    )
}

export default Membership