import React, { Component } from 'react';
import './ClockContainer.css';
import './ClockItems.css';

class ClockContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <h1> CLOCK </h1>
               {/* <Box size="BIG"/> */}
               <Circle size="BIG"/>
            </div>
         );
    }
}
 
export default ClockContainer;

function Box(props){
    let boxClassName = "digital-clock-box-" + props.size;
    return(
        <div className={boxClassName} > 
            
        </div>
    );
}

function Circle(props){
    let circleClassName = "analog-clock-circle-" + props.size;
    return(
        <div className = {circleClassName}>
            <ClockCircleElements/>
        </div>
    );
}

function ClockCircleElements(props){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
    
    // const listItems = numbers.map((number, index) => 
    //     // itemClass = itemClass,
    //     <div className={itemClass} key={index} id={number}><div id={number}>{number}</div></div>
    // );
    const listItems = numbers.map(myFunct)

    function myFunct(number,index) {
        let itemClass = "clockItems" + number.toString();
        return <div className={itemClass} key={index} id={number}><div>{number}</div></div>;
    }
    return(
            <div className="Clock">
                {listItems}
                <div className="hand" id="seconds">
                    <div className="seconds"></div>
                </div>
                <div className="hand" id="minutes">
                    <div className="minutes"></div>
                </div>
                <div className="hand" id="hours">
                    <div className="hours"></div>
                </div>
            </div>
    );
}



setInterval(updateClock, 1000);
function updateClock(){
    const secDiv = document.getElementById('seconds');
    const minDiv = document.getElementById('minutes');
    const hoursDiv = document.getElementById('hours');
    
    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = date.getMinutes() / 60;
    let hour = date.getHours() / 12;

    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
    hoursDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
}