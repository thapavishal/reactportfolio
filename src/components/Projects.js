import React, { Component} from 'react'
import { Tabs, Tab, TabContent } from 'react-bootstrap'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {eventKey: 0}
    }

    toggleCategories(){
       
    if(this.state.eventKey === 0){
        return(
            <div><h1>This is react</h1></div>
        )
     } else if(this.state.eventKey === 1){
         return (
             <div><h1>This is python</h1></div>
         )
     }else if(this.state.eventKey === 2){
        return (
            <div><h1>This is Django</h1></div>
        )
    }else if(this.state.eventKey === 3){
        return (
            <div><h1>This is MongoDB</h1></div>
        )
    }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs defaultActiveKey="react" id="uncontrolled-tab-example">
                  <Tab eventKey="react" title="React">
                   <TabContent />
                  </Tab>
                  <Tab eventKey="python" title="Python">
                   <TabContent />
                  </Tab>
                  <Tab eventKey="django" title="Django">
                   <TabContent />
                  </Tab>
                  <Tab eventKey="mongodb" title="MongoDB">
                   <TabContent />
                  </Tab>
                </Tabs>

                <section className="projects-grid">
                 {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Projects;