import Slider from 'react-slick';
import './Portfolio.scss'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
export default function Portfolio(_: {
  services: {
    name: string,
    detail: string,
    portfolio: {
      projectName: string,
      place: string,
      projectImg: string,
      bf: {
        img: string,
        before: boolean
      }[],
      videos: string[]
    }[]
  }[]
}) {
  const services = _.services
  const [servicePivot, setServicePivot] = useState(0)
  const [projectPivot, setProjectPivot] = useState(0)
  const project = services[servicePivot].portfolio[projectPivot]
  const service = services[servicePivot]
  useEffect(() => {
    //arrayComplete(service.portfolio, 4)
  }, [])

  const onClickHandler = (num: number) => {
    setProjectPivot(0)
    if (num === services.length) return 0
    else if (num === -1) return services.length - 1
    else return num
  }
  const arrayComplete = (array: Array<any>, size: number) => {
    let res = []
    for (let i = 0; i < array.length % size; i++)
      array.push(array[i])
    for (let i = 0; i < array.length; i += size)
      res.push(array.slice(i, i + size));
    return res
  }
  const slideSettings = {
    className: "sliderPortfolio",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dots: false,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    autoplay: true,
    fade: true,
    arrows: false
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
        <h2>{project.projectName}</h2>
        <p className='text-focus'>{project.place}</p>
      </div>

      <div className="slider-box">
        <Slider {...slideSettings} >
          {
            arrayComplete(service.portfolio, 4).map((e, i) => {
              return (
                <div key={`d${i}`} className='slide-cont'>
                  <div key={`s-${i}`} className='slides'>
                    {
                      e.map((f, j) => {
                        return (
                          <img key={`img-${j}`} className={`slide s${j}`} src={f.projectImg} alt="project image" />
                        )
                      })
                    }
                  </div>
                  <div key={`b-${i}`} className='buttons' >
                    {
                      e.map((_, k) => {
                        return (
                          <button key={`b-${k}`} className={`button b${k}`} onClick={() => setProjectPivot((i * 4) + k)} />
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
      <button className="arrow left">
        <FaArrowLeft onClick={() => { setServicePivot(onClickHandler(servicePivot - 1)) }} />
      </button>
      <button className="arrow rigth">
        <FaArrowRight onClick={() => { setServicePivot(onClickHandler(servicePivot + 1)) }} />
      </button>
      <div className="subheader">
        <h1>{service.name}</h1>
        <h2>{service.detail}</h2>
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
