// Importing CSS
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Samantha } from "../../constants/images";
import "./Sidebar.css";

// SidebarNav Links
const sidebarNavLinks=[{
    name:"Dashboard",
    link:"dashboard"
},
{
    name:"Expenses",
    link:"expenses"
},
{
    name:"Wallets",
    link:"wallets"
},
{
    name:"Summary",
    link:"summary"
},
{
    name:"Accounts",
    link:"accounts"
},
{
    name:"Settings",
    link:"settings"
},
]

// Sidebar Function
export default function Sidebar(){
    

    // Using the use Location Hook
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    // console.log(active);

    useEffect(()=>{
        setActive(location.pathname==="/"?"/dashboard":location.pathname);
    },[location.pathname])
    return <>
    <aside className="sidebar">
        <div className="sidebarContent">
            <div className="profileDetails">
                <div className="profileImageDiv">
                    <img src={Samantha} alt="samantha" />
                    {/* <div className="notifications">0</div>                    */}
                    <p className="notifications">0</p>
                </div>
                <p className="userName">Samantha</p>
                <p className="userEmail">samantha@email.com</p>
            </div>

            <nav className="sidebarNav">
                <ul>
                    {
                        sidebarNavLinks.map((navLink, id)=>(
                            <li key={id} className="sidebarNavItem" ><Link className={active===`/${navLink.link}`?"sidebarNavLinkActive":"sidebarNavLink"} to={`/${navLink.link}`}  >{navLink.name}</Link></li>
                            // <li key={id} className="sidebarNavItem"><Link className={location.pathname === `/${navLink.link}`?"sidebarNavLinkActive": "sidebarNavLink"} to={`/${navLink.link}`}>{navLink.name}</Link></li>
                        ))
                    }
                    
                </ul>
            </nav>
        </div>
    </aside>
    </>

}