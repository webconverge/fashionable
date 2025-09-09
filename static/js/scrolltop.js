

/*

    --srolltop--

*/


export default function scrolltop(){

    const scrolltotop = document.querySelector(".scrolltop")

    window.addEventListener("scroll", ()=>{

        if(window.scrollY > 800){
            
            scrolltotop.style.display = "initial"
        }
        else{
         
            scrolltotop.style.display = "none"
        }

    })
}

