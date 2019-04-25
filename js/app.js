document.addEventListener('DOMContentLoaded', () => {
  const arrow = document.getElementById('cta')
  const content = document.getElementById('contentStart')

  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) arrow.classList.add('hidden')
    else arrow.classList.remove('hidden')
  })

  arrow.addEventListener('click', () => {
    content.scrollIntoView()
  })
})
