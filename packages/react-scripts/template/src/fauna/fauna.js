import faunadb, { query as q } from 'faunadb';

//update the .env.example to be .env or add REACT_APP_FAUNA_KEY to your existing .env

//Initialize the client
const client = new faunadb.Client({ secret: process.env.REACT_APP_FAUNA_KEY });

//Couple standard functions to get you started

const addNewClass = async newClass => {
  try {
    const ret = await client.query(q.CreateClass({ name: newClass }));
    return ret;
  } catch (err) {
    return console.error(err);
  }
};

//See the docs for the data object in this add record method. Examples show to add new items as { data: { title: "an object with the one field title of a new record" } }))
//Writing out the object shape and having different "add record" functions can help enforce a schema for your records
//But here we are taking an object and assigning it the name of data in an effort to make this function more flexible. **Up to us to pass it the same object shape each time or the shapes of our records may diverge
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
