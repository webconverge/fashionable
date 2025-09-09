


/*

    --addtocard--

*/

export default function addtocart(){

    const productItems = document.querySelectorAll(".product-item")

    const addtocart = document.querySelector(".addtocart")

    const addtocartBtn = document.querySelector(".addtocart-btn")

    addtocart.addEventListener("click", e => {

        if(e.target == addtocart)  addtocart.classList.remove("addtocart-visible")
    })

    addtocartBtn.addEventListener("click", ()=>{

        addtocart.classList.remove("addtocart-visible")
    })

    productItems.forEach(item => {

        item.addEventListener("click", ()=>{

            addtocart.classList.add("addtocart-visible")
        })
    })

}




