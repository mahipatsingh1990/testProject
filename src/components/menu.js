import { useState } from "react";

const Menu = (props) => {
    console.log("props", props);
    function showMessage(message) {
        alert(props.fileId + ": "+ message  );
        props.handleChange();
    }

    return (
        <div className="context-Menu-Wrapper">
            <div className="context-Menu">
                <div className="right-click-menu__item" onClick={() => showMessage('File Copied')} >Copy</div>
                <div className="right-click-menu__item"  onClick={() => showMessage('Renamed')}>Rename</div>
                <div className="right-click-menu__item"  onClick={() => showMessage('Deleted')}>Delete</div>
            </div>
        </div>
    )
}

export default Menu;