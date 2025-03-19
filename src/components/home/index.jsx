import { useRef, useState, useEffect } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import ConfettiEffect from '../ConfettiEffect'

function Home() {
  const { scrollProgress, hasStartedScrolling } = useScrollEffect()
  const [animationState, setAnimationState] = useState('initial')
  const [showConfetti, setShowConfetti] = useState(false)
  const circleRef = useRef(null)
  const timeoutRef = useRef(null)
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [typedSubtitle, setTypedSubtitle] = useState('')
  const [showSubtitleCursor, setShowSubtitleCursor] = useState(false)
  const fullText = 'Front-End React Developer'
  const subtitleText = 'Software Engineer'

  // Efecto de typewriter con cursor que desaparece al terminar
  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)

        // Comenzar a escribir el segundo texto después de un breve retraso
        setTimeout(() => {
          setShowCursor(false)
          setShowSubtitleCursor(true)

          // Iniciar la tipografía del subtítulo
          let subtitleIndex = 0
          const subtitleInterval = setInterval(() => {
            if (subtitleIndex < subtitleText.length) {
              setTypedSubtitle(subtitleText.substring(0, subtitleIndex + 1))
              subtitleIndex++
            } else {
              clearInterval(subtitleInterval)
              // Ocultar el cursor del subtítulo después de completar
              setTimeout(() => {
                setShowSubtitleCursor(false)
              }, 1000)
            }
          }, 100)

          return () => clearInterval(subtitleInterval)
        }, 1000)
      }
    }, 100) // Velocidad de escritura

    return () => clearInterval(typingInterval)
  }, [])

  // Manejar la animación basada en el scroll
  useEffect(() => {
    // Iniciar animación de caída cuando comienza el scroll
    if (hasStartedScrolling && animationState === 'initial') {
      setAnimationState('falling')

      // Después de la animación de caída, configuramos el estado final
      timeoutRef.current = setTimeout(() => {
        setAnimationState('disappeared')
      }, 3200) // Duración total de la animación de caída
    }

    // Revertir animación cuando volvemos al inicio
    if (
      !hasStartedScrolling &&
      (animationState === 'falling' || animationState === 'disappeared')
    ) {
      // Limpiar cualquier timeout pendiente
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }

      // Revertir al estado inicial con la animación de subida
      setAnimationState('rising')

      // Después de la animación de subida, volvemos al estado inicial
      timeoutRef.current = setTimeout(() => {
        setAnimationState('initial')
      }, 1200) // Duración de la animación de subida
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [hasStartedScrolling, animationState])

  const handleImageClick = () => {
    // Disparar el evento personalizado
    window.dispatchEvent(new CustomEvent('showConfetti'))
  }

  return (
    <>
      {showConfetti && <ConfettiEffect isActive={true} colors={['#10b981', '#059669', '#34d399', '#6ee7b7', '#34d399']} />}
      <section className="h-screen flex items-center justify-center mx-auto px-6 md:px-8 relative">
        <div className="max-w-6xl w-full p-0 py-8 md:py-16 flex flex-col">
          <div className="flex items-center justify-center gap-8 md:gap-12 w-full max-sm:flex-col">
            {/* Contenedor del avatar con animación */}
            <figure className="profile-container w-10/12 sm:w-1/2 md:w-1/4 h-48 sm:h-40 md:h-36 flex-shrink-0 relative mx-auto sm:mx-0">
              <div
                ref={circleRef}
                className={`profile-avatar absolute transition-opacity duration-300 left-1/2 -translate-x-1/2 ${
                  animationState === 'disappeared' ? 'opacity-0' : 'opacity-100'
                } ${
                  animationState === 'falling' ? 'animate-fall-bounce' : ''
                } ${animationState === 'rising' ? 'animate-rise-bounce' : ''} ${
                  animationState === 'initial' ? 'scale-150 sm:scale-125' : ''
                }`}
                style={{
                  transformOrigin: 'center center'
                }}
                aria-hidden={
                  animationState === 'disappeared' ? 'true' : 'false'
                }
              >
                {/* Círculos concéntricos decorativos */}
                <div className="profile-ring-outer rounded-full p-1.5 aspect-square bg-gradient-to-b dark:from-slate-700/30 dark:to-emerald-400/30 from-emerald-300/30 to-red-300/30 shadow-lg group transition-transform duration-300 ease-in-out hover:scale-105">
                  <div className="profile-ring-middle rounded-full p-1.5 aspect-square bg-gradient-to-tr dark:from-emerald-400/25 dark:to-slate-700/25 from-red-300/25 to-emerald-300/25">
                    <div className="profile-ring-inner rounded-full overflow-hidden aspect-square bg-white/30 dark:bg-slate-800/30">
                      <img
                        src="developer.png"
                        alt="Foto de perfil del desarrollador"
                        className="profile-image object-cover w-full h-full mix-blend-overlay cursor-pointer transition-all duration-300 hover:mix-blend-normal hover:brightness-110 active:scale-95"
                        loading="eager"
                        width="200"
                        height="200"
                        onClick={handleImageClick}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Indicador visual que aparece cuando el avatar desaparece */}
              <div
                className={`profile-indicator absolute top-full left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-emerald-900/80 transition-opacity duration-500 ${
                  animationState === 'disappeared' ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden="true"
              ></div>

              <figcaption className="sr-only">
                Foto de perfil de un desarrollador front-end de React
              </figcaption>
            </figure>

            {/* Alineamos el texto verticalmente con la imagen */}
            <div className="flex flex-col items-start max-sm:items-center justify-center h-full">
              <h1 className="relative font-extrabold tracking-tighter text-transparent text-5xl sm:text-6xl md:text-7xl bg-clip-text bg-gradient-to-b dark:from-slate-700 dark:to-emerald-400 from-emerald-300 to-red-300">
                <div className="flex items-center">
                  <span>{typedText}</span>
                  {showCursor && (
                    <span
                      className="inline-block w-[2px] h-[1em] bg-gradient-to-b dark:from-slate-700 dark:to-emerald-400 from-emerald-300 to-red-300 ml-1 animate-[blink_0.7s_step-end_infinite]"
                      style={{ verticalAlign: '-0.1em' }}
                      aria-hidden="true"
                    ></span>
                  )}
                </div>
              </h1>
              <h2 className="dark:text-emerald-500 text-red-400 tracking-tight font-bold text-xl sm:text-2xl mt-3">
                <div className="flex items-center">
                  <span>{typedSubtitle}</span>
                  {showSubtitleCursor && (
                    <span
                      className="inline-block w-[2px] h-[1em] bg-current ml-1 animate-[blink_0.7s_step-end_infinite]"
                      style={{ verticalAlign: '-0.1em' }}
                      aria-hidden="true"
                    ></span>
                  )}
                </div>
              </h2>
            </div>
          </div>
        </div>

        {/* Finger reposicionado al final del viewport */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <a
            href="#content"
            className="block animate-bounce bg-white/30 dark:bg-slate-800/30 rounded-full p-1 shadow-lg"
            aria-label="Desplazar hacia abajo"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full dark:shadow-md dark:shadow-slate-700/60 text-emerald-600 dark:text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
