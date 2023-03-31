import { client, iceCreamCollection } from './mongoConnect.js';

// connect to db - or create if there is none

const addIcecream = async () => {
  const myIcecream = {
    singleScoop: 3.99,
    doubleScoop: 4.99,
    waffleCone: 5.99,
    sundae: 6,
    bananaSplit:10,
  };
  try {
    await client.connect();
    const addIcecream = await iceCreamCollection.insertOne(myIcecream);
    console.log(addIcecream);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

addIcecream()
