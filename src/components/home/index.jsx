import { useRef, useState, useEffect } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'

function Home() {
  const { scrollProgress, hasStartedScrolling } = useScrollEffect()
  const [animationState, setAnimationState] = useState('initial')
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

  return (
    <>
      <section className="h-screen flex items-center justify-center mx-auto px-6 md:px-8">
        <div className="max-w-6xl w-full p-0 py-8 md:py-16 flex flex-col ">
          <div className="flex items-center justify-center gap-8 md:gap-12 w-full max-sm:flex-col">
            {/* Ajustamos el tamaño y alineación vertical */}
            <figure className="w-1/4 h-36 flex-shrink-0 relative">
              {/* Contenedor de la imagen con la animación de caída y escala inicial más grande */}
              <div
                ref={circleRef}
                className={`absolute transition-opacity duration-300 left-1/2 -translate-x-1/2 ${
                  animationState === 'disappeared' ? 'opacity-0' : 'opacity-100'
                } ${
                  animationState === 'falling' ? 'animate-fall-bounce' : ''
                } ${animationState === 'rising' ? 'animate-rise-bounce' : ''} ${
                  animationState === 'initial' ? 'scale-150' : ''
                }`}
                style={{
                  transformOrigin: 'center center'
                }}
              >
                {/* Círculos concéntricos */}
                <div className="rounded-full p-1.5 aspect-square bg-gradient-to-b dark:from-slate-700/30 dark:to-emerald-400/30 from-emerald-300/30 to-red-300/30 shadow-lg">
                  <div className="rounded-full p-1.5 aspect-square bg-gradient-to-tr dark:from-emerald-400/25 dark:to-slate-700/25 from-red-300/25 to-emerald-300/25">
                    <div className="rounded-full overflow-hidden aspect-square">
                      <picture>
                        <img
                          src="developer.png"
                          alt="Avatar"
                          className="object-cover w-full h-full"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>

              {/* Punto final que aparece cuando el círculo desaparece */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-emerald-900/80 transition-opacity duration-500 ${
                  animationState === 'disappeared' ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden="true"
              ></div>
            </figure>
            <figcaption className="sr-only">
              un desarrollador front-end de React
            </figcaption>

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
        {/* finger */}
        <div className="absolute shadow-2xl bottom-3 left-[50%] translate-x-[-50%]">
          <a href="#content" className="block animate-bounce">
            <span className="p-2 rounded-full dark:shadow-md dark:shadow-slate-700/60 material-symbols-outlined text-emerald-600 dark:fuchsia-600">
              keyboard_double_arrow_down
            </span>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
