document.addEventListener('DOMContentLoaded', () => {
  const arrow = document.getElementById('cta')
  const content = document.getElementById('contentStart')
  const iconDiv = document.getElementById('devIcons')
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

  icons.forEach(icon => {
    const skill = document.createElement('div')
    skill.innerHTML = `
      <p><span>${icon.name.charAt(0)}</span>${icon.name.substr(1)}</p>
      <img src="${icon.icon}" alt="${icon.name}" />
    `
    skill.classList.add('icon')
    iconDiv.appendChild(skill)
  })

  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) arrow.classList.add('hidden')
    else arrow.classList.remove('hidden')
  })

  arrow.addEventListener('click', () => {
    content.scrollIntoView()
  })
})
