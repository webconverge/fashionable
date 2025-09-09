

/*

    --header--

*/

export default function header(){

    const headerContact = document.querySelector(".header-contact")

    const headerMenuWrapper = document.querySelector(".header-menu-wrapper")

    const menuOpenBtn = document.querySelector(".menu-open-btn")

    const menuCloseBtn = document.querySelector(".menu-close-btn")

    const cartOpenBtn = document.querySelector(".cart-open-btn")

    const cart = document.querySelector(".cart")

    const cartCloseBtn = document.querySelector(".cart-close-btn")

    const overlay = document.querySelector(".overlay")

    const headerMenuItems = document.querySelectorAll(".header-menu-item")

    const resizeScreen = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 800){

                    headerContact.classList.remove("header-contact-mobile")
                }
                else{

                    headerContact.classList.add("header-contact-mobile")
                }
            }
        })
    })

    resizeScreen.observe(document.body)

    menuOpenBtn.addEventListener("click", ()=>{

        headerMenuWrapper.classList.add("header-menu-wrapper-opened")
    })

    menuCloseBtn.addEventListener("click", ()=>{

        headerMenuWrapper.classList.remove("header-menu-wrapper-opened")
    })

    cartOpenBtn.addEventListener("click", ()=>{

        cart.classList.add("cart-opened")

        overlay.classList.add("overlay-cart-opened")
    })

    cartCloseBtn.addEventListener("click", ()=>{

        cart.classList.remove("cart-opened")

        overlay.classList.remove("overlay-cart-opened")
    })

    overlay.addEventListener("click", e => {

        if(e.target == overlay){

            cart.classList.remove("cart-opened")

            overlay.classList.remove("overlay-cart-opened")
        }
    })

    headerMenuItems.forEach(item => {

        item.addEventListener("click", ()=>{

            headerMenuWrapper.classList.remove("header-menu-wrapper-opened")
        })
    })
}

