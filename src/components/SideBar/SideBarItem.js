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
      {/* <a className="nav-link" href="index.html">
        <i className={i}></i>
        <span>{title}</span>
      </a> */}
    </li>
  );
}
