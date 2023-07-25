import { myAxios } from "./helper";
import { privateAxios } from "./helper";


export const signUp = (user) => {
  return myAxios.post("/auth/register", user).then((response) => response.data);
};


export const signUpAdmin = (user) => {
  return myAxios.post("/auth/registerAdmin", user).then((response) => response.data);
};

export const loginUser = (loginDetail) => {
  return myAxios
    .post("/auth/login", loginDetail)
    .then((response) => response.data);
};


export const sendOTP = (email) => {
  return myAxios.post("/send-otp", null , { params: {email} } ).then((resp) => resp.data);
}

export const verifyOTP = (email,otp) => {
  return myAxios.put("/verify-otp", null , { params: {email,otp} } ).then((resp) => resp.data);
}

export const setPass = (email,newPassword) => {
  return myAxios.put("/set-password", newPassword, { params: {email} }  ).then((resp) => resp.data);
}

// export const setPass = (email,newPassword) => {
//   return myAxios.put("/set-password", { params: {email} },{headers : {"newPassword":newPassword}}  ).then((resp) => resp.data);
// }

export const deleteUser = (id) => {
  console.log(`/auth/users/`+id);
  return privateAxios.delete(`/auth/users/`+id).then((resp) => resp.data);
}


export const updateUserdetails = (id,user) => {
  console.log(`/auth/users/`+id);
  return privateAxios.put(`/auth/users/`+id,user).then((resp) => resp.data);
}
