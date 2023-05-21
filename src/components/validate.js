export const validate=(value)=>{
   const error={};

   if(!value.email){
       error.email="Email required"
    }
    else if(!/\S+@\S+\.\S+/.test(value.email)){
      error.email="Email Address is invalid"
    }
    else{
        delete error.email
    }

    if(!value.name){
       error.name="name required"
    }
    else{
       delete error.name
   }
   if(!value.subject){
      error.subject="subject required"
   }
   else{
      delete error.subject
  }

  if(!value.message){
   error.message="message required"
}
else{
   delete error.message
}

   return error;
}