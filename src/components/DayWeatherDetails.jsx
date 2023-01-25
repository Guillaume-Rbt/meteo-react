import React, { useEffect } from "react";
import { useSpring, animated, easings } from '@react-spring/web'

export default function DayWeatherDetails(props) {

    const [springs, api] = useSpring(() => ({
        from: { opacity: 0, display: 'none' },
        config: {
            duration: 300,
            easing: easings.easeInCirc
        }
    }))



    useEffect(() => {
        if (props.isVisible) {
            api.start({
                from: {
                    opacity: 0,
                    display: 'block',
                },
                to: {
                    opacity: 1,
                    display: 'block'
                },
            })
        } else {
            api.start({
                from: {
                    opacity: 1,
                },
                to: {
                    opacity: 0,
                },
            })

            let timer = setTimeout(() => {
                let details = document.querySelectorAll('.details-weather')

                details.forEach((item) => item.style.display = 'none');
                clearTimeout(timer)

            }, 400
            )
        }
    }, [props.isVisible])



    const onCloseDetails = () => {
        props.onCloseDetails(false, props.DetailsData.data, props.DetailsData.date)
    }



    return (<div>
        <animated.div className='details-weather' style={{...springs}}>
        <span onClick={onCloseDetails} className="close-icon material-symbols-outlined"> close </span> <p>{props.DetailsData.date}</p>
        
        </animated.div>
    </div>)
}