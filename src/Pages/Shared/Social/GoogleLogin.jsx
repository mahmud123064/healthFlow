import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext,} from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";



const GoogleLogin = () => {

   const { googleSignIn } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"

    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your have successfully Logged In',
                    showConfirmButton: false,
                    timer: 1500
                })

                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true })

                    })
            })
    }

    return (
        <div>
            {/* <div>
                <button onClick={handleGoogleSignIn} className='btn rounded-full w-[70%] md:w-[55%] hover:bg-[#143341] text-white primary_bg'><FaGoogle /> GOOGLE</button>
            </div> */}

            <div className="flex items-center justify-center">
                <button onClick={handleGoogleSignIn} className="bg-[#13A2B7] border border-white rounded-lg px-2 py-2 text-white flex items-center gap-3 "><FcGoogle size={28} />Login With Google</button>
            </div>
        </div>
    );
};

export default GoogleLogin;