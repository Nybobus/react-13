import axios from "axios";
import React, { useEffect, useState } from "react";
import './Catalog.scss'

const Catalog = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <ul className="wrapper">
            {projects.map((project) => (
                <li className="card" key={project.id}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </li>
            ))}
            <img
              src={project.image}
              alt={project.name}
              style={{ width: "100px" }}
            />
          </ul>
        </div>
      </section>
    </>
  );
};

export default Catalog;
