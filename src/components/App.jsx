import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills/Skills'
import Contact from './Contact'
import Projects from './Projects'
import LocomotiveScroll from 'locomotive-scroll';
import '../styles/app.scss'




function App() {
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <>

            <section style={{minHeight:'100vh' , width:'100%'}} data-scroll data-scroll-section data-scroll-speed={0}>
                <Home name='Mridupawan Bordoloi' />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </section>

        </>
    )
}

export default App