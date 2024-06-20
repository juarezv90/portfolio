import ProjectItem from "../assets/ProjectItem";
import { useEffect, useState } from "react";
import "../scss/portfolio.scss";

export const PortfolioSection = () => {
  const [items, setItems] = useState([])

  useEffect(() => {

    const loader = async () => {
      const response = await fetch('https://portfolioapi.victorjuarez.dev/project-list')
      const projects = await response.json()
      setItems(projects)
    }

    loader()

  }, [])

  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="projectGrid">
        {items && items.map((item, key) => (
          <ProjectItem props={item} key={`${item}+${key}`} />
        ))}
      </div>
    </section>
  );
};
