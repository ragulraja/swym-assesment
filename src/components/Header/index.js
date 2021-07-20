import React from "react";
import "./Header.css";

class Header extends React.Component{
    render(){
        return (
           <nav className="Nav" style={{ backgroundColor: "rgba(var(--b3f,250,250,250),1)"}}>
             <div className="Nav-menus">
               <div className="Nav-brand">
                 <a className="Nav-brand-logo" href="/">
                   Instagram
                 </a>
               </div>
             </div>
             <hr />
           </nav>
       );
    }   
}

export default Header;
