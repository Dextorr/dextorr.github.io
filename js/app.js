let arrow,
  content,
  iconDiv,
  skillDiv,
  projectContainer,
  projectArrows,
  vw,
  vh
const skills = [],
  icons = [
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
  ],
  softSkills = [
    'Logical Problem Solving',
    'Communication Ability',
    'Collaboration and Teamwork',
    'Time Management',
    'Organisational Ability',
    'Confident Touch Typist'
  ]

function setOpacity(element, bool){
  element.style.opacity = `${bool? 1:0}`
}

function addEvents(){
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

    if (document.documentElement.scrollTop > 100) arrow.classList.add('hidden')
    else arrow.classList.remove('hidden')

    if (content.offsetTop - vh/6 <= document.documentElement.scrollTop) {
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
    arrow.addEventListener('click', (e) => {
      e.preventDefault()
      if (arrow.classList.contains('right')){
        projectContainer.scrollLeft += vw
      } else projectContainer.scrollLeft -= vw
    })
  })

  projectContainer.addEventListener('scroll', () => {
    if (projectContainer.scrollLeft < vw) {
      projectArrows[0].style.opacity = '0'
      projectArrows[0].style.pointerEvents = 'none'
    } else {
      projectArrows[0].style.opacity = '1'
      projectArrows[0].style.pointerEvents = 'auto'
    }
    if (projectContainer.scrollLeft >= 5 * vw) {
      projectArrows[1].style.opacity = '0'
      projectArrows[1].style.pointerEvents = 'none'
    } else {
      projectArrows[1].style.opacity = '1'
      projectArrows[1].style.pointerEvents = 'auto'
    }
  })

  arrow.addEventListener('click', (e) => {
    e.preventDefault()
    content.scrollIntoView()
  })
}

function init(){
  arrow = document.getElementById('cta')
  content = document.getElementById('contentStart')
  iconDiv = document.getElementById('devIcons')
  skillDiv = document.querySelector('#softSkills ul')
  projectContainer = document.querySelector('div.project-container')
  projectArrows = document.querySelectorAll('div.arrow')
  vw = document.documentElement.clientWidth
  vh = document.documentElement.clientHeight

  addEvents()
}

document.addEventListener('DOMContentLoaded', init)
