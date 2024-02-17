import React from 'react';
import './Carousel.css';
import iphone from '../Assets/iphone.png';
import mac from '../Assets/mac.jpg';
import watch from '../Assets/watch.jpg';
import air from '../Assets/air.jpeg';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
// import nextBtn from '../../Pfv';
import Tentativa from '../../Tentativa';
const Carousel=()=> {
    // const [isNext,setNext] = useState(false);
    
   

    

    Tentativa()

    

    
    
    
    return ( 
        <div className='carousel'>
            <div className="list">
                <div className="item">
                    <img src={iphone} alt="" />
                    <div className="content">
                        <div className="author">Savage</div>
                        <div className="title">DESIGN SLIDE</div>
                        <div className="topic">Apple</div>
                        <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi laudantium nihil exercitationem vel, quos, sed dolores magnam, minima mollitia libero sit ipsa? Consequatur quas suscipit et doloribus non dolorum!</div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={mac} alt="" />
                    <div className="content">
                        <div className="author">Savage</div>
                        <div className="title">DESIGN SLIDE</div>
                        <div className="topic">Apple</div>
                        <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi laudantium nihil exercitationem vel, quos, sed dolores magnam, minima mollitia libero sit ipsa? Consequatur quas suscipit et doloribus non dolorum!</div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={watch} alt="" />
                    <div className="content">
                        <div className="author">Savage</div>
                        <div className="title">DESIGN SLIDE</div>
                        <div className="topic">Apple</div>
                        <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi laudantium nihil exercitationem vel, quos, sed dolores magnam, minima mollitia libero sit ipsa? Consequatur quas suscipit et doloribus non dolorum!</div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={air} alt="" />
                    <div className="content">
                        <div className="author">Savage</div>
                        <div className="title">design SLIDE</div>
                        <div className="topic">Apple</div>
                        <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi laudantium nihil exercitationem vel, quos, sed dolores magnam, minima mollitia libero sit ipsa? Consequatur quas suscipit et doloribus non dolorum!</div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="thumbnail">
                <div className="items">
                    <img src={iphone} alt="" />
                    <div className="content">
                        <div className="title">
                            Name Slider
                        </div>
                        <div className="des">
                            Description
                        </div>
                    </div>
                
                </div>
                <div className="items">
                    <img src={mac} alt="" />
                    <div className="content">
                        <div className="title">
                            Name Slider
                        </div>
                        <div className="des">
                            Description
                        </div>
                    </div>
                
                </div>
                <div className="items">
                    <img src={watch} alt="" />
                    <div className="content">
                        <div className="title">
                            Name Slider
                        </div>
                        <div className="des">
                            Description
                        </div>
                    </div>
                
                </div>
                <div className="items">
                    <img src={air} alt="" />
                    <div className="content">
                        <div className="title">
                            Name Slider
                        </div>
                        <div className="des">
                            Description
                        </div>
                    </div>
                
                </div>
            </div>

            <div className="arrows">
                <button id="prev"><GrFormPrevious /> </button>
                <button id="next"   ><GrFormNext /></button>
            </div>

            <div className="time">

            </div>
            
        </div>
     );
     
}

export default Carousel;