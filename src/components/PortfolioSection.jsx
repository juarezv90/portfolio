import "../scss/portfolio.scss";
import ProjectItem from "../assets/ProjectItem";
import { useEffect, useState } from "react";

export const PortfolioSection = () => {
  const [items, setItems] = useState([])

  useEffect(() => {

    const loader = async () => {
      const response = await fetch('projects/projects-list')
      const projects = await response.json()
      setItems(projects)
    }

    loader()

  }, [])

  return (
    <section className="portfolio">
      <h3>Portfolio</h3>
      {items && items.map((item, key) => (
        <ProjectItem props={item} key={`${item}${key}`}/>
      ))}
    </section>
  );
};
