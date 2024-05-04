import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://hyderfida14:SAGxJ4MOI99aSOZK@cluster0.vlm758u.mongodb.net/meetups?retryWrites=true&w=majority"  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;


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
