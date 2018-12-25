
import { defaultState} from '../../store'
import addMapLayerInfo from "./addMapLayerInfo";
import setSelectedMapLayer from "./setSelectedMapLayer";

export default function layersReducer(state= defaultState.layersTree, action){
 
  const { type } = action  ;

switch (type) {
    case "ADD_MAP_LAYER_INFO":
        return addMapLayerInfo(state,action);
    
    case "SET_SELECTED_MAP_LAYER":
        return setSelectedMapLayer(state,action)
    default:
        return state;
        
}

}