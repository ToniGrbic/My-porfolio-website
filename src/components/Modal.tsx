import React, { ReactPropTypes } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const Modal = (props) => {
  const { description, title, tags, codeLink, projectLink, setShowModal } =
    props;

  return (
    <div className="app__modal">
      <div className="app__modalContent">
        <span className="app__close" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <h2>{title}</h2>
        <h3>Description: </h3>
        <p>{description}</p>
        {tags && (
          <div>
            <h3>Tech and tools used:</h3>
            <ul>
              {tags.map((tag, index) => {
                return <li key={index}>{tag} </li>;
              })}
            </ul>
            {codeLink && (
              <div className="app__modalLinks">
                <h3>Links:</h3>
                {projectLink && (
                  <p>
                    <AiFillEye />
                    <a href={projectLink}> Website </a>
                  </p>
                )}
                <p>
                  <AiFillGithub />
                  <a href={codeLink}> GitHub</a>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
