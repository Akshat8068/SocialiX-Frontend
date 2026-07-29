import { storyHighlights } from "@/data/profileData";


const StoryHighlights = () => {


    return (

        <div className="
flex gap-6
overflow-x-auto
py-4
">


            {
                storyHighlights.map((story) => (

                    <div
                        key={story.id}
                        className="
min-w-[80px]
text-center
"
                    >


                        <div
                            className="
h-16 w-16
mx-auto
rounded-full
bg-gradient-to-tr
from-primary
to-secondary
p-1
"
                        >

                            <img
                                src={story.cover}
                                alt={story.title}
                                className="
h-full w-full
rounded-full
object-cover
border-2
border-background
"
                            />


                        </div>


                        <p className="mt-2 text-sm">
                            {story.title}
                        </p>


                    </div>


                ))
            }


        </div>

    )

}


export default StoryHighlights;