import React, { useEffect, useState } from "react";
import styles from './Files.module.scss'
import File from "../File/File";
import { v4 as uuidv4 } from 'uuid';
import Directory from "../Directory/DirectoryContainer";


const Files = ({loadAllFilesRequest, reduxAllFiles}) => {
    const [allFiles, setAllFiles] = useState({})
    

    useEffect(() => {
        loadAllFilesRequest('root')
    }, [])

    useEffect(() => {
        if(reduxAllFiles){
            setAllFiles(reduxAllFiles)
        }
    }, [reduxAllFiles])

    if(!("files" in allFiles)) {
       return <div></div>
    } else {
    return(
        <div className={styles.filesWrapper}>
            {allFiles.files.map(file => (
                <File key ={uuidv4()} file={file} />
            ))}
            {allFiles.directories.map(directory => (                
                <Directory key ={directory.id} directory={directory}/>
            ))}
        </div>
        )
    }
}

export default Files;