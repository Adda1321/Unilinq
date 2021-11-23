export function loginUser(){
 const UserLogin={
  id:1,
  first_name:"Anders",
  last_name:"Waqar",
  email:"hanan.waqar@txlabz.com",
  bio:'Love reading books',
  role_id:2,

 }

    return {
         type:'loginUser',
          id:UserLogin.id,
          first_name:UserLogin.first_name,
          last_name:UserLogin.last_name,
          email:UserLogin.email,
          bio:UserLogin.bio,
          role_id:UserLogin.role_id


}





}