import React from "react";
import styles from './Directory.module.scss'

const Directory = ({loadAllFilesRequest, directory}) => {

    const showDirectoryId = (id) => {
        loadAllFilesRequest(id)
    }
   
    return(
        <div className={styles.directoryItem} onClick={() => showDirectoryId(directory.id)} >
            <span className={`material-icons ${styles.directoryIcon}`}>
            folder
            </span>
            <h2 className={styles.directoryName}>{directory.name}</h2>
        </div>
    )
    
}

export default Directory;