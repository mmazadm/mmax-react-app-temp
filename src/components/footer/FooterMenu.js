import React from 'react'

const FooterMenu = ({menu}) => {
  return (
    <div className="widget  widget link-widget">
        <div className="shape-1" />
        <div className="shape-2" />
        <div className="widget-title" style={{ marginTop: '30px' }}> 
            <p style={{ fontSize: '28px' }}>{menu.title}:</p>
        </div>
        <ul>
            {menu.items.map((item,key) => (
                <li>
                    <a href={item.link}>
                        <i className="ti-angle-right" />{item.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FooterMenu;
