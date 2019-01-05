
import { defaultState} from '../../store'
import importMap from "./importMap";
import deleteMap from "./deleteMap";
import addMapLayer from "./addMapLayer";
import layersintersection from "./layersintersection"
import layersunion from './layersunion'
import layersSemidifference from './layersSemidifference'
import layersdifference from './layersdifference'

export default function mapReducer(state= defaultState.map, action){
 
  const { type } = action  ;

switch (type) {
    case "IMPORT_MAP":
        return importMap(state,action)
       
    case "DELETE_MAP":
        return deleteMap(state,action)

    case "INTERSECT" :
        return layersintersection(state,action.TopologyName,action.FirstFeaturelayername,action.FirstFeatureId,action.SecondFeaturelayername,action.SecondFeatureId)
    case "UNION" :
        return layersunion(state,action.TopologyName,action.FirstFeaturelayername,action.FirstFeatureId,action.SecondFeaturelayername,action.SecondFeatureId)
    case "DIFF" :
        return layersdifference(state,action.TopologyName,action.FirstFeaturelayername,action.FirstFeatureId,action.SecondFeaturelayername,action.SecondFeatureId)
    case "SEMIDIFF" :
        return layersSemidifference(state,action.TopologyName,action.FirstFeaturelayername,action.FirstFeatureId,action.SecondFeaturelayername,action.SecondFeatureId)
     case "ADD_MAP_LAYER":
        return addMapLayer(state,action.layerName);
    default:
        return state;

        
}

}