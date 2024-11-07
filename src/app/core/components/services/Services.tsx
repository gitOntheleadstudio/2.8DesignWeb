import Slider from 'react-slick'
import './Services.scss'
export default function Services(_: {
    headline: string,
    description: string,
    slider: {
        name: string,
        image: string
    }[]
}) {
    const { headline, description, slider } = _
    const slideSettings = {
        className: "sliderServices",
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        //slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        pauseOnHover: false
    };
    return (
        <div className='services'>
            <div className="header-bkg">
                <img src='https://lh3.googleusercontent.com/d/1NM0jkNeA8N5MiMMUjO7lnP28ntfwlN_h=w1000?authuser=0' alt="" />
            </div>
            <div className="header">
                <h1 className='text-focus'>{headline}</h1>
                <p>{description}</p>
            </div>
            <div className='slide-box'>
                <Slider {...slideSettings}>
                    {
                        slider.map((e, i) => {
                            return (
                                <div key={`service-${i}`} className='service'>
                                    <img src={e.image} alt="" />
                                    <div className="text">
                                        <h2>{e.name}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}
