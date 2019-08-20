const initialState = {
    clicks: 0
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type){
        case 'increment':
            newState.clicks++;
            return newState;
        case 'decrement':
            newState.clicks--;
            return newState;
        case 'reset':
            newState.clicks = 0; 
            return newState;
         default: 
            return newState;  
    }
}


export default reducer;