import logo from "../resources/images/shyft-logo.svg";
import github from "../resources/images/footer/github-2.svg";
const NavBarComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top our-navbar">
                <div className="container-fluid">
                    <a id="hide-on-lg" className="navbar-brand" href="/"><img src={logo} style={{ width: "80px" }} alt="Shyft" /></a>
                    
                    
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                    <div className='container-fluid'>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav w-100">
                                {/* <li className="nav-item">
                                    <a id="hide-on-md" className="navbar-brand" href="/"><img src={logo} style={{ width: "80px" }} alt="Shyft" /></a>
                                </li> */}

                            </ul>
                        </div>
                    </div>
                    
                </div>
          </nav>
    </div>
  );
};

export default NavBarComponent;
