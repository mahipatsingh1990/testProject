import { useState } from "react";
import Menu from './menu';

const Directory = ({ files }) => {
    const [isExpanded, toggleExpanded] = useState(false);
    const [isRightClicked, setRightClicked] = useState(false);

   function rightClicked(e) {
   		e.preventDefault(); // prevent the default behaviour when right clicked
        setRightClicked(true)
   }

   function handleChange() {
   	setRightClicked(false);
   }
    if (files.type === 'folder') {
        return (
            <div className="folder">
                <h2 className="folder-title"  onClick={() => toggleExpanded(!isExpanded)}><span className={isExpanded ? "down" : "up"}></span>{files.name}</h2><br />
                {
                    isExpanded && files.items.map((item, id) => <Directory key={id} files={item} />)
                }
            </div>
        )
    }
    return (
        <>
            <h3  onClick={() => setRightClicked(false)} onContextMenu={(e) => rightClicked(e) } className="file-name">{files.name}</h3><br />
            { 
            	isRightClicked && <Menu isRightClicked={isRightClicked}  fileId={files.name} handleChange={handleChange} />
            }
        </>
    )
}

export default Directory;