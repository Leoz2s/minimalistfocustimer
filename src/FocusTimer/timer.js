import state from './state.js'
import * as el from './elements.js' // el of elements
import { reset } from './actions.js'
import { kitchenTimer } from './sounds.js'

export function countdown() {
  clearTimeout(state.countdownId)
  
  if(!state.isRunning) {
    return
  }
  
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0) {
    seconds = 59
    minutes--
  }

  if(minutes < 0) {
    reset()
    kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)

  // Função setTimeout() -> Executa uma função após determinado tempo
  // setTimeout(função a ser executada, tempo(ms) para a execução)
  // setTimeout(() => {}, 1000)
  state.countdownId = setTimeout(() => countdown(), 1000)
  // Recurssão -> É quando uma função chama ela mesma em algum momento. IMPORTANTE: A recurssão precisa parar em algum momento. Função recursiva.
  // Callback function -> Função que é chamada dentro de outra função. Passada como argumento para outra função, para ser usada mais tarde.
  // console.log("Função countdown executada")
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  // nullish coalescing operator
  // Se o minutes ao lado esquerdo de ?? for null, então aplica o valor de state.minutes para o primeiro minutes receber. Caso contrário, faça nada.
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
  // String().padStart(número de caracteres, caso tiver menos que a quantidade coloque isso)
  // .padStart -> pad(preencher) Start(começo) // .padEnd -> pad(preencher) end(final)
}