/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const linksDetails = [
    { to: "/", name: "All", path:"" },
    { to: "/?todos=active", name: "Active" , path:"?todos=active"},
    { to: "/?todos=completed", name: "Completed" , path:"?todos=completed"},
  ];

  return (
    <nav className="navbar">
      {linksDetails.map((item) => (
        <Link to={item.to} className={location.search == `${item.path}` ? "active" : ""}>{item.name}</Link>
      ))}
    </nav>
  );
};

export default Navbar;
