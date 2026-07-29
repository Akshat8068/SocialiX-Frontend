import { dashboardStats } from "@/data/profileData";
import { BarChart3 } from "lucide-react";


const DashboardCard = () => {


    return (

        <section
            className="
rounded-3xl
bg-secondary/20
p-6
"
        >


            <div className="flex items-center gap-3">

                <div className="
rounded-lg
bg-white/30
p-2
">

                    <BarChart3 />

                </div>


                <h2 className="text-xl font-bold">
                    Professional Dashboard
                </h2>


            </div>



            <p className="mt-4 text-muted-foreground">
                Reach 24.5k accounts in the last 30 days.
                Your engagement is up by 12%.
            </p>



            <div className="mt-6 flex gap-10">


                <div>
                    <p className="text-sm text-muted-foreground">
                        Profile Visits
                    </p>

                    <h3 className="text-2xl font-bold">
                        {dashboardStats.profileVisits}
                    </h3>

                </div>



                <div>
                    <p className="text-sm text-muted-foreground">
                        Engagement
                    </p>

                    <h3 className="text-2xl font-bold">
                        {dashboardStats.engagement}%
                    </h3>

                </div>


            </div>


        </section>

    )

}


export default DashboardCard;