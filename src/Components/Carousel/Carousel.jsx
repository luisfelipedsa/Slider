import React,{ useEffect,  useState} from 'react';
import './Carousel.css';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
// import Items from '../Items';
// import Cfc from '../CFC/CFC';
import ItemsP from '../ItemsP';
import CfcP from '../CFCP/CfcP';
import iphone from '../Assets/iphone.png';
import mac from '../Assets/mac.jpg';
import watch from '../Assets/watch.jpg';
import air from '../Assets/air.jpeg';

const images =[iphone,mac,watch,air]




const Carousel=()=> {
    // !! BARRA TIME
    const [animationT,setAnimationT] = useState(0)
    const [v,setV] = useState(true)
    
    
    useEffect(()=>{
        if (animationT === 0) {
            setV(true);
            setAnimationT(3);
          }
        
    },[animationT])
    
    
    
    // 
   
//   ANIMAÇÃO IMG

    const [animationN,setAnimationN] = useState(0)
    const [w,setW] = useState(true)


    const styleNext = {
        width: w ?`150px`:'',
        height: w ?`220px`:'',
        position: w ?`absolute`:'',
        bottom: w ?`50px`:'',
        left: w ?`50%`:'',
        border_radius:w ?` 30px`:'',
        animation: w ? ` showImage .${animationN}s linear 1 forwards`:''
    }


    useEffect(()=>{
        if (animationN === 0) {
            setW(true);
            setAnimationN(8);
          }
        
    },[animationN])
// 
   

    // ANIMAÇÃO CONTEXTO
    const [animationC,setAnimationC] = useState(0)
    const [y,setY] = useState(true)

    
    


    

    const styleContent ={
        transform: y ?`translateY(50px)`: '',
        filter:y ? `blur(20px)`: '',
        opacity: y ?`0`: '',
        animation: y ? ` showContent .${animationC}s 1s linear 1 forwards` : ''
        }

        useEffect(()=>{
            if (animationC === 0) {
                setY(true);
                setAnimationC(5);
               
              }
            
        },[animationC])


        
// 
   
   
   
   
    const[ide,setIde] = useState('')
    
    
const x = `carousel ${ide}`

const[imgIndex,setImgIndex] = useState(0)

    

// BOTÃO ESQUERDO
const left = ()=>{
    setV(false);
    setY(false);
    setW(false);
    setAnimationC(0);
    setAnimationN(0);
    setAnimationT(0);
    setIde('prev')
    setImgIndex(index =>{
        if(index === 0) return images.length - 1
        return index -1
    });

}
// 
// 


// BOTÃO DIREITO
const right = ()=>{
    setV(false);
    setY(false);
    setW(false);
    setAnimationC(0);
    setAnimationN(0);
    setAnimationT(0);
    setIde('next')
    setImgIndex(index =>{
        if(index === images.length - 1) return 0
        return index +1
    });


    

}
// 
// 


// LOOPING
const [time,setTime] = useState(true);

    function teste(e){
       
            if(e===true){
                right()
                setTime(false)
             }
      
        
    }
    
    
    useEffect(()=>{
        if(time===false){
        setInterval(()=>{
            
                setTime(true)
        
            
        },8000)
    }
        
    },[time])
    
    

    if(time===true){
        setInterval(teste(time),8000)
        
     }
    
    
    
    
    return ( 
        <div className={x}  >
            <div className="list"  >
            <div className="item" >
                    <img src={images[imgIndex]} style={styleNext}
                        
                       alt="" />
                    <div className="content">
                        <div className="author" style={styleContent}>Savage</div>
                        <div className="title" style={styleContent}>DESIGN SLIDE</div>
                        <div className="topic" style={styleContent}>iConnect</div>
                        <div className="des" style={styleContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, corporis eum et aspernatur officia a, perspiciatis dolores reiciendis harum quam illo. Iure voluptate doloremque pariatur. Natus sunt eveniet distinctio ex.</div>
                        <div className="buttons" style={styleContent}>
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

            </div>

            
            {/* <div className="thumbnail">
                
                {ItemsP.map((item,i)=>{
                    return <CfcP key={i} id={item.id}
                    img={item.img} title={item.title}
                    des={item.des}/>
                })}
                
        
            </div>   */}
            
            <div className="arrows">
                <button onClick={left}  ><GrFormPrevious /> </button>
                <button onClick={right}><GrFormNext /></button>
            </div>

            <div className='time'
            style={{
                animation: v ? `runningTime ${animationT}s linear 1 forwards` :''
                
            }}>
        
            </div>
            
        </div>
     );
     
}

export default Carousel;