import React from 'react'
import './Notice.css'
export default function SuccessNotice(props) {
    const { type, message, clearMsg } = props;
    return (
        <div>
            <div className={type === "error" ? "notice error" : "notice succes"}>
                <span>{message}</span>
                <div className="clear-notice" onClick={clearMsg}>X</div>
            </div>
        </div>
    )
}
