import { useEffect, useState, WheelEvent } from "react";
import ContainerProps from "../../types/ContainerProps";

function Container({children, innerRef}: ContainerProps) {
    
    const [sections, setSections] = useState<Array<HTMLDivElement | HTMLElement>>([])
    const [actualIndex, setActualIndex] = useState(0)
    const [isOnDelay, setIsOnDelay] = useState(false)

    // solution based on https://stackoverflow.com/a/44572049/20374422
    function handleScrollDirection(event: WheelEvent<HTMLElement>) {
      if (scrollDirectionIsUp(event)) {
        goToPreviousSection()
      } else {
        goToNextSection()
      }
    }

    useEffect(() => {
        if (!innerRef.current) {
            return
        }
        const sections = innerRef.current.querySelectorAll('section')
        setSections(Array.from(sections))
    }, [])

    useEffect(() => {
        setTimeout(()=> {
            setIsOnDelay(false)
        }, 200)
    }, [isOnDelay])
    
    function scrollDirectionIsUp(event: WheelEvent<HTMLElement>) {
        return event.deltaY < 0;
    }

    function goToNextSection() {
        goToSection(actualIndex+1)
    }

    function goToPreviousSection() {
        goToSection(actualIndex-1)
    }

    function goToSection(index: number) {
        if (!((index < sections.length) && (index >= 0)) || isOnDelay) {
            return
        }
        setActualIndex(index)
        smoothScroll(sections[index].offsetTop)
        setIsOnDelay(true)
    }

    // isMotionReduced and smoothScroll are mostly from https://github.com/whizkydee/olaolu.dev/
    function isMotionReduced() {
        return matchMedia('(prefers-reduced-motion: reduce)').matches
    }

    function smoothScroll(scrollTargetY: number, speed = 1000) {
        let currentTime = 0
        const scrollY = document.documentElement.scrollTop
        speed = isMotionReduced() ? speed * 3 : speed

        // min time 0.1 seconds
        // max time 0.8 seconds
        const time = Math.max(
          0.1,
          Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8)
        )
      
        // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
        const easeInOutExpo = (pos: number) => {
            if(pos===0) return 0;
            if(pos===1) return 1;
            if((pos/=0.5) < 1) return 0.5 * Math.pow(2,10 * (pos-1));
            return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
        }

        function runAnimation() {
          currentTime += 1 / 60
                
          let animationFrame = currentTime / time
          let easedValue = easeInOutExpo(animationFrame)
      
          if (animationFrame < 1) {
            requestAnimationFrame(runAnimation)
      
            scrollTo(0, scrollY + (scrollTargetY - scrollY) * easedValue)
          } else {
            scrollTo(0, scrollTargetY)
          }
        }
      
        runAnimation()
      }
    

    return (
        <main style={{
            height: '100vh',
            width: '100wh',
            margin: '0px',
        }} onWheel={handleScrollDirection} ref={innerRef}>
            {children}
        </main>
    )
}

export default Container