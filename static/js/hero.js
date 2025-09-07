

/*

    --hero--

*/

export default function hero(){

    const heroNext = document.querySelector(".hero-next")

    const heroPrev = document.querySelector(".hero-prev")

    const heroLeds = document.querySelectorAll(".hero-led")

    const heroImgs = document.querySelectorAll(".hero-img")

    let currentImgIndex = 0

    function init(){

        heroImgs.forEach((img, index) => {

            img.style.left = index * 100 + "%"

            img.style.transition = "left 0.5s"

        })
    }

    function farRight(){

        let data = {

            pos:null,

            img:null 
        }

        heroImgs.forEach(img => {

            const pos = +img.style.left.split("%")[0]

            if(!data.pos && !data.img){

                data.pos = pos

                data.img = img
            }
            else if(pos > data.pos){

                data.pos = pos

                data.img = img
            }
        })

        return data
    }

    function farLeft(){

        let data = {

            pos:null,

            img:null 
        }

        heroImgs.forEach(img => {

            const pos = +img.style.left.split("%")[0]

            if(!data.pos && !data.img){

                data.pos = pos

                data.img = img
            }
            else if(pos < data.pos){

                data.pos = pos

                data.img = img
            }

        })

        return data
    }

    function prev(steps){

        // ->

        heroImgs.forEach(img => {

            img.style.transition = ""
        })

        for(let i=0; i<steps; i++){

            const farRightImg = farRight().img

            const farLeftPos = farLeft().pos

            farRightImg.style.left = farLeftPos - 100 + "%"
        }

        setTimeout(()=>{

            heroImgs.forEach(img => {

                img.style.transition = "left 0.5s"
            })

            heroImgs.forEach(img => {

                const pos = +img.style.left.split("%")[0]

                img.style.left = pos + (steps * 100) + "%"
            })

            heroLeds[currentImgIndex].classList.remove("hero-led-selected")

            for(let i=0; i<steps; i++){

                if(currentImgIndex == 0){

                    currentImgIndex = heroLeds.length - 1
                }
                else{

                    currentImgIndex--
                }
            }

            heroLeds[currentImgIndex].classList.add("hero-led-selected")

        }, 100)

    }

    function next(steps){

        // <-

        heroImgs.forEach(img => {

            const pos = +img.style.left.split("%")[0]

            img.style.left = pos - (steps * 100) + "%"  
        })


        heroLeds[currentImgIndex].classList.remove("hero-led-selected")

        for(let i=0; i<steps; i++){
            
            if(currentImgIndex == heroLeds.length - 1){

                currentImgIndex = 0
            }
            else{

                currentImgIndex++
            }
        }

        heroLeds[currentImgIndex].classList.add("hero-led-selected")


        setTimeout(() => {

            heroImgs.forEach(img => {

                img.style.transition = ""
            })

            for(let i=0; i<steps; i++){

                const farLeftImg = farLeft().img

                const farRightPos = farRight().pos
                
                farLeftImg.style.left = farRightPos + 100 + "%" 
            }

            setTimeout(()=>{

                heroImgs.forEach(img => {

                    img.style.transition = "left 0.5s"
                })

            }, 100)

        }, 600)

    }

    heroPrev.addEventListener("click", ()=>{

        prev(1)
    })

    heroNext.addEventListener("click", ()=>{

        next(1)
    })

    heroLeds.forEach((led, index) =>{

        led.addEventListener("click", ()=>{

            if(index > currentImgIndex){

                next(index - currentImgIndex)
            }
            else if(index < currentImgIndex){

                prev(currentImgIndex - index)
            }
        })

    })

    init()

    heroLeds[currentImgIndex].classList.add("hero-led-selected")



    // ----



    const heroWrapper = document.querySelector(".hero-wrapper")

    const heroTitle = document.querySelector(".hero-title")

    const heroIntro = document.querySelector(".hero-intro")

    const resizeScreen = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 800){

                    heroWrapper.classList.remove("hero-wrapper-mobile")

                    heroTitle.classList.remove("hero-title-mobile")

                    heroIntro.classList.remove("hero-intro-mobile")
                }
                else{

                    heroWrapper.classList.add("hero-wrapper-mobile")

                    heroTitle.classList.add("hero-title-mobile")

                    heroIntro.classList.add("hero-intro-mobile")
                }
            }
        })
    })

    resizeScreen.observe(document.body)

}


