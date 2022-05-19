import React from 'react'
import "./style.css";

const SideMenu = props => {
    return (
      <div className='side_menu'>
          <div className='side_menu_child'>{props.children}</div>
      </div>
    )
}

export default SideMenu