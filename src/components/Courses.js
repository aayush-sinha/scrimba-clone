import React from 'react';
import Card from "./Card";
function Courses(props) {
    return (
        <div class="course__grid-hot">
            <div className="course__grid-hot-content">
            <div class="row"  >
                <div class="col-md-6" style={{"position":"relative"}}>
                    <h2 class="skills__heading">Hot right now</h2>
                    <Card img="url('assets/card1.svg')" size="12" />
                </div>
                <div class="col-md-6">
                    <h2 class="course__grid-hot__heading" style={{"margin-botttom":"50px"}}>Classics</h2>
                    <div className="row">
                    <Card img="url('assets/card1.svg')" size="6"/>
                    <Card img="url('assets/card2.svg')" size="6"/>
                    </div>
                    <div className="row" style={{"margin-top":"30px"}}>
                    <Card img="url('assets/card3.svg')" size="6"/>
                    <Card img="url('assets/card4.svg')" size="6"/>
                    </div>
                </div>
            </div>
            </div>
        </div>

    );
}

export default Courses;