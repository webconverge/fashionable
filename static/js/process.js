


/*

    --process--

*/

export default function process(){

    const processImgs = document.querySelectorAll(".process-img")

    const resizeScreen = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 1000){

                    processImgs.forEach(item => {

                        item.classList.remove("process-img-mobile")
                    })
                }
                else{

                    processImgs.forEach(item => {

                        item.classList.add("process-img-mobile")
                    })
                }
            }
        })
    })

    resizeScreen.observe(document.body)
}

