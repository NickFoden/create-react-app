import faunadb, { query as q } from 'faunadb';

//First ! ! You will need a key for your fauna database
//Go to FaunaDb https://dashboard.fauna.com/ and set up your account and a database and then create a key
//Use your key to replace the placeholder text in .env.example
//Then rename file  .env.example   to   .env

//To use fauna we initialize a client.
const client = new faunadb.Client({ secret: process.env.REACT_APP_FAUNA_KEY });

//And here are a few general functions written out as examples to get started
const addNewClass = async newClass => {
  try {
    const ret = await client.query(q.CreateClass({ name: newClass }));
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

//In addSingleRecord here below we are passing the relevant className and then the item as an object and assigning it the name of data in an effort to make this function reusable **This leaves it up to us to pass the same object shape or the shapes of our items will diverge
//Writing multiple "add" functions like addUser addBook addWidget and having more explicit shape such as { data: { title: "" author:""}} can help you enforce a schema / uniform shape for your items
//https://docs.fauna.com/fauna/current/howto/crud#creating-a-post
const addSingleRecord = async (className, data) => {
  try {
    const ret = await client.query(q.Create(q.Class(className), { data }));
    return ret;
  } catch (err) {
    return console.log(err);
  }
};

const deleteSingleRecordByRef = async (className, itemRef) => {
  try {
    const ret = await client.query(
      q.Delete(q.Ref(q.Class(className), itemRef))
    );
    console.log('Deleted: ' + itemRef);
    return ret;
  } catch (err) {
    return console.log(err);
  }
};
const getSingleRecordByRef = async (className, itemRef) => {
  try {
    const ret = await client.query(q.Get(q.Ref(q.Class(className), itemRef)));
    return ret;
  } catch (err) {
    return console.log(err);
  }
};

export {
  addNewClass,
  addSingleRecord,
  deleteSingleRecordByRef,
  getSingleRecordByRef,
  q,
};

export default client;
