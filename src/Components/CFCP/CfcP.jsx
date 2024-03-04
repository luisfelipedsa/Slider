import React from 'react';

function CfcP(props) {
    return (
        <div className="items">
                    <img src={props.img} alt="" />
                    <div className="content">
                        <div className="title">
                            {props.title}
                        </div>
                        <div className="des">
                            {props.des}
                        </div>
                    </div>
                
                </div>
      );
}

export default CfcP;