import React from "react";

function ProjectItem({ props }) {
  return (
    <article className="project_item">
      <h4>{props.name}</h4>
      <span className="pub">Published: {props.created_date}</span>
      <div className="image_text">
        <img src={props.image} alt="porject image" />
        <p className="details">
          {props.project_details.slice(0, 149)}{" "}
          {props.project_details.length > 150 && "..."}
          <a href="/"> Read More</a>
        </p>
      </div>
    </article>
  );
}

export default ProjectItem;
