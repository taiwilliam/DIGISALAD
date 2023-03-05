export function usePublicFunction() {

    const scrollToId = (ID) => {
        const targetDom = document.getElementById(ID)
        const targetPos = targetDom.offsetTop

        window.scrollTo({
            top: targetPos,
            left: 0,
            behavior: 'smooth'
        })
    }

    const fadeIn = () => {
        const fadeInDoms = document.querySelectorAll('.od_fadeIn')
        const thisPos = window.scrollY;
        const windowHeight = window.outerHeight

        fadeInDoms.forEach((el) => {
            let targetPos = el.offsetTop
            
            if(thisPos + ( windowHeight / 1.5 ) > targetPos){
                el.classList.add("active")
            }
        })
    }

    // 節流函數
    function debounce(func, delay = 100) {
        let timer = null;

        return () => {
            let context = this;
            let args = arguments;

            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(context, args);
            }, delay)
        }
    }

    return { scrollToId, fadeIn, debounce }
}