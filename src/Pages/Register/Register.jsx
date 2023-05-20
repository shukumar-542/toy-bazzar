import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile, getAuth } from 'firebase/auth';
import app from "../../Firebase/Firebase.config";



const auth = getAuth(app)
const Register = () => {
    const { createUserWithEMail, setUser, user } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value
        const photo = form.Photo.value

        setError('')
        setSuccess('')
        if (!email) {
            setError('Enter Your email');
            return
        }
        if (!pass) {
            setError('Enter Your Password')
            return
        }

        if (pass.length < 6) {
            setError('password length must be 6 character');
            return
        }

        createUserWithEMail(email, pass)
            .then(result => {
                const loggedUser = result.user
                updateUser(name, photo)
                setUser({ ...user, displayName: name, photoURL: photo })
                setSuccess('user Create successfully')
                navigate(from)
                setError('')
                console.log(loggedUser);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            })
    }

    // update users display name and photoURl
    const updateUser = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    return (
        <div className="py-10">
            <div className="bg-white w-1/2 mx-auto rounded py-10 border-2 border-[#C1D72D] ">
                <div className="w-3/4 mx-auto py-10 ">
                    <h1 className="text-left my-5 text-2xl font-bold">Please Register</h1>
                    <form className="space-y-4 " onSubmit={handleRegister}>
                        <div className="border-b-2">
                            <input type="text" name="name" placeholder="Enter Name" className="input w-full  " />
                        </div>
                        <div className="border-b-2">
                            <input type="email" name="email" placeholder="Enter Email" className="input w-full  " />
                        </div>
                        <div className="border-b-2">
                            <input type="password" name="password" placeholder="Enter password" className="input w-full  " />
                        </div>
                        <div className="border-b-2">
                            <input type="url" name="Photo" placeholder="Photo Url" className="input w-full  " />
                        </div>


                        <button className="btn primary-btn w-full" >Register</button>
                    </form>

                    <div className="mt-5">Already have account? <span className="text-sky-600"><Link to='/login'>Login</Link></span></div>

                    <div className='text-center my-2 text-red-500'>
                        {error}
                    </div>
                    <div className='text-center my-2 text-green-500'>
                        {success}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;