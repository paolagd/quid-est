import SideBarItem from "./SideBarItem";

export default function SideBar() {
  return (
    <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
      <div className="container-fluid d-flex flex-column p-0">
        <a
          className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
          href="#"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            <span>Quid-EST</span>
          </div>
        </a>
        <hr className="sidebar-divider my-0" />
        <ul className="navbar-nav text-light" id="accordionSidebar"> 
          <SideBarItem title="What is this?" icon="fa-images" url="/newSearch"/>
          <SideBarItem title="History" icon="fa-history" url="/myDictionary"/>
          <SideBarItem title="Translate" icon="fa-language" url="/translate"/>
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
