import React, { useEffect, useState } from "react";
import "../scss/portfolio.scss";
import ProjectItem from "../assets/ProjectItem";

export const PortfolioSection = () => {

  const projects = {
    name: "development",
    git: "https://github.com/juarezv90/easybank-landing-page-master.git",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*4DpFVUP_VfkhzSIL",
    project_details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae modi saepe esse expedita, veniam distinctio illum quia fugiat quae harum consequuntur impedit nemo quasi animi itaque, debitis quod dolores.Eius vero quo velit doloremque quibusdam quam facere nobis fugit et reprehenderit quisquam, eum maiores aliquam aperiam aut veritatis laudantium ut. Perspiciatis animi nulla officiis",
    created_date: "Sept 10, 2023",
  };

  return (
    <section className="portfolio">
      <h3>Portfolio</h3>
    </section>
  );
};
