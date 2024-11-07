import './LandingPage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from '../banner/Banner';
import Services from '../services/Services';

export default function LandingPage() {
  const banner = {
    subheader: "Arquitectura, diseño y construcción",
    slider:[
      'https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1633970/pexels-photo-1633970.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1487154/pexels-photo-1487154.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/52062/pexels-photo-52062.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://lh3.googleusercontent.com/d/1NM0jkNeA8N5MiMMUjO7lnP28ntfwlN_h=w1000?authuser=0'
    ]
  }
  const services = {
    headline: 'Nosotros',
    description: 'Somos un estudio de arquitectura dedicado al desarrollo de: Planeamiento urbano, arquitectura, diseño de interior, construcción y acabados en general en todas las especialidades.',
    slider: [
      {
        name: 'Remodelaciones y ampliaciones',
        image: 'https://lh3.googleusercontent.com/d/1NM0jkNeA8N5MiMMUjO7lnP28ntfwlN_h=w1000?authuser=0'
      },
      {
        name: 'Remodelaciones y ampliaciones',
        image: 'https://lh3.googleusercontent.com/d/1NM0jkNeA8N5MiMMUjO7lnP28ntfwlN_h=w1000?authuser=0'
      },
      {
        name: 'Remodelaciones y ampliaciones',
        image: 'https://lh3.googleusercontent.com/d/1NM0jkNeA8N5MiMMUjO7lnP28ntfwlN_h=w1000?authuser=0'
      },
      {
        name: 'Remodelaciones y ampliaciones',
        image: 'https://lh3.googleusercontent.com/d/1NM0jkNeA8N5MiMMUjO7lnP28ntfwlN_h=w1000?authuser=0'
      },
      {
        name: 'Remodelaciones y ampliaciones',
        image: 'https://lh3.googleusercontent.com/d/1NM0jkNeA8N5MiMMUjO7lnP28ntfwlN_h=w1000?authuser=0'
      },
      {
        name: 'Remodelaciones y ampliaciones',
        image: 'https://lh3.googleusercontent.com/d/1NM0jkNeA8N5MiMMUjO7lnP28ntfwlN_h=w1000?authuser=0'
      },
      {
        name: 'Remodelaciones y ampliaciones',
        image: 'https://lh3.googleusercontent.com/d/1NM0jkNeA8N5MiMMUjO7lnP28ntfwlN_h=w1000?authuser=0'
      },
      {
        name: 'Remodelaciones y ampliaciones',
        image: 'https://lh3.googleusercontent.com/d/1NM0jkNeA8N5MiMMUjO7lnP28ntfwlN_h=w1000?authuser=0'
      },
      {
        name: 'Remodelaciones y ampliaciones',
        image: 'https://lh3.googleusercontent.com/d/1NM0jkNeA8N5MiMMUjO7lnP28ntfwlN_h=w1000?authuser=0'
      }
    ]
  }
  return (
    <div>
      <Banner {...banner}></Banner>
      <Services {...services}></Services>
    </div>
  )
}
