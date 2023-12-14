import './toggle-mode.js'
import * as FocusTimer from './FocusTimer/index.js'
// import *(tudo que está sendo exportado no from) as FocusTimer(dentro do objeto FocusTimer (é um Module js ES6)) from (de onde está sendo importado)

console.log(FocusTimer)

FocusTimer.start(1, 3)