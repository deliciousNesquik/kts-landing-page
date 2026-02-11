import '../assets/container/list-block.css'
import React from "react";

export default function ListBlockItem ({ icon, title, description, onClick, clickable = true }) {
    return (
        <div className={`item ${clickable ? 'clickable' : ''}`} onClick={onClick}>
            {icon}
            <div>
                {title}
                {description}
            </div>
        </div>
    )
}