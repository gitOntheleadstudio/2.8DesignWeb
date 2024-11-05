import './Counters.scss';
import { useEffect, useRef } from 'react';
import Lottie, { InteractivityProps } from 'lottie-react';
import useOnScreen from '../../Utils/hooks/onScreen';

export default function Counters(props: { data: { name: string, desc: string, start: number, end: number, prefix: string, sufix: string, animationData: any }[] }) {
    const time = 1500
    const boxRef = useRef<HTMLDivElement>(null)
    const title = useRef<Array<HTMLElement>>([]);
    useEffect(() => {
        title.current.forEach((e, i) => {
            let curr = props.data[i]
            animateValue(e, curr.start, curr.end, time, curr.prefix, curr.sufix)
        });
    }, [useOnScreen(boxRef)])

    const animateValue = (obj: any, start: number, end: number, duration: number, prefix: string, sufix: string) => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = prefix + Math.floor(progress * (end - start) + start) + sufix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }
    const styleLottie = {
        height: 50,
    };

    const interactivityLottie: Omit<InteractivityProps, "lottieObj"> = {
        mode: "scroll",
        actions: [
            {
                visibility: [0, .5],
                type: "seek",
                frames: [0, 200],
            },
        ],
    };
    return (
        <div className="counter box">
            {props.data.map((e, i) => {
                return (
                    <div ref={boxRef} key={'count' + i} className="counter element">
                        <div className="counter element-text">
                            <p className="counter element-name">{e.name}</p>
                            <h1 ref={(el) => (title.current[i] = el!)} className="counter element-number">{e.start}</h1>
                            <p className="counter element-description">{e.desc}</p>
                        </div>
                        <div className="counter element-chart">
                            <Lottie animationData={e.animationData} style={styleLottie} interactivity={interactivityLottie}></Lottie>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
