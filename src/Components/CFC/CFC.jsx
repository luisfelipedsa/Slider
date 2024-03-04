import React from 'react';


function Cfc(props) {
    return ( 
        <div className="item">
                    <img src={props.img} alt="" />
                    <div className="content">
                        <div className="author">{props.author}</div>
                        <div className="title">{props.title}</div>
                        <div className="topic">{props.topic}</div>
                        <div className="des">{props.des}</div>
                        <div className="buttons">
                            <button>{props.btn1}</button>
                            <button>{props.btn2}</button>
                        </div>
                    </div>
                </div>
     );
}

export default Cfc;