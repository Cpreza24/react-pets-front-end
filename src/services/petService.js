//Holds BASE_URL for connection to the API
// src/services/petService.js

const BASE_URL = 'http://localhost:3000/pets';

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const create = async (formData) => {
  try {
    const res = await fetch(BASE_URL, {
      // We specify that this is a 'POST' request
      method: 'POST',
      // We're sending JSON data, so we attach a Content-Type header
      // and specify that the data being sent is type 'application/json'
      headers: {
        'Content-Type': 'application/json',
      },
      // The formData, converted to JSON, is sent as the body
      // This will be received on the back-end as req.body
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export { index, create };
