import React, { useState } from "react";

export const Navigation = (props) => {
  console.log(props, "NavData")

  // const [navData,setNavData] = useState(props);
  // console.log(navData,"KKKK")
  const data = props.data;
  console.log(data, ";;;")
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            KAPS
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {
              data ? data.map((data, Ind) => {
                return (
                  <li key={Ind}>
                    <a href={data.link} className="page-scroll">
                      {data.title}
                    </a>
                  </li>
                )
              }) : "Null"
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};
