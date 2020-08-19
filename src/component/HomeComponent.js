import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle,Jumbotron,  } from 'reactstrap';

function RenderCards () {
    return(
       <>
        <Card color="primary">
            <CardBody>
                <CardTitle>What we do?</CardTitle>
                <CardText>Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.</CardText>
            </CardBody> 
        </Card>
        </>
    )
}
function RenderCards2(){
    return(
        <>
        <Card color="success">
            <CardBody>
            <CardTitle>Talks</CardTitle>
            <CardText>
                Get updated with the latest news and announcements
            </CardText>
            </CardBody>
        </Card>
        </>
    )
}
function RenderCards3(){
    return(
        <>
        <Card color="danger">     
            <CardBody>
                <CardTitle>
                    Campus Roadshow
                </CardTitle>
                <CardText>
                Share knowledge in different Companies, colleges and universities.
                </CardText>
            </CardBody>
        </Card>
        </>
    )
}

const RenderJumbo = () => {
    return(
        <Jumbotron>
            <div className="container">
            <div className="row row-header">
                 <div className="col-12 ml-5 m-1">
                    <h3><strong>About Developer Students Clubs</strong></h3>
                    <img src="/assets/pic1.png" alt="google" className="float-right"/>
                     <p>
                        A Developer Students Club is a Google recognized student body at a college which directly <br/>reports to Google for their activities and is supported by the tech giant.
                        A DSC conducts workshops, seminars and other fun activities which help the students connect with Google.
                    </p>
                </div>
            </div>
            </div>
        </Jumbotron>
    )
}

class Home extends Component{
    render(){
        return(
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCards/>
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCards2/>
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCards3/>
                    </div>
                </div>
                <div className="row align-items-right">
                    <div className="col-12 sm-6 m-1">
                        <RenderJumbo/>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Home;