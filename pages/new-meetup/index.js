// our-domain.com/new-meetup
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
const router  = useRouter();

  async function addMeetUpHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetups", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }
  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
}

export default NewMeetUpPage;
