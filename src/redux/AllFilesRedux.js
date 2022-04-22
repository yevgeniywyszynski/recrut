import axios from 'axios';

export const getAllFiles = ({allFiles}) => allFiles.data;


const reducerName = 'files';

const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_ALLFILES = createActionName('LOAD_ALLFILES');

export const startRequest = () => ({type: START_REQUEST});
export const endRequest = () => ({type: END_REQUEST});
export const errorRequest = payload => ({payload, type: ERROR_REQUEST});

export const loadAllFiles = payload => ({payload, type: LOAD_ALLFILES});

export const loadAllFilesRequest = (id) => {
    return async dispatch => {
        dispatch(startRequest());

        try {
            let allFiles = await axios.get('https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories/' +  (id === 'root'? '' : id));
            dispatch(loadAllFiles(allFiles.data))
            dispatch(endRequest())
        } catch(e) {
            dispatch(errorRequest({name: 'ERROR_REQUEST', error: 'could not fetch data'}));
        }
    }
}

export default function reducer(statePart = [], action = {}) {
    switch(action.type) {
        case LOAD_ALLFILES:
            return {...statePart, data: action.payload}
        case START_REQUEST:
            return {...statePart, request: {pending: true, error: null, success: false}}
        case END_REQUEST: 
            return {...statePart, request:{pending: false, error:null, success: true}}
        case ERROR_REQUEST:
            return {...statePart, request: {pending: false, error: action.payload, success: false}}
        default:
            return statePart
    }
}