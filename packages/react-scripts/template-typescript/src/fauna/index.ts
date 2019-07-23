import faunadb, { query as q } from 'faunadb';

//Now Updated for use with faunaDB 2.7.0
//
//First ! ! install faunadb either
//yarn add faunadb
//or
//npm i faunadb

//Second You will need a key for your fauna database
//Go to FaunaDb https://dashboard.fauna.com/ and set up your account and a database and then create a key
//Use your key to replace the placeholder text in .env.example
//Then rename file  .env.example   to   .env

//To use fauna we initialize a client.
const client = new faunadb.Client({ secret: process.env.REACT_APP_FAUNA_KEY });

//And here are a few general functions written out as examples to get started
const addNewCollection = async (newCollection: string) => {
  try {
    const ret = await client.query(q.CreateCollection({ name: newCollection }));
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

//In addSingleRecord here below we are passing the relevant collectionName and then the item as an object and assigning it the name of data in an effort to make this function reusable **This leaves it up to us to pass the same object shape or the shapes of our items will diverge
//Writing multiple "add" functions like addUser addBook addWidget and having more explicit shape such as { data: { title: "" author:""}} can help you enforce a schema / uniform shape for your items
//https://docs.fauna.com/fauna/2.7.0/tutorials/crud#post
const addSingleRecord = async (collectionName: string, data: object) => {
  try {
    const ret = await client.query(
      q.Create(q.Collection(collectionName), { data })
    );
    return ret;
  } catch (err) {
    return console.log(err);
  }
};

const deleteSingleRecordByRef = async (
  collectionName: string,
  itemRef: string
) => {
  try {
    const ret = await client.query(
      q.Delete(q.Ref(q.Collection(collectionName), itemRef))
    );
    console.log('Deleted: ' + itemRef);
    return ret;
  } catch (err) {
    return console.log(err);
  }
};
const getSingleRecordByRef = async (
  collectionName: string,
  itemRef: string
) => {
  try {
    const ret = await client.query(
      q.Get(q.Ref(q.Collection(collectionName), itemRef))
    );
    return ret;
  } catch (err) {
    return console.log(err);
  }
};

export {
  addNewCollection,
  addSingleRecord,
  deleteSingleRecordByRef,
  getSingleRecordByRef,
  q,
};

export default client;
