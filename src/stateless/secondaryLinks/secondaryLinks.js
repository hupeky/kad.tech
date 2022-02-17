import React from "react";

import Button from "../../UI/Button/Button";

import LinkedInIcon from "../../assets/icons/LinkedIn";
import DownloadCVIcon from "../../assets/icons/cv";

const secondaryLinks = (props) => {
  let margin = {};
  switch (props.align) {
    case "left":
      margin = {
        marginRight: "auto",
      };
      break;
    case "right":
      margin = {
        marginLeft: "auto",
      };
      break;
    case "center":
      margin = {
        marginRight: "auto",
        marginLeft: "auto",
      };
      break;
    default:
      break;
  }

  return (
    <nav {...props} style={margin}>
      {/* <a target="_blank" href="https://www.linkedin.com/in/kyehuelin/">
        <Button outline={props.outline ? true : null}>
          <LinkedInIcon height={25} />
        </Button>
      </a> */}

    </nav>
  );
};

export default secondaryLinks;
