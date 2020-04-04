import React from "react";


import auth from 'firebase/auth';
import * as firebase from "firebase";


const UserDetail: React.FC = () => {

    console.log('at UserDetail :____________________',firebase.auth().currentUser);

   alert(JSON.stringify(firebase.auth().currentUser))

    return(
        <div>"please check console."</div>
    )
}

export default UserDetail
