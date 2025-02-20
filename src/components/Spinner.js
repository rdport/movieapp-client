import React from 'react';

function Spinner({ className }) {
  return (
    <>
      <div className={`${className || "d-flex justify-content-center spinner"}`}>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Spinner;
