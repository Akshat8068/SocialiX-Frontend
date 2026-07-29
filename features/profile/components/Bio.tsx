
const Bio = () => {

    return (

        <div className="max-w-xl">

            <p className="leading-relaxed">
                {profile.bio}
            </p>


            <a
                href={profile.website}
                className="
 mt-3
 block
 text-secondary
 font-semibold
 hover:underline
 "
            >
                {profile.website}
            </a>


        </div>

    );

};


export default Bio;