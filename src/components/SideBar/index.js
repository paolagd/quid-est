import SideBarItem from "./SideBarItem"; 
import { Link } from "react-router-dom"; 
import { useRef } from 'react'; 
import './SideBar.css'; 

export default function SideBar(props) {
  const { onFileChange } = props; 
  const fileInput = useRef(null);  

  return (
    <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
      <div className="container-fluid d-flex flex-column p-0"> 
        <Link className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" to="/"> 
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-camera-retro"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            <span>Quid-EST</span>
          </div>
        </Link>
        <hr className="sidebar-divider my-0" /> 
        <ul className="navbar-nav text-light" id="accordionSidebar"> 
          <input className="file-input"
            type="file"
            capture='camera'
            accept=".png, .jpg, .jpeg"
            onChange={(e) => onFileChange(e.target.files)}
            ref={fileInput}
          />
          <li className="nav-item"> 
            <div className="nav-link" onClick={() => fileInput.current.click()} >
              <i className="fas fa-camera"></i>
              <span>Take a picture</span>
            </div>
          </li> 
          <SideBarItem title="My Dictionary" icon="fa-book" url="/myDictionary"/> 
          <SideBarItem title="Quiz me!" icon="fa-diagnoses" url="/quiz"/>  
        </ul>
        <div className="text-center d-none d-md-inline">
          <button
            className="btn rounded-circle border-0"
            id="sidebarToggle"
            type="button"
          ></button>
        </div>
      </div>
    </nav>
  );
}
