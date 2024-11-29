import Slider from 'react-slick'
import './Footer.scss'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
export default function Footer(_: {
    subtitle1: string,
    phone: string,
    instagramL: string,
    facebookL: string,
    linkedinL: string,
    lvrLink: string,
    subtitle2: string,
    slider: {
        image: string,
        title: string,
        description: string,
        link: string
    }[]

}) {
    const { subtitle1, facebookL, instagramL, linkedinL, lvrLink, phone, slider, subtitle2 } = _
    const slideSettings = {
        className: "sliderFooter",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        dots: false,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        autoplay: true,
    };
    return (
        <div className='footer'>
            <div className="logo">
                <img src="/logo.png" alt="logo" />
                <h1>2.8</h1>
                <h2>DE<br />SI<br />GN</h2>
            </div>
            <div className="contact">
                <h2>{subtitle1}</h2>
                <p>{phone}</p>
                <div className="social">
                    {instagramL != "" ? <a href="#"><FaInstagram /></a> : ""}
                    {facebookL != "" ? <a href="#"><FaFacebook /></a> : ""}
                    {linkedinL != "" ? <a href="#"><FaLinkedin /></a> : ""}
                </div>
                <a href={lvrLink}><img src="/lrv.png" alt="libro de reclamaciones" /></a>
            </div>
            <div className="news">
                <h2>{subtitle2}</h2>
                <Slider {...slideSettings}>
                    {slider.map((e, i) => {
                        return (
                            <a key={`card-${i}`} className="card" href='#'>
                                <img src={e.image} alt="news image" />
                                <div className="description">
                                    <h3>{e.title}</h3>
                                    <p>{e.description}</p>
                                </div>
                            </a>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
