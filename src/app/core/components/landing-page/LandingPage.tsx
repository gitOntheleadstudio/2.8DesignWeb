import './LandingPage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from '../banner/Banner';
import Services from '../services/Services';
import Portfolio from '../portfolio/Portfolio';
import Footer from '../footer/Footer';
import db from '../../firebase/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ComponentProps, useEffect, useState } from 'react';
import { bannerConv, footerConv, iPages, portfolioConv, servicesConv } from '../../Utils/Interfaces';
import Utils from '../../../shared/Utils/Utils';

export default function LandingPage() {
  const qs = collection(db, "services")
  const qp = collection(db, "pages")
  const [loaded, setLoaded] = useState(false)
  const [banner, setBanner] = useState<ComponentProps<typeof Banner>>()
  const [services, setServices] = useState<ComponentProps<typeof Services>>()
  const [portfolio, setPortfolio] = useState<ComponentProps<typeof Portfolio>>()
  const [footer, setFooter] = useState<ComponentProps<typeof Footer>>()

  const fetchData = async () => {
    let pages = await getDocs(qp).then(async (response) => {
      return response.docs[0].data() as iPages
    })

    let services = await getDocs(qs).then(async (response) => {
      return await Promise.all(response.docs.map(async (service) => {
        let serviceData = service.data()
        let projects = (await getDocs((collection(db, "services", service.id, "proyectos")))).docs.map((project) => project.data())
        serviceData.proyectos = projects
        return serviceData
      }))
    })

    pages.portfolio = services as any
    return pages
    
  }

  useEffect(() => {
    fetchData().then((data) => {
      setBanner(bannerConv(data))
      setServices(servicesConv(data))
      setPortfolio(portfolioConv(data))
      setFooter(footerConv(data))
    }).then(() => setLoaded(true))
  }, [])

  return (
    <div>
      <div className="lines">
        <div className='line l1'></div>
        <div className='line l2'></div>
      </div>
      {Utils.asyncComponent(Banner, banner, loaded)}
      {Utils.asyncComponent(Services, services, loaded)}
      {Utils.asyncComponent(Portfolio, portfolio, loaded)}
      {Utils.asyncComponent(Footer, footer, loaded)}
    </div>
  )
}
