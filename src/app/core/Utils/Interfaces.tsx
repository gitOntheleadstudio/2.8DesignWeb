import Banner from "../components/banner/Banner"
import Footer from "../components/footer/Footer"
import Portfolio from "../components/portfolio/Portfolio"
import Services from "../components/services/Services"

export type iPages = {
    banner: {
        subtitulo: string,
        slider: string[]
    },
    servicios: {
        titulo: string,
        descripci_n: string,
        slider: {
            nombre_servicio: string,
            imagen: string,
            detalle?: string
        }[]
    },
    portfolio: {
        proyects: {
            nombre: string,
            imagen_principal: string,
            ubicaci_n: string,
            videos: string[]
            imagenes: {
                antes_despues: "Antes" | "Despues",
                imagen: string
            }[],
            servicios: string[]
        }[]
    },

    pie_de_pagina: {
        subtitulo_1: string,
        subtitulo_2: string,
        nombre_persona: string,
        instagram_link: string,
        facebook_link: string,
        linkedin_link: string,
        libro_de_reclamaciones_link: string,
        celular: string,
        slider: {
            titulo: string,
            descripci_n: string,
            imagen: string,
            link: string
        }[]
    }
}

export const bannerConv = (data: iPages) => {
    const { subtitulo, slider } = data.banner
    return {
        subheader: subtitulo,
        slider
    } as React.ComponentProps<typeof Banner>
}

export const servicesConv = (data: iPages) => {
    const { titulo, descripci_n, slider } = data.servicios
    let sliderC = slider.map((e) => {
        return { name: e.nombre_servicio, detail: e.detalle, image: e.imagen }
    })
    return {
        headline: titulo,
        description: descripci_n,
        slider: sliderC
    } as React.ComponentProps<typeof Services>
}

export const portfolioConv = (data: iPages) => {
    const portfolio = data.portfolio.proyects
    let portfolioRes = portfolio.map((e) => {
        const { imagen_principal, imagenes, nombre, ubicaci_n, videos, servicios } = e
        const bf = imagenes.map((e) => {
            return { img: e.imagen, before: e.antes_despues == 'Antes' ? true : false }
        })
        return { projectName: nombre, place: ubicaci_n, projectImg: imagen_principal, bf, videos, servicios }
    })
    return {
        proyects: portfolioRes
    } as React.ComponentProps<typeof Portfolio>
}

export const footerConv = (data: iPages) => {
    const { subtitulo_1, instagram_link, facebook_link, linkedin_link, libro_de_reclamaciones_link, subtitulo_2, slider, celular, nombre_persona } = data.pie_de_pagina
    const sliderC = slider.map((e) => {
        return { title: e.titulo, description: e.descripci_n, image: e.imagen, link: e.link }
    })
    return {
        subtitle1: subtitulo_1,
        subtitle2: subtitulo_2,
        personName: nombre_persona,
        instagramL: instagram_link,
        facebookL: facebook_link,
        linkedinL: linkedin_link,
        lvrLink: libro_de_reclamaciones_link,
        slider: sliderC,
        phone: celular
    } as React.ComponentProps<typeof Footer>
}