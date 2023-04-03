import React, { useState } from 'react'
import "./style.scss";

const SwitchTabs = (prop) => {
    const [selectedTab,setSelectedTab] = useState(0);
    const [left,setLeft] = useState(0); 

    const activeTab = (tab,index)=>{
        setLeft(index*100);
        setTimeout(()=>{
            setSelectedTab(index);
        },300);
        prop.onTabChange(tab,index);
    }
    return (
        <div className='switchingTabs'>
            <div className="tabItems">
                {prop.data.map((tab, index) => (
                    <span
                    key={index}
                    className={`tabItem ${selectedTab === index ? 'active' : ''}`}
                    onClick={()=>activeTab(tab,index)}>
                        {tab}
                    </span>
                ))}
                <span className="movingBg" style={{left}}/> {/*left:left*/}
            </div>
        </div>
    )
}

export default SwitchTabs
