import TutorCard from "@/components/modules/homePage/TutorCard";
import { tutorService } from "@/services/tutor.service";
import { TutorProfile } from "@/types/tutor.type";


export default async function Home() {

  const { data } = await tutorService.getTutors();

  console.log(data)

  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-5">
      {
        data?.data?.map((tutor: TutorProfile) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))
      }
    </div>
  );
}
