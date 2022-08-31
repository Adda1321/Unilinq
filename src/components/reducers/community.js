export default function(state={},action){
    switch(action.type){
          case 'Add_Community':
                 return {...state,user_id:action.user_id,communityName:action.communityName,communityType:action.communityType,communityStatus:action.communityStatus,category_id:action.category_id,communityDescription:action.communityDescription,communityImage:action.communityImage,status:action.status};
          default:
                  return state;
 
 }

 }