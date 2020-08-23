import React from 'react';

function Card(props) {
    console.log(props.img);
    return (
      
        <div className={ `col-md-${props.size}` }>
                <div class="skills__card-body">
                    <div class="skills__card-img">
                        <div class="CoverArt coverArt" style={{"background-image": props.img}}>
                        </div>
                    </div>
                    <div class="skills__card-text">
                        <div class="row">
                            <div class="col-8 skills__card-text-duration">
                                <p className="skills__card-text-duration">37 lessons | 4 hours<br />
                                    with <span class="skills__card-text-name">Casady Williams</span></p>
                                    {props.size>6 ? <p>This bootcamp will turn you into a Vue developer mix of lectures and coding exercises.</p>:<p></p>}
                            </div>
                            <div class="col-4 ">
                                <img class="skills__card-text-avatar"
                                    src="https://avatars.githubusercontent.com/cassidoo?s=128" alt="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="skills__card-text-bottom"><span
                                        class="skills__card-text-type">Advance</span>
                                    <div class="level-icon"> <svg viewBox="0 0 41 49"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10 42.5157C10 42.5157 10 40.5132 10 37.4843C10 34.4554 8.0158 32 5.56818 32C3.12055 32 6.87945 32 4.43182 32C1.9842 32 8.46345e-07 34.4554 7.13949e-07 37.4843C5.81552e-07 40.5132 4.94018e-07 42.5157 4.94018e-07 42.5157C3.61621e-07 45.5446 1.9842 48 4.43182 48L5.56818 48C8.0158 48 10 45.5446 10 42.5157Z"
                                                stroke="#2B283A" fill="#2B283A"></path>
                                            <path
                                                d="M25 42.8813L25 21.1187C25 18.2917 23.0158 16 20.5682 16C20.5682 16 21.8794 16 19.4318 16C16.9842 16 15 18.2917 15 21.1187C15 23.9456 15 42.8813 15 42.8813C15 45.7083 16.9842 48 19.4318 48L20.5682 48C23.0158 48 25 45.7083 25 42.8813Z"
                                                stroke="#2B283A" fill="#2B283A"></path>
                                            <path
                                                d="M40 42.399C40 42.399 40 8.6943 40 5.60097C40 2.50764 38.0158 -8.6732e-08 35.5682 -1.93721e-07C35.5682 -1.93721e-07 36.8794 -1.36404e-07 34.4318 -2.43393e-07C31.9842 -3.50382e-07 30 2.50764 30 5.60097L30 42.399C30 45.4923 31.9842 48 34.4318 48L35.5682 48C38.0158 48 40 45.4923 40 42.399Z"
                                                stroke="#2B283A" fill="#2B283A"></path>
                                        </svg></div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="skills__card-text-bottom"><span class="skills__card-text-price">$99</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Card;