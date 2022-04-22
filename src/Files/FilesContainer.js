import { connect } from "react-redux";
import Files from './Files';
import { getAllFiles, loadAllFilesRequest } from "../redux/AllFilesRedux";

const mapStateToProps = state => ({
    reduxAllFiles: getAllFiles(state)
})

const mapDispatchToProps = dispatch => ({
   loadAllFilesRequest: (id) => dispatch(loadAllFilesRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps) (Files);

