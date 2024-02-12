"use client";
import React, { useRef } from "react";
import useClickOutside from "@/hooks/custom/useClickOutside";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import type { ModalProps } from "@/types/objects";

const Modal = (props: ModalProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { description, title, tags, codeLink, projectLink, setShowModal } =
    props;

  const handleClickOutside = () => {
    setShowModal(false);
  };

  useClickOutside(wrapperRef, handleClickOutside);

  return (
    <div className="app__modal">
      <div className="app__modal-content" ref={wrapperRef}>
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
              {tags?.map((tag: string, index: number) => {
                return <li key={index}>{tag}</li>;
              })}
            </ul>
            {codeLink && (
              <div className="app__modal-links">
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
