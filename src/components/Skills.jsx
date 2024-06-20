import React from 'react'
import '../scss/skills.scss'

let icons = []

for (let i = 1; i < 9; i++) {
  icons.push(i + "-image.svg")
}

function Skills() {
  return (
    <div className='skillContainer'>
      <div className="skillBox">

        <h2>Skills</h2>
        <div className="iconContainer">
          {icons.map(item => (
            <img src={`/icons/${item}`} key={item} alt="" />
          ))}
        </div>
        <p className='skillText'>As an entry-level full-stack programmer, I have solid skills in HTML, CSS, and JavaScript, with experience using React and Next.js for front-end development. On the back end, I work with Node.js, Django, and Firebase. I'm adept at creating responsive designs, working with RESTful APIs, and using Git for version control. I'm eager to continue learning and contribute to innovative web projects.</p>
      </div>
    </div>
  )
}

export default Skills