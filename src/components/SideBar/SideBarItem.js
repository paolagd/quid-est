export default function SideBarItem(props) {
  const { title, icon } = props;
  const i = `fas ${icon}`;

  return (
    <li className="nav-item">
      <a className="nav-link" href="index.html">
        <i className={i}></i>
        <span>{title}</span>
      </a>
    </li>
  );
}
