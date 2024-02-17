const nextBtn = (type) =>{
    
    
    // let next = document.getElementById('next');
    // let prev = document.getElementById('prev');
    let carousel = document.querySelector('.carousel');
    let list = document.querySelector('.carousel .list');
    let thumbnail = document.querySelector('.carousel .thumbnail');
    // let thumbnailItems = thumbnail.querySelectorAll('.carousel .list .item');

    
    
    
    
    
    
    
    
        let item = document.querySelectorAll('.carousel .list .item');
        let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
        
        if(type === 'next'){
            list.append(item[0]);
            thumbnail.appendChild(itemThumbnail[0]);
            carousel.classList.add('next');
        }
        // else{
            //     list.prepend(item[item.length - 1]);
            //     thumbnail.prepend(thumbnail[thumbnailItems.length - 1]);
            //     carousel.classList.add('prev');
            // }
            
        
    }

export default nextBtn;