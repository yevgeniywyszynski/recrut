import React from "react";
import styles from './File.module.scss';


const getIconName = (fileName) => {
    const splittedName = fileName.split('.')
    const type = splittedName[splittedName.length-1]
    return type === 'jpg' ? 'crop_original': 'insert_drive_file'
}


const File = ({file}) => {
   
    return(
        <div className={styles.fileItem}>
            <span className={`material-icons ${styles.fileIcon}`}>
            {getIconName(file.name)}
            </span>
            <span className={styles.fileWrapper}>{file.name}</span>
        </div>
    )
    
}

export default File;