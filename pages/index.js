import MeetupList from "../components/meetups/MeetupList";

const Dummy_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?t=st=1714628967~exp=1714632567~hmac=9ce559c61f89fd842fa339159403cde79069e143ee8fb69d57ca9fb920c7fd09&w=826",
    address: "Some Address, 5, 1234, city",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?t=st=1714628967~exp=1714632567~hmac=9ce559c61f89fd842fa339159403cde79069e143ee8fb69d57ca9fb920c7fd09&w=826",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A third Meetup",
    image:
      "https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?t=st=1714628967~exp=1714632567~hmac=9ce559c61f89fd842fa339159403cde79069e143ee8fb69d57ca9fb920c7fd09&w=826",
    description: "This is a third meetup!",
  },
];

function HomePage() {
  return (
   
      <MeetupList meetups={Dummy_MEETUPS} />
   
  );
}

export default HomePage;
