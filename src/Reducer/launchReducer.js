const launchInitialState=[]

const launchReducer=(state=launchInitialState,action)=>{
    switch(action.type){
        case 'GET_LAUNCHES':{
            return [...action.payload]
        }
        default:{
            return [...state]
        } 
    }
}

export default launchReducer