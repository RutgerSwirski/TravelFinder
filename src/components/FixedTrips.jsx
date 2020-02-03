import React from 'react'
import FixedTrip from './FixedTrip'

class FixedTrips extends React.Component {
    render() {
        return(
            <div className="fixed-trips container">
                <h1 className="fixed-trips-title">Fixed Trips</h1>
                <div className="row">
                        <FixedTrip tripName="Asia" tripDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit excepturi ad quasi dolorem quos libero vero ullam, doloribus aliquam!" tripPrice="450" tripBackgroundUrl="https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                        <FixedTrip tripName="Europe" tripDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit excepturi ad quasi dolorem quos libero vero ullam, doloribus aliquam!" tripPrice="850" tripBackgroundUrl="https://images.pexels.com/photos/967292/pexels-photo-967292.jpeg?cs=srgb&dl=boat-on-the-water-near-buildings-967292.jpg&fm=jpg" />
                        <FixedTrip tripName="Oceania" tripSale={true} tripDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit excepturi ad quasi dolorem quos libero vero ullam, doloribus aliquam!" tripPrice="1000" tripBackgroundUrl="https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <FixedTrip tripName="Africa" tripSale={true} tripDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit excepturi ad quasi dolorem quos libero vero ullam, doloribus aliquam!" tripPrice="1500" tripBackgroundUrl="https://images.pexels.com/photos/861339/pexels-photo-861339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <FixedTrip tripName="N. America" tripSale={true} tripDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit excepturi ad quasi dolorem quos libero vero ullam, doloribus aliquam!" tripPrice="700" tripBackgroundUrl="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <FixedTrip tripName="S. America" tripDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit excepturi ad quasi dolorem quos libero vero ullam, doloribus aliquam!" tripPrice="950" tripBackgroundUrl="https://images.pexels.com/photos/2017747/pexels-photo-2017747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

                </div>
            </div>
        )
    }
}



export default FixedTrips