import {combineReducers} from 'redux';
import {Cities,EnteryDate,ExitDate,HotelsName,getAllList,autoSelectClicked} from './Reducer'

export default combineReducers({
    Cities,
    EnteryDate,
    ExitDate,
    HotelsName,
    getAllList,
    autoSelectClicked
})