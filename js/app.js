document.addEventListener('DOMContentLoaded', () => {
  const arrow = document.getElementById('bounce')

  document.addEventListener('scroll', () => {
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 150) arrow.classList.add('hidden')
    else arrow.classList.remove('hidden')
  })
})
