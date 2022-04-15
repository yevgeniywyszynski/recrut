import React, { useEffect} from "react";

const Files = ({loadAllFilesRequest}) => {

    useEffect(() => {
        loadAllFilesRequest()
    }, [])

    return(
        <div>

        </div>
    )
}

export default Files;