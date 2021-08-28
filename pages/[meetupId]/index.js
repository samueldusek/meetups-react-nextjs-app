import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
      title="First meetup"
      address="Random address 1, some city 12345"
      description="Meetup description."
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
  // fetch data for a single object
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      image:
        "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      id: "m1",
      title: "First meetup",
      address: "Random address 1, some city 12345",
      description: "Meetup description.",
    },
  };
}

export default MeetupDetails;
