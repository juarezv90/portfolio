import React from 'react'
import '../scss/skills.scss'

let icons =[]

for (let i=1; i<9; i++){
  icons.push(i + "-image.svg")
}

console.log(icons);
 
function Skills() {
  return (
    <div className='skills'>Skills
    <div className="iconContainer">
      {icons.map(item => (
        <img src={`/icons/${item}`} alt="" />
      ))}
    </div>
    </div>
  )
}

export default Skills