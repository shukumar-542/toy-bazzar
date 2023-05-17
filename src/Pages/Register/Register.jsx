import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister =(e)=>{
        e.preventDefault()
        const form = e.target;
        const name =  form.name.value;
        const email = form.email.value;
        const date = form.date.value
        const pass = form.password.value
        const description = form.description.value
        console.log(name,email,date,pass,description);


        

        


    }
    return (
        <div className="py-10">
           <div className="bg-white w-1/2 mx-auto rounded py-10 border-2 border-[#C1D72D] ">
            <div className="w-3/4 mx-auto py-10 ">
                <h1 className="text-left my-5 text-2xl font-bold">Please Register</h1>
                <form  className="space-y-4 " onSubmit={handleRegister}>
                    <div className="border-b-2">
                        <input type="text" name="name"  placeholder="Enter Name" className="input w-full  " />
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

            </div>
        </div>
     </div>
    );
};

export default Register;