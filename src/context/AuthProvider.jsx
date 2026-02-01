import { useState, useEffect } from "react";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, // 1. Spelling Fixed
    signInWithEmailAndPassword, 
    signOut 
} from "firebase/auth";
import AuthContext from "../context/AuthContext.jsx";
import app from "../firebase/firebase.init.js";
// 2. Duplicate getAuth import removed

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);

    const handleRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        // 3. Spelling Fixed here as well
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, [auth]); // Added auth dependency

    // 4. Fixed variable name: 'Loading' -> 'loading'
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-infinity loading-xl"></span>
            </div>
        );
    }

    const authInfo = {
        user,
        loading,
        handleRegister,
        handleLogin,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;