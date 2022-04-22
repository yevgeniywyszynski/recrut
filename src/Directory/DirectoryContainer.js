import Directory from './Directory';
import { loadAllFilesRequest } from "../redux/AllFilesRedux";
import { connect } from "react-redux";


const mapDispatchToProps = dispatch => ({
    loadAllFilesRequest: (id) => dispatch(loadAllFilesRequest(id)),
 })

 export default connect(null,mapDispatchToProps) (Directory);