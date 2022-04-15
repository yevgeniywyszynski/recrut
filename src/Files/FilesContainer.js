import { connect } from "react-redux";
import Files from './Files';
import { loadAllFilesRequest } from "../redux/AllFilesRedux";

const mapDispatchToProps = dispatch => ({
    allFiles: () => dispatch(loadAllFilesRequest()),
})

export default connect(null, mapDispatchToProps) (Files);

