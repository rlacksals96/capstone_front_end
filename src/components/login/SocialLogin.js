// import {useHistory} from 'react-router-dom'
// const {Kakao}=window;
//
// function SocialLogin(){
//   const history=useHistory()
//   const kakaoLoginClickHandler=()=>{
//     Kakao.Auth.login({
//       success: function (authObj){
//         fetch(`${KAKAO_LOGIN_API_URL}`,{
//           method:"POST",
//           body:JSON.stringify({
//             access_token:authObj.access_token,
//           }),
//         })
//           .then(res=>res.json())
//           .then(res=>{
//             localStorage.setItem("Kakao_token",res.access_toekn);
//             if(res.access_token){
//               alert("로그인 성공")
//               history.push("/rooms")
//             }
//           })
//       },
//       fail:function (err){
//         alert(JSON.stringify(err))
//       },
//     })
//   }
//   return(
//     <div>
//       <button className="btn_kakao" onClick={kakaoLoginClickHandler}>카카오로 로그</button>
//     </div>
//   )
// }
// export default SocialLogin