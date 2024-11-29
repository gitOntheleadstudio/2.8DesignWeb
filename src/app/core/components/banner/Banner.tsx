import { useEffect, useRef } from 'react'
import './Banner.scss'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import Slider from 'react-slick'
export default function Banner(_: {
    subheader: string,
    slider: string[]
}) {
    const { subheader, slider } = _
    const slidersRef = useRef<Array<Slider>>([]);
    useEffect(() => {
        for (let i = 0; i < 6; i++) {
            slidersRef.current[i].slickGoTo(i, true)
        }
    }, [])
    const slideSettings = {
        className: "sliderBanner",
        infinite: true,
        speed: 500,
        dots: false,
        fade: true,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnHover: false
    };
    return (
        <div className='wrapper'>
            <div className="buttons">
                <button className='b r' onClick={() => {
                    for (let i = 0; i < 6; i++) {
                        slidersRef.current[i].slickNext()
                    }
                }}><IoMdArrowDropright /></button>
                <button className='b l' onClick={() => {
                    for (let i = 0; i < 6; i++) {
                        slidersRef.current[i].slickPrev()
                    }
                }}><IoMdArrowDropleft /></button>
            </div>
            <div className='header'>
                <div className="header-top">
                    <h1 className='text-focus'>2.8</h1>
                    <h2 className='text-focus'>DE<br />SI<br />NG</h2>
                </div>
                <h2>{subheader}</h2>
            </div>
            <div className='main'>
                <div className='imgCont'>
                    <Slider {...slideSettings} ref={slider => (slidersRef.current[0] = slider!)}>
                        {slider.map((e, i) => {
                            return <img key={`img${-i}`} className='curr' src={e} />
                        })}
                    </Slider>
                </div>
            </div>
            <div className='one'>
                <Slider {...slideSettings} ref={slider => (slidersRef.current[1] = slider!)}>
                    {slider.map((e, i) => {
                        return <img key={`img${-i}`} className='curr' src={e} />
                    })}
                </Slider>
            </div>
            <div className='two'>
                <Slider {...slideSettings} ref={slider => (slidersRef.current[2] = slider!)}>
                    {slider.map((e, i) => {
                        return <img key={`img${-i}`} className='curr' src={e} />
                    })}
                </Slider>
            </div>
            <div className='three'>
                <div className='imgCont'>
                    <Slider {...slideSettings} ref={slider => (slidersRef.current[3] = slider!)}>
                        {slider.map((e, i) => {
                            return <img key={`img${-i}`} className='curr' src={e} />
                        })}
                    </Slider>
                </div>
            </div>
            <div className='four'>
                <Slider {...slideSettings} ref={slider => (slidersRef.current[4] = slider!)}>
                    {slider.map((e, i) => {
                        return <img key={`img${-i}`} className='curr' src={e} />
                    })}
                </Slider>
            </div>
            <div className='five'>
                <Slider {...slideSettings} ref={slider => (slidersRef.current[5] = slider!)}>
                    {slider.map((e, i) => {
                        return <img key={`img${-i}`} className='curr' src={e} />
                    })}
                </Slider>
            </div>
            <div className='six'>
                <div className='imgCont'>
                    <Slider {...slideSettings} ref={slider => (slidersRef.current[6] = slider!)}>
                        {slider.map((e, i) => {
                            return <img key={`img${-i}`} className='curr' src={e} />
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}