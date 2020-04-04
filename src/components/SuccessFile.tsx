import * as React from 'react';
import * as firebase from 'firebase';
import app from 'firebase/app';

// These imports load individual services into the firebase namespace.
import auth from 'firebase/auth';
// import Login from './components/Login';

const SuccessFile: React.FC = () => {
    return (
        <div>
            <p>success.</p>
        </div>
    );
}

export default SuccessFile;

// export {}
