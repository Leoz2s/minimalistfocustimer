import {controls} from './elements.js'
import * as actions from "./actions.js"
import * as el from './elements.js'
import { updateDisplay } from './timer.js'
import state from './state.js'

// Como controls é uma <section> inteira, ela contempla tudo o que estiver dentro, por isso event.target exibe tudo o que for focado dentro da <section>
export function registerControls() {
  controls.addEventListener('click', (event) => {
    // console.log(event.target)
    // console.log(event.target.dataset)
    // console.log(event.target.dataset.action)

    const action = event.target.dataset.action
    // console.log(typeof actions[action])
    if(typeof actions[action] != "function") {
      // typeof actions[action] -> Retorna "undefined" se não exister a action em actions. Se exister uma função, ele retorna "function".
      return // Para a execução da função
    }

    // console.log(action)
    // console.log(actions)

    // console.log(actions.toggleRunning())
    // Outroa forma de executar -> Objeto e queremos executar uma função nela:
    // actions["toggleRunning"]()

    actions[action]() // Para deixar assim, temos que impedir que uma função action que não existe tente  ser executada e resulte em erro.
  })
}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key) 
  // false -> Não permite digitar / True -> Permite
  // Expressão regular -> Permite observar determinado caracter ou conjunto de caracteres. Como se fosse um a um.
  // /\d/ na expressão regular -> É como se fosse uma variável dentro da expressão regular, e só o que tem ali dentro faz parte da expressão regular.
  // /a/.test(event.key) -> Só aceita a tecla "a". /\d/.test(event.key) -> Só aceita números. Se for número é true, senão false.

  // blur -> Sair de foco (desfocado)
  el.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    // event.currentTarget é o el.minutes

    time = time > 60 ? 60 : time
    // ternário -> 3 partes: (comparação) ? (se for true) : (se for false)

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
  })
}