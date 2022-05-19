import React from "react";
import DropDown from "./DropdownMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SideMenu from "./SideMenu";
import "./style.css"

const Toolbar = () => {
    return (
        <header className="Toolbar">
            <MobileMenu />
            <Logo />
            <div className="side_menu">
                <SideMenu link="/Burger">Бургэр</SideMenu>
                <SideMenu link="/Tolbor">Төлбөр</SideMenu>
            </div>
        </header>
    )
}

export default Toolbar;