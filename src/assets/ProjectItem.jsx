import React from "react";
import { useState } from "react";
import '../scss/project_modal_container.scss'

function ProjectItem({ props }) {
  const [showProject, setShowProject] = useState(false)


  let handleClick = (e)=> {
    e.preventDefault()
    setShowProject(true)

  }

  return (
    <>
    <article className="project_item">
      <h4>{props.name}</h4>
      <span className="pub">Published: {props.created_date}</span>
      <div className="image_text">
        <img src={`/project_images/${props.image}_thumbnail.png`} alt={`${props.name} image`} />
        <p className="details">
          {props.about_project.slice(0, 149)}{" "}
          {props.about_project.length > 150 && "..."}
          <a onClick={(e) =>handleClick(e)} style={{cursor:"pointer"}}>  Read More</a>
        </p>
      </div>
      <p className="tags">
        Designed using:
        {props.project_tags.map((item, key )=> (
          <span className="tag" key={item + key}>{item} </span>
        ))}
      </p>
    </article>
    {showProject && <ShowModal project={props} show={setShowProject} />}
    </>
  );
}

export default ProjectItem;

export let ShowModal = ({project, show}) => {
  console.log(project);

  function handleOnClick() {
    show(false)
  }

  return (
    <div className="modalContainer">
      <div className="banner" style={{backgroundImage:`url("./project_images/${project.image}.png")`}}></div>
      <button className="close" onClick={handleOnClick}>x</button>
        <h4>{project.name}</h4>
      <div className="tags">
        <p>Technologies:</p>
        {project.project_tags.map((tag, key) => (
          <p key={tag+key}>{tag}</p>
        ))}
      </div>
      <p>{project.about_project}</p>
      <div className="project_links">
        <a href={`${project.git_url}`} target="_blank">Git</a>
        <a href={`${project.active_url}`} target="_blank">Live Project</a>
      </div>
      
    </div>
  )
}
