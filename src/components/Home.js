import React, { Component} from 'react'
import '../App.css'
import { Row, Container } from 'react-bootstrap'

class Home extends Component {
    render(){
        return(
            <div className="home-landing">
                <Container fluid>
                   <Row>              
                         <img  
                         src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                         alt="avatar"
                         className="avatar-img"
                         />              

                   </Row>
                   <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                          <hr/>
                        <p>HTML/CSS | Bootstrap | Javascript | React | Python | Django | MongoDB</p> 

                        <div className="social-links">
                        {/* LinkedIn */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        {/* Github */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                        {/* Freecodecamp */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-free-code-camp" aria-hidden="true" />
                        </a>

                        {/* Youtube */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-youtube-square" aria-hidden="true" />
                        </a>
                        
                        </div> 
                    </div>
                  
                      
               </Container>
            </div>
        )
    }
}

export default Home;