import { Link } from 'react-router-dom';
import logo from '../../assets/download.png'
const Login = () => {
    const handleLogin = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email  = form.email.value;
        const pass = form.pass.value;
        console.log(email,pass);
        

    }
    return (
        <div className="py-10">
            <div className="bg-white w-1/2 mx-auto rounded py-10 border-2 border-[#C1D72D] ">
                <div className="w-3/4 mx-auto py-10 ">
                    <h1 className="text-left my-5 text-2xl font-bold">Please Login</h1>
                    <form className="space-y-4 " onSubmit={handleLogin}>

                        <div className="border-b-2">
                            <input type="text" name="email" placeholder="User Name Or Email" className="input w-full  " />
                        </div>
                        <div className="border-b-2">
                            <input type="password" name="pass" placeholder="password" className="input w-full  " />
                        </div>


                        <button className="btn primary-btn w-full" >Login</button>
                    </form>
                        <div className="divider">OR</div>
                        <button className="btn btn-outline w-full"
                       
                        >
                            <span className="w-5 mr-10">
                                <img src={logo} alt="" />
                            </span>
                            Login With Google</button>
                    <div className="mt-5">Do not have account? <span className="text-sky-600"><Link to='/register'>Register</Link></span></div>
                </div>
            </div>
        </div>
    );
};

export default Login;