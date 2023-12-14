let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light')
  
  // Acessibilidade (Accessibility) :
  const mode = darkMode ? 'Light' : 'Dark'
  event.currentTarget
    .querySelector('span').textContent = `${mode} mode ativado!`
  
  // currentTarget -> (buttonToggle) on event

  darkMode = !darkMode
})