import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = ({ links }) => {
  return (
    <>
      {links.map((data, index) => (
        <li key={index}>
          <Link
            to={data.link}
            className="hover:text-yellow-400 duration-200"
          >
            {data.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default FooterLinks;