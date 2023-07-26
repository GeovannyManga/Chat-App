// reducers.js
const initialState = {
    state:[]
  };
  
  const rootReducer = (state = initialState, action) => {
    // Aquí manejarás las acciones y retornarás el nuevo estado según sea necesario
    switch (action.type) {
      // Ejemplo de cómo manejar una acción
      // case 'ACTUALIZAR_DATOS':
      //   return { ...state, datos: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  