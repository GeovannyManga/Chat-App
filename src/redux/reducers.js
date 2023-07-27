// reducers.js
import { MESSAGES_LIST } from "./actions";


const initialState = {
    messagesList:[]
  };
  
  const rootReducer = (state = initialState, action) => {
    // Aquí manejarás las acciones y retornarás el nuevo estado según sea necesario
    switch (action.type) {
      // Ejemplo de cómo manejar una acción
       case MESSAGES_LIST:
        return {
           ...state,
           messagesList: action.payload 
          };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  