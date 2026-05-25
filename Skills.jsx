function Skills(){

  const skills=[
    'Python','Java','HTML','CSS',
    'JavaScript','SQL'
  ]

  return(
    <section id='skills'>
      <h2 className='title'>Skills</h2>

      <div className='skills'>
        {skills.map((skill,index)=>(
          <div className='skill' key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
