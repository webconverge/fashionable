


/*

    --product--

*/

export default function product(){

    const productPrev = document.querySelector(".product-prev")

    const productNext = document.querySelector(".product-next")

    const productItems = document.querySelectorAll(".product-item")

    let ratio = 3

    function init(){

        productItems.forEach((item, index) => {

            item.style.width = 100 / ratio + "%"

            item.style.left = index * 100 / ratio + "%"

            item.style.transition = "left 0.5s"
        })
    }

    function farRight(){

        let el = null

        productItems.forEach(item => {

            const pos = +item.style.left.split("%")[0]

            if(!el){

                el = item
            }
            else{

                const p = +el.style.left.split("%")[0]

                if(pos > p){

                    el = item
                }
            }
        })

        return el
    }

    function farLeft(){
        
        let el = null

        productItems.forEach(item => {

            const pos = +item.style.left.split("%")[0]

            if(!el){

                el = item
            }
            else{

                const p = +el.style.left.split("%")[0]

                if(pos < p){

                    el = item
                }
            }
        })

        return el
    }

    function prev(){

        // ->
        const farRightEl = farRight()

        farRightEl.style.transition = ""

        farRightEl.style.left = - (100 / ratio) + "%"

        setTimeout(()=>{

            farRightEl.style.transition = "left 0.5s"

            productItems.forEach(item => {

                const pos = +item.style.left.split("%")[0]

                item.style.left = pos + (100 / ratio) + "%"

            })

        }, 100)

    }

    function next(){

        // <-
        productItems.forEach(item => {

            const pos = +item.style.left.split("%")[0]

            item.style.left = pos - (100 / ratio) + "%"
        })

        setTimeout(()=>{

            const farLeftEl = farLeft()

            farLeftEl.style.transition = ""

            farLeftEl.style.left = 100 / ratio * (productItems.length - 1) + "%"

            setTimeout(()=>{

                farLeftEl.style.transition = "left 0.5s"

            }, 100)

        }, 600)
    }

    const resizeScreen = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 900){

                    ratio = 3

                    init()
                }
                else if(entry.target.offsetWidth > 650 && entry.target.offsetWidth < 900){

                    ratio = 2

                    init()
                }
                else{

                    ratio = 1

                    init()
                }
            }
        })
    })

    
    resizeScreen.observe(document.body)


    productPrev.addEventListener("click", prev)


    productNext.addEventListener("click", next)

}

