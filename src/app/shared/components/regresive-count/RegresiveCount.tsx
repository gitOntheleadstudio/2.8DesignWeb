import { useEffect, useRef } from "react"
import './RegresiveCount.scss';

export default function RegresiveCount(props:{title: string ,targetDate:Date}) {
    const days = useRef<HTMLParagraphElement>(null)
    const hours = useRef<HTMLParagraphElement>(null)
    const minutes = useRef<HTMLParagraphElement>(null)
    const seconds = useRef<HTMLParagraphElement>(null)
    let date: any
    let now: any
    let difference: any
    useEffect(() => {
        setInterval(() => {
            tickTock();
            difference = (props.targetDate.getTime() - now) / (1000 * 60 * 60 * 24);
            days.current!.innerText = String(Math.floor(difference))
        }, 1000);
    })
    const tickTock = () => {
        date = new Date();
        now = date.getTime();
        days.current!.innerText = String(Math.floor(difference))
        hours.current!.innerText = String(23 - date.getHours())
        minutes.current!.innerText = String(60 - date.getMinutes())
        seconds.current!.innerText = String(60 - date.getSeconds())
      }
    
    return (
        <div className="regresiveCount box">
            <h2>{props.title}</h2>
            <div className="regresiveCount description">
                <p>Días</p>
                <p>Horas</p>
                <p>Minutos</p>
                <p>Segundos</p>
            </div>
            <div className="regresiveCount times">
                <p ref={days}></p>
                <p ref={hours}></p>
                <p ref={minutes}></p>
                <p ref={seconds}></p>
            </div>
        </div>
    )
}
