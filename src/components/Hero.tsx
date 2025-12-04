import { useTheme } from '../hooks/useTheme'
import HeroZen from './hero-variations/HeroZen'
import Hero3D from './hero-variations/Hero3D'
import HeroBento from './hero-variations/HeroBento'
import HeroBrutalist from './hero-variations/HeroBrutalist'
import HeroGlass from './hero-variations/HeroGlass'
import HeroScroll from './hero-variations/HeroScroll'
import HeroTerminal from './hero-variations/HeroTerminal'
import HeroOrganic from './hero-variations/HeroOrganic'
import HeroMagazine from './hero-variations/HeroMagazine'
import HeroGamer from './hero-variations/HeroGamer'

const Hero = () => {
  const { designMode } = useTheme()

  switch (designMode) {
    case 'zen-minimalist':
      return <HeroZen />
    case 'interactive-3d':
      return <Hero3D />
    case 'bento-grid':
      return <HeroBento />
    case 'neo-brutalist':
      return <HeroBrutalist />
    case 'glassmorphism':
      return <HeroGlass />
    case 'scrollytelling':
      return <HeroScroll />
    case 'terminal':
      return <HeroTerminal />
    case 'organic-nature':
      return <HeroOrganic />
    case 'magazine':
      return <HeroMagazine />
    case 'immersive-gamer':
      return <HeroGamer />
    default:
      return <HeroZen />
  }
}

export default Hero
