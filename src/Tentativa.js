    const Tentativa = () =>{
    
    
    let next = document.getElementById('next');
    // let prev = document.getElementById('prev');
    let carousel = document.querySelector('.carousel');
    let list = document.querySelector('.carousel .list');
    let thumbnail = document.querySelector('.carousel .thumbnail');
    // let thumbnailItems = thumbnail.querySelectorAll('.carousel .list .item');

    
    
    
    next.onclick = function vaifdp(){
        nextBtn('next')
    }
    
    
    function nextBtn(type){
        let item = document.querySelectorAll('.carousel .list .item');
        let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
        
        if(type === 'next'){
            list.append(item[0]);
            thumbnail.append(itemThumbnail[0]);
            carousel.classList.add('next');
        }
        
            
        }
    }

export default Tentativa;