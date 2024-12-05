import { Accordion } from "../cmps/Accordion.jsx";
import { animateCSS } from "../services/util.service.js";
const { useRef } = React
export function Home() {

    const imgRef = useRef()
    const h1Ref = useRef()

    async function onActivate() {
        await animateCSS(imgRef.current, 'rubberBand')
        animateCSS(h1Ref.current, 'bounceOut', false)
    }

    return (
        <section className="home">
            <button onClick={onActivate}>Activate</button>
            <h1 ref={h1Ref} >Car's R Us!</h1>
            <img ref={imgRef} src="../assets/img/react.png" alt="hero-image" />
            <Accordion title="Machine Learning">
                Machine learning is a subset of artificial
                intelligence that focuses on building systems that learn from data,
                improve their performance over time without being explicitly programmed,
                and make decisions based on data patterns.
                <span>🐙</span>
            </Accordion>
            <Accordion title="Introduction to Quantum Computing">
                Quantum computing is an area of computing focused on developing computer
                technology based on the principles of quantum theory. Quantum computers use
                qubits, which can represent and store data in multiple states simultaneously.
                <p>🍎</p>
            </Accordion>
        </section>
    )
}



function CmpWithChildren({ children, txt }) {
    // console.log('children:', children)
    return (
        <section>
            <h1>{txt}</h1>
            <section>
                {children}
            </section>
        </section>
    )


}