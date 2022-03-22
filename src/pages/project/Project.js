import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import "./Project.css";
import ProjectSummary from "./ProjectSummary";

function Project() {
  const { id } = useParams();
  const { error, document } = useDocument("projects", id);

  //A different way of returning conditional templates. If there is an error, the rest of the jsx wont load
  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-details">
      <ProjectSummary project={document} />
    </div>
  );
}

export default Project;
