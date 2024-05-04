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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// to help with pre-rendering Next js provides a function getStaticProps(), this function is exported to pages folder
// This functions runs during the build process

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: Dummy_MEETUPS
    },
    revalidate: 1
  };
}

// // Alternative to getStatic props
// // It runs on the server after deployment
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API
//   return {
//     props: {
//       meetups: Dummy_MEETUPS,
//     },
    
//   };
// }



export default HomePage;

// import { useState, useEffect } from "react";
// function HomePage() {
//   const [loadedMeetups, setLoadedMeetups] = useState([]);

//   useEffect(() => {
//     // send a http request and fetch data
//     setLoadedMeetups(Dummy_MEETUPS);
//   }, []);
//   return <MeetupList meetups={loadedMeetups} />;
// }

// // to help with pre-rendering Next js provides a function getStaticProps(), this function is exported to pages folder

// export default HomePage;
