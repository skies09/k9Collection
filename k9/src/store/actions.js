import axios from 'axios';

// Dog action type constants
export const FETCH_DOG_DATA = 'FETCH_DOG_DATA';
export const FETCH_DOG_DATA_SUCCESS = 'FETCH_DOG_DATA_SUCCESS';
export const FETCH_DOG_DATA_FAILURE = 'FETCH_DOG_DATA_FAILURE';
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS';
export const FETCH_GROUPS_FAILURE = 'FETCH_GROUPS_FAILURE';
export const FETCH_BREEDS = 'FETCH_BREEDS';
export const FETCH_BREEDS_SUCCESS = 'FETCH_BREEDS_SUCCESS';
export const FETCH_BREEDS_FAILURE = 'FETCH_BREEDS_FAILURE';

// Dog action creators
const getDogDataRequest = () => ({
  type: FETCH_DOG_DATA,
});

const getDogDataSuccess = (data) => ({
  type: FETCH_DOG_DATA_SUCCESS,
  payload: data,
});

const getDogDataFailure = (error) => ({
  type: FETCH_DOG_DATA_FAILURE,
  payload: error,
});

const getGroupsRequest = () => ({
  type: FETCH_GROUPS,
});

const getGroupsSuccess = (data) => ({
  type: FETCH_GROUPS_SUCCESS,
  payload: data,
});

const getGroupsFailure = (error) => ({
  type: FETCH_GROUPS_FAILURE,
  payload: error,
});

const getBreedsRequest = () => ({
  type: FETCH_BREEDS,
});

const getBreedsSuccess = (data) => ({
  type: FETCH_BREEDS_SUCCESS,
  payload: data,
});

const getBreedsFailure = (error) => ({
  type: FETCH_BREEDS_FAILURE,
  payload: error,
});


// Get dog data action
export const getDogData = () => {
  return (dispatch) => {
    dispatch(getDogDataRequest());
    axios.get('http://127.0.0.1:8000/dogs/') 
      .then((response) => {
        dispatch(getDogDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getDogDataFailure(error.message));
      });
  };
};

// Get dog groups action
export const getGroups = () => {
  return (dispatch) => {
    dispatch(getGroupsRequest());
    axios.get('http://127.0.0.1:8000/dogs/groups') 
      .then((response) => {
        dispatch(getGroupsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getGroupsFailure(error.message));
      });
  };
};

// Get dog breeds of group action
export const getBreeds = (group) => {
  return (dispatch) => {
    dispatch(getBreedsRequest());
    axios.get(`http://127.0.0.1:8000/dogs/${group}/`) 
      .then((response) => {
        dispatch(getBreedsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getBreedsFailure(error.message));

      });
  };
};