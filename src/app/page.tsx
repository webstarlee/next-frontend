'use client'
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ToastContainer } from 'react-toastify';
import Header from '@/components/Header.tsx';
import Home from '@/sections/Home';
import Community from '@/sections/Community';
import Twitter from '@/sections/Twitter';
import PikaToken from '@/sections/Pikatoken';
import HowToBuy from '@/sections/HowToBuy';
import Roadmap from '@/sections/Roadmap';
import Tokenomics from '@/sections/Tokenomics';
import Media from '@/sections/Media';
import Ecosystem from '@/sections/Ecosystem';
import Ambassadors from '@/sections/Ambassadors';
import Notmeme from '@/sections/Notmeme';
import Faq from '@/sections/Faq';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import { Web3Config } from "./Web3Config";
import { NetworkProvider } from '@/hooks/NetworkContext';
import { LangProvider } from '@/hooks/LangContext';

export default function App() {

  const [width, setWidth] = React.useState(1366);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <Web3Config>
      <NetworkProvider>
        <LangProvider>
          <ParallaxProvider>
            <Header width={width} />
            <Home width={width}/>
            <Community />
            <Twitter width={width} />
            <PikaToken />
            <HowToBuy />
            <Roadmap />
            <Tokenomics width={width} />
            <Media width={width} />
            <Ecosystem width={width} />
            <Ambassadors />
            <Notmeme />
            <Faq />
            <Contact />
            <Footer />
          </ParallaxProvider>
          <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </LangProvider>
      </NetworkProvider>
    </Web3Config>
  )
}
