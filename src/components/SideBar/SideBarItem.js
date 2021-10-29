import { Link } from "react-router-dom";
export default function SideBarItem(props) { 
  const { title, icon, url } = props; 
  const i = `fas ${icon}`;

  return (
    <li className="nav-item"> 
      <Link className="nav-link" to={url}> 
        <i className={i}></i>
        <span>{title}</span>
      </Link> 
    </li>
  );
}
