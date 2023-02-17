import React, { useEffect, useState } from "react";
import { useSpring, animated } from '@react-spring/web'

export default function DayWeatherDetails(props) {

    const [springs, api] = useSpring(() => ({
        from: { opacity: 0, display: 'none' },
        config: {
            duration: 300
        }
    }))

    const [windDir, setDir] = useState("")


    const WindDirTab = {
        1:"N",
        2:"NNE",
        3:"NE",
        4:"ENE",
        5:"E",
        6:"ESE",
        7:"SE",
        8:"SSE",
        9:"S",
        10:"SSW",
        11:"SW",
        12:"WSW",
        13:"W",
        14:"WNW",
        15:"NW",
        16:"NNW",
        17:"N",
    }



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
                let details = document.querySelectorAll('.overlay')

                details.forEach((item) => item.style.display = 'none');
                clearTimeout(timer)

            }, 400
            )
        }
    }, [props.isVisible, api])

    useEffect(() => {

        let dirDeg = props.DetailsData.data.dirwind10m;

        let dirMod = dirDeg % 360;

        let index = Math.floor(dirMod / 22.5 + 1)
        
        setDir(WindDirTab[index])
    
    },  [props.DetailsData])



    const onCloseDetails = () => {
        props.onCloseDetails(false, props.DetailsData.data, props.DetailsData.date)
    }



    return (
        <animated.div className='overlay'  style={{...springs}}>
            <div className="cards details-weather">
                            <header className="header-details"><p>{props.DetailsData.date}</p> <span onClick={onCloseDetails} className="close-icon material-symbols-outlined"> close </span> </header>
                            <p>Vent moyen : { props.DetailsData.data.wind10m } km/h direction : {windDir}</p>
                            <p>Rafales : { props.DetailsData.data.gust10m } km/h</p>
                            <p>Probabilité de pluie : { props.DetailsData.data.probarain } %</p>
                            <p>Cumul de pluie : { props.DetailsData.data.rr10 } mm</p>
                            
            </div>
        
        </animated.div>
    )
}