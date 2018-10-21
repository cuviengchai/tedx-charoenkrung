import Layout from "../components/Layout"
import SponsorItem from "../components/Sponsors/SponsorItem"
import React from "react"

class Sponsors extends React.Component {
    constructor(props){
        super(props)
        this.state = {data:[
            {
                "name":"ad1",
                "image":"static/images/image1.jpg",
                "link":"link1",
                "details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam."
            },
            {
                "name":"ad2",
                "image":"static/images/image2.jpg",
                "link":"link2",
                "details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam."
            },
            {
                "name":"ad3",
                "image":"static/images/image3.jpg",
                "link":"link3",
                "details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam."
            }
        ]
        }
    }
    render(){
        console.log(this.state.data.map(sponsor => console.log(sponsor.name)))
        return(
            <Layout>
                <div className="columns is-desktop">
                        {this.state.data.map((sponsor) =>
                            <div className="column ">
                                <SponsorItem name={sponsor.name} image={sponsor.image} 
                                link={sponsor.link} details={sponsor.details}/>
                            </div>
                        )}
                </div>
            </Layout>
        )
    }
}

export default Sponsors