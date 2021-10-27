export default function SideBarItem(props) {
  const { title, icon, path } = props;
  const i = `fas ${icon}`;

  return (
    <li className="nav-item">
      <a className="nav-link" href={path}>
        <i className={i}></i>
        <span>{title}</span>
      </a>
    </li>
  );
}
