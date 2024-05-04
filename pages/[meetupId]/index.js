import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?t=st=1714628967~exp=1714632567~hmac=9ce559c61f89fd842fa339159403cde79069e143ee8fb69d57ca9fb920c7fd09&w=826"
      title="A first meet up"
      address="Some address 5, 123, mumbai"
      description="This is our first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?t=st=1714628967~exp=1714632567~hmac=9ce559c61f89fd842fa339159403cde79069e143ee8fb69d57ca9fb920c7fd09&w=826",
        id: meetupId,
        title: "A first meet up",
        address: "Some address 5, 123, mumbai",
        description: "This is our first meetup",
      },
    },
  };
}

export default MeetupDetails;
