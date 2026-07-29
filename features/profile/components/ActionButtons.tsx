import { Edit, Share2 } from "lucide-react";


const ActionButtons = () => {

    return (

        <div className="flex gap-3">


            <button
                className="
flex items-center gap-2
rounded-xl
bg-primary
px-5 py-2.5
font-semibold
text-white
active:scale-95
"
            >

                <Edit size={16} />
                Edit Profile

            </button>



            <button
                className="
rounded-xl
border
px-3
"
            >

                <Share2 size={18} />

            </button>


        </div>

    );

};


export default ActionButtons;