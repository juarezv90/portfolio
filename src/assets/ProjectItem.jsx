import React from "react";

function ProjectItem({ props }) {
  return (
    <article className="project_item">
      <h4>{props.name}</h4>
      <span className="pub">Published: {props.created_date}</span>
      <div className="image_text">
        <img src={`/project_images/${props.image}_thumbnail.png`} alt={`${props.name} image`} />
        <p className="details">
          {props.about_project.slice(0, 149)}{" "}
          {props.about_project.length > 150 && "..."}
          <a href="/">  See More</a>
        </p>
      </div>
      <p className="tags">
        Designed using:
        {props.project_tags.map(item => (
          <span className="tag">{item} </span>
        ))}
      </p>
    </article>
  );
}

export default ProjectItem;
