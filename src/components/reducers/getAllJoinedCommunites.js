export default function(state={},action){
    switch(action.type){
          case 'Get_All_Community':
                 return {...state,data:action.data};
          default:
                  return state;
 
 }

 }