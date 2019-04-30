document.addEventListener('DOMContentLoaded', () => {
  const arrow = document.getElementById('cta')
  const content = document.getElementById('contentStart')
  const iconDiv = document.getElementById('devIcons')
  const skillDiv = document.querySelector('#softSkills ul')
  const projectContainer = document.querySelector('div.project-container')
  const projectArrows = document.querySelectorAll('div.arrow')
  const skills = []
  const icons = [
    {name: 'HTML5', icon: 'assets/devicons/html5/html5-plain.svg'},
    {name: 'CSS3', icon: 'assets/devicons/css3/css3-plain.svg'},
    {name: 'JavaScript', icon: 'assets/devicons/javascript/javascript-plain.svg'},
    {name: 'jQuery', icon: 'assets/devicons/jquery/jquery-plain.svg'},
    {name: 'Sass', icon: 'assets/devicons/sass/sass-original.svg'},
    {name: 'React.js', icon: 'assets/devicons/react/react-original.svg'},
    {name: 'Git', icon: 'assets/devicons/git/git-plain.svg'},
    {name: 'GitHub', icon: 'assets/devicons/github/github-original.svg'},
    {name: 'Atom', icon: 'assets/devicons/atom/atom-original.svg'},
    {name: 'mongoDB', icon: 'assets/devicons/mongodb/mongodb-plain.svg'},
    {name: 'Express', icon: 'assets/devicons/express/express-original.svg'},
    {name: 'Node.js', icon: 'assets/devicons/nodejs/nodejs-plain.svg'},
    {name: 'Heroku', icon: 'assets/devicons/heroku/heroku-plain.svg'},
    {name: 'npm', icon: 'assets/devicons/npm/npm-original-wordmark.svg'},
    {name: 'Yarn', icon: 'assets/devicons/yarn/yarn-original.svg'},
    {name: 'Webpack', icon: 'assets/devicons/webpack/webpack-plain.svg'},
    {name: 'Photoshop', icon: 'assets/devicons/photoshop/photoshop-plain.svg'},
    {name: 'Trello', icon: 'assets/devicons/trello/trello-plain.svg'},
    {name: 'Python', icon: 'assets/devicons/python/python-plain.svg'},
    {name: 'PostgreSQL', icon: 'assets/devicons/postgresql/postgresql-plain.svg'}
  ]
  const softSkills = [
    'Confident Touch Typist',
    'Logical Problem Solving',
    'Communication Ability',
    'Collaboration and Teamwork',
    'Time Management',
    'Organisational Ability'
  ]

  function setOpacity(element, bool){
    element.style.opacity = `${bool? 1:0}`
  }

  icons.forEach(icon => {
    const skill = document.createElement('div')
    skill.innerHTML = `
      <p><span>${icon.name.charAt(0)}</span>${icon.name.substr(1)}</p>
    `
    skill.style.backgroundImage = `url(${icon.icon})`
    skill.classList.add('icon')
    skills.push(skill)
    iconDiv.appendChild(skill)
  })

  softSkills.forEach(softSkill => {
    const li = document.createElement('li')
    li.innerText = softSkill
    skillDiv.appendChild(li)
  })

  document.addEventListener('scroll', () => {

    console.log(document.documentElement.scrollTop, content.offsetTop)

    if (document.documentElement.scrollTop > 100) arrow.classList.add('hidden')
    else arrow.classList.remove('hidden')

    if (content.offsetTop <= document.documentElement.scrollTop) {
      console.log('scrolled')
      let i = 0
      const iconAnimationTimer = setInterval(() => {
        if (document.documentElement.scrollTop < 10) i = skills.length
        if(i<skills.length){
          setOpacity(skills[i], true)
        } else {
          clearInterval(iconAnimationTimer)
        }
        i++
      }, 50)
    } else if (document.documentElement.scrollTop < 10) {
      skills.forEach(skill => setOpacity(skill, false))
    }
  })

  projectArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      console.log(projectContainer.scrollLeft)
      if (arrow.classList.contains('right')){
        projectContainer.scrollLeft += 1000
      } else projectContainer.scrollLeft -= 1000
    })
  })

  projectContainer.addEventListener('scroll', () => {
    if (projectContainer.scrollLeft <= 1000) {
      projectArrows[0].style.opacity = '0'
      projectArrows[0].style.pointerEvents = 'none'
    } else {
      projectArrows[0].style.opacity = '1'
      projectArrows[0].style.pointerEvents = 'auto'
    }
    if (projectContainer.scrollLeft >= 6000) {
      projectArrows[1].style.opacity = '0'
      projectArrows[1].style.pointerEvents = 'none'
    } else {
      projectArrows[1].style.opacity = '1'
      projectArrows[1].style.pointerEvents = 'auto'
    }
  })

  arrow.addEventListener('click', () => {
    content.scrollIntoView()
  })
})
