import axios from "axios";

export const getContacts = () => async dispatch => {
  const response = await axios.get(
    "http://localhost:8080/dsd/gettripplandetails"
  );
  dispatch({
    type: "GET_CONTACTS",
    payload: response.data
  });
};

export const getContact = (id) => async dispatch => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: "GET_CONTACT",
    payload: response.data
  });
};

export const deleteContact = (tripId) => async dispatch => {
  await axios.delete(`http://localhost:8080/dsd/deleteTrip/${tripId}`);
  dispatch({
    type: "DELETE_CONTACT",
    payload: tripId
  });
};

export const addContact = contact => async dispatch => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users/",
    contact
  );
  dispatch({
    type: "ADD_CONTACT",
    payload: response.data
  });
};
export const addTrip = (tripObj) => async dispatch => {
  const response = await axios.post(
    "http://localhost:8080/dsd/save/tripplan/track/details",
     tripObj
  );
  dispatch({
    type: "ADD_TRIP",
    payload: response.data
  });
};

export const updateContact = (contact) => async dispatch => {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  dispatch({
    type: "UPDATE_CONTACT",
    payload: response.data
  });
};
