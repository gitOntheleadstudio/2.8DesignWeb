import Slider from 'react-slick';
import './Portfolio.scss'
import { useEffect, useState } from 'react';
export default function Portfolio(_: {
  proyects: {
    projectName: string,
    place: string,
    projectImg: string,
    bf: {
      img: string,
      before: boolean
    }[],
    videos: string[],
    servicios: string[]
  }[]
}) {
  const [projectPivot, setProjectPivot] = useState(0)
  const project = _.proyects[projectPivot]
  useEffect(() => {
    //arrayComplete(service.portfolio, 4)
  }, [])
  const slideSettings = {
    className: "sliderPortfolio",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dots: false,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    autoplay: true,
    fade: true,
    arrows: false,
    afterChange: (current: number) => setProjectPivot(current)
  };
  return (
    <div className="portfolio-box">
      <div className="bkg">
        <img src={project.projectImg} alt="bkg image" />
      </div>
      <div className="videos">
        <video autoPlay playsInline muted loop >
          <source src={project.videos[0]} />
        </video>
        <video autoPlay playsInline muted loop >
          <source src={project.videos[1]} />
        </video>
      </div>
      <div className="header">
        <h2 className='text-focus'>Servicios Prestados</h2>
        <div className="services">
          {project.servicios.map((e, i) => {
            return (
              <p key={`service-${i}`}>- {e}</p>
            )
          })}
        </div>
      </div>

      <div className="slider-box">
        <Slider {...slideSettings} >
          {
            _.proyects.map((e, i) => {
              return (
                <div className="slide-cont" key={`slide-${i}`}>
                  <div className="slide">
                    <img src={e.projectImg} alt="bkg image" />
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
      <div className="subheader">
        <h1>{project.projectName}</h1>
        <h2 className='text-focus'>{project.place}</h2>
      </div>
      <div className="bf-container">
        {[...Array(6)].map((_, i) => {
          let el = project.bf[i]
          return (
            <div key={`bf-${i}`} className={`bf-box bf${i}`}>
              <div className='bf-desc'>
                <p>{el.before === true ? 'Antes' : 'Despues'}</p>
              </div>
              <img src={el.img} alt="before after image" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
