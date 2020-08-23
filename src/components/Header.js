import React from 'react';

function Header(props) {
    return (
        <div class="HomePage">
        <header>
            <img class="shape light-coral-edge" src="assets/shape-light-coral-edge.svg" />
            <img class="shape mint-edge" src="assets/shape-mint-edge.svg" />
            <img class="peep girl-standing" src="assets/peep-girl-standing.svg" />
            <img class="peep person-sitting" src="assets/peep-person-sitting.svg" />
            <div class="container">
                <div class="row">
                    <div class="col-12 header">
                        <h1 class="header__text">New Career Path: Become a Frontend Developer</h1>
                        <button class="header__button">Visit Career Path</button>
                    </div>
                </div>
            </div>
        </header>
    </div>
    );
}

export default Header;