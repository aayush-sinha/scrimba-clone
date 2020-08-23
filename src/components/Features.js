import React from 'react';

function Features(props) {
    return (
        <>
            <div class="features">
        <div class="title">
            <h3>
                Why learn with Scrimba?
            </h3>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="features__col-2 peeps">
                    <img class="peep man-bearded" src="assets/peep-man-bearded.svg"/>
                    <img class="peep girl-wheelchair" src="assets/peep-girl-wheelchair.svg"/>
                    <img class="peep guy-macbook" src="assets/peep-guy-macbook.svg" /></div>
            </div>
            <div class="col-md-4">
                <div class="features__col-2">
                    <h2 class="features__col-heading">Learn by doing</h2>
                    <h3 class="features__col-text">Bye bye static video! Our interactive screencasts lets you edit the
                        teacher's code.</h3>
                </div>
            </div>
            <div class="col-md-4">
                <div class="features__col-3">
                    <h2 class="features__col-heading">Learn with others</h2>
                    <h3 class="features__col-text">Scrimba is more than just courses, you'll join a community of
                        learners across the globe.</h3>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}

export default Features;