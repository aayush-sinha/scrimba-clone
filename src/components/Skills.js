import React,{ useState } from 'react';
import Card from "./Card";
function Skills(props) {
    return (
        <>
         <div class="Divider __mount fill-light-lilac wave" style={{"margin-top": "50px"}}><svg viewBox="0 0 1505 47"
            xmlns="http://www.w3.org/2000/svg" width="100%" height="44.970099667774086">
            <path
                d="M1376 9.83546C756.334 0.0190773 371.629 -6.07515 0 11.8716V47.0003H1505V11.8716C1460.88 11.18 1417.91 10.4992 1376 9.83546Z">
            </path>
        </svg>
    </div>
        <div class="skills">
        <img class="shape lilac" src="assets/shape-lilac.svg" />
        <div class="row">
            <div class="col-12">
                <h2 class="skills__heading">Choose your next skill</h2>
            </div>
        </div>
        <div class="skills__category">
            <h4 class="active">Bootcamps</h4>
            <h4>Frameworks</h4>
            <h4>JavaScript</h4>
            <h4>HTML &amp; CSS</h4>
            <h4>All courses</h4>
        </div>

        <div class="row skills__card">
            <Card img="url('assets/card1.svg')"size="3"/>
            <Card img="url('assets/card2.svg')"size="3"/>
            <Card img="url('assets/card3.svg')"size="3"/>
            <Card img="url('assets/card4.svg')"size="3"/>
        </div>
        
    </div>
    </>
    

    );
}

export default Skills;