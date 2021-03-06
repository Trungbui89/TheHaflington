function aboutSlideSideEffect() {

    if(document.querySelector('.about') !== null) {

        const btnLeft = document.querySelector('.slide-btn-left')
        const btnRight = document.querySelector('.slide-btn-right')

        let slideItems = document.querySelectorAll('.slide-card-items')
        let infoBorder = document.querySelector('.silde-info-body')
        let slideInfos = document.querySelectorAll('.silde-info-item')
    
        btnRight.addEventListener('click', turnRight)
        btnLeft.addEventListener('click', turnLeft)
    
        function disableBtn() {
            btnLeft.setAttributeNode(document.createAttribute('disabled'))
            btnRight.setAttributeNode(document.createAttribute('disabled'))
            setTimeout(() => {
                btnLeft.removeAttribute('disabled')
                btnRight.removeAttribute('disabled')
            },800)
        }
    
        function infoBorderFade() {
            infoBorder.classList.remove('active')
            setTimeout(() => {infoBorder.classList.add('active')},100)
        }
    
        function turnRight() {

            if(document.querySelector('.page-enter-done') !== null) {
                slideItems = document.querySelectorAll('.page-enter-done .slide-card-items')
                infoBorder = document.querySelector('.page-enter-done .silde-info-body')
                slideInfos = document.querySelectorAll('.page-enter-done .silde-info-item')
            } else {
                slideItems = document.querySelectorAll('.slide-card-items')
                infoBorder = document.querySelector('.silde-info-body')
                slideInfos = document.querySelectorAll('.silde-info-item')
            }

            const slideLenght = slideItems.length
            disableBtn()
            infoBorderFade()
            
    
            for(let i = 0; i < slideLenght;) {
                    
                if(slideItems[i].className === 'slide-card-items active') {
                    slideItems[i].className = 'slide-card-items next'
                    slideInfos[i].classList.remove('active')
    
    
                    if(slideLenght-1 === i) {
                        slideItems[0].className = 'slide-card-items preview'
                        slideItems[i-1].className = 'slide-card-items active'
                        slideInfos[i-1].classList.add('active')
                        break
    
                    } else if(i === 0) {
                        slideItems[i+1].className = 'slide-card-items preview'
                        slideItems[slideLenght-1].className = 'slide-card-items active'
                        slideInfos[slideLenght-1].classList.add('active')
                        break
    
                    } else {
                        slideItems[i+1].className = 'slide-card-items preview'
                        slideItems[i-1].className = 'slide-card-items active'
                        slideInfos[i-1].classList.add('active')
                        break
                    }
                } else i++
            }
        }
    
        function turnLeft() {

            if(document.querySelector('.page-enter-done') !== null) {
                slideItems = document.querySelectorAll('.page-enter-done .slide-card-items')
                infoBorder = document.querySelector('.page-enter-done .silde-info-body')
                slideInfos = document.querySelectorAll('.page-enter-done .silde-info-item')
            } else {
                slideItems = document.querySelectorAll('.slide-card-items')
                infoBorder = document.querySelector('.silde-info-body')
                slideInfos = document.querySelectorAll('.silde-info-item')
            }

            const slideLenght = slideItems.length
            disableBtn()
            infoBorderFade()
            
            for(let i = 0; i < slideLenght;) {
                if(slideItems[i].className === 'slide-card-items active') {
                    slideItems[i].className = 'slide-card-items preview'
                    slideInfos[i].classList.remove('active')
    
    
                    if(slideLenght-1 === i) {
                        slideItems[0].className = 'slide-card-items active'
                        slideItems[i-1].className = 'slide-card-items next'
                        slideInfos[0].classList.add('active')
                        break
    
                    } else if(i === 0) {
                        slideItems[i+1].className = 'slide-card-items active'
                        slideItems[slideLenght-1].className = 'slide-card-items next'
                        slideInfos[i+1].classList.add('active')
                        break
    
                    } else {
                        slideItems[i+1].className = 'slide-card-items active'
                        slideItems[i-1].className = 'slide-card-items next'
                        slideInfos[i+1].classList.add('active')
                        break
                    }
                } else i++
            }
        }
    }

}

export default aboutSlideSideEffect