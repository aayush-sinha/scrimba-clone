import React from 'react';

function Discord(props) {
    return (
        <div className="discord">
            <img class="shape light-coral" src="assets/shape-light-coral.svg" />
            <img class="shape coral" src="assets/shape-coral.svg"></img>
            <div class="discord__heading">
                <h2 class="discord__heading">Join our Discord chat</h2>
            </div>
            <div className="discord__content">
            <h4>100 online<span class="bullet"> • </span><span>now</span></h4>
            </div>
            <img class="peep crowd" src="assets/peep-crowd.svg" />
            <img class="peep small-crowd" src="assets/peep-small-crowd.svg" />
        </div>
    );
}

export default Discord;