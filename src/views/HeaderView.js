import React from 'react'
import './css/Header.css'

function headerView() {
  return (
    <div>
        <div className="headerContainer">
            <div className="leftContainer"></div>
            <div className="middlecontainer">
                <span className="headerTitle">Pokemon Library</span>
            </div>
            <div className="rightContainer"></div>
        </div>
    </div>
  )
}

export default headerView