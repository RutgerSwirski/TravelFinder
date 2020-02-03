import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import FixedTrips from '../components/FixedTrips'
import FAQ from '../components/FAQ'
import ContactUs from '../components/ContactUs'

import Footer from '../components/Footer'


class Home extends React.Component {
    render() {
        return(
            <div>
                <Banner />
                <About />
                <FixedTrips />
                <FAQ />
                <ContactUs />

                <Footer />
            </div>
        )
    }
}

export default Home