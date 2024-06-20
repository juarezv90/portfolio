import React from "react";
import { useState } from "react";
// import '../scss/project_modal_container.scss'

function ProjectItem({ props }) {
  const [showProject, setShowProject] = useState(false)


  let handleClick = (e) => {
    e.preventDefault()
    setShowProject(true)

  }

  return (
    <>
      <article className="project_item">
        <h3>{props.name}</h3>
        <span className="pub">Published: {props.created_date}</span>
        <div className="image_text">
          <img src={`/project_images/${props.image}_thumbnail.webp`} onClick={(e) => handleClick(e)}  alt={`${props.name} image`} />
          <p className="details">
            {props.about_project.slice(0, 149)}{" "}
            {props.about_project.length > 150 && "..."}
            <span className="view" onClick={(e) => handleClick(e)} style={{ cursor: "pointer" }}>  View Details</span>
          </p>
          <p className="tags">
            Designed using:
            {props.project_tags.map((item, key) => (
              <span className="tag" key={item + key}>{item} </span>
            ))}
          </p>
          <div className="project_links">
            <a href={`${props.git_url}`} target="_blank">Git<img className="icon" src="/icons/extlink.svg" alt="ext link icon" /></a>
            <a href={`${props.active_url}`} target="_blank">Live Project<img className="icon" src="/icons/extlink.svg" alt="ext link icon" /></a>
          </div>
        </div>
      </article>
      {showProject && <ShowModal project={props} show={setShowProject} />}
    </>
  );
}

export default ProjectItem;

export let ShowModal = ({ project, show }) => {

  function handleOnClick() {
    show(false)
  }

  return (
    <div className="modalContainer" onClick={handleOnClick}>
      <div className="modalDisplay">
        <div className="banner" style={{ backgroundImage: `url("./project_images/${project.image}.webp")` }}></div>

        <button className="close" onClick={handleOnClick}>x</button>

        <div className="textcontainer">

        <h3>{project.name}</h3>
        <div className="tags">
          Technologies:
          {project.project_tags.map((tag, key) => (
            <span key={tag + key}>{tag}</span>
          ))}
        </div>
        <p>{project.about_project}</p>
        <div className="project_links">
          <a href={`${project.git_url}`} target="_blank">Git <img src="/icons/extlink.svg" alt="icon" /></a>
          <a href={`${project.active_url}`} target="_blank">Live Project<img src="/icons/extlink.svg" alt="icon" /></a>
        </div>
          </div>

      </div>
    </div>
  )
}
