import React from "react";
import classes from "./ModalWindow.module.css";

const ModalWindow = ({ children, isActive, setIsActive }) => {
  const rootClasses = [classes.modalCreation];
  if (isActive) {
    rootClasses.push(classes.modalCreationActive);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setIsActive(false)}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
