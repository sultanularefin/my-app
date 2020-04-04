import React from "react";


import auth from 'firebase/auth';
import * as firebase from "firebase";


const UserDetail: React.FC = () => {

    // const [userDetailState,setUserDetailState]='';

    const userDetail = firebase.auth().currentUser;

    //console.log('at UserDetail :____________________',firebase.auth().currentUser);

    //alert(JSON.stringify(firebase.auth().currentUser))



        if((firebase.auth())&& (firebase.auth().currentUser)){
       return(
            <div>

                <h2>"Welcome to our app: Mr. :"

                </h2>
                <h3>{userDetail.email}</h3>



            </div>)}
        else{
            return(

                <div>
                    <h2>"Welcome to our app: Mr. : Anonymous"

                    </h2>
                </div>
            )
        }






}

export default UserDetail
