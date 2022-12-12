
import {
   HANDLE_CHANGE,
   HANDLE_CHECK,
   CALL_ALERT,
   CLEAR_ALERT
} from './actions'

const reducer = (state, action) => {
  if(action.type===HANDLE_CHANGE){
    return {
      ...state,
      [action.payload.name]:action.payload.value
    }
   }

   if(action.type===HANDLE_CHECK){
    return {
      ...state,
      [action.payload.name]:action.payload.checked
    }
   }

   if(action.type===CALL_ALERT){
    return{
      ...state,
      showAlert:true,
      alertType:action.payload.type,
      alertText:action.payload.msg
    }
   }

   if(action.type===CLEAR_ALERT){
    return{
      ...state,
      showAlert:false,
      alertType:"",
      alertText:""
    }
   }


  throw new Error(`no such action : ${action.type}`)
}

export default reducer
