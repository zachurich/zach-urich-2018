import React from "react";

const Status = props => {
  return (
    <section className="status wrapper">
      <div className="container">
        {/* <div className="status__heading heading">
          <h3>Status</h3>
        </div> */}
        <div className="status__box">
          <div
            className="status__text"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
          <div className="status__img" />
        </div>
      </div>
    </section>
  );
};

export default Status;
