import {
	FETCH_DOG_DATA,
	FETCH_DOG_DATA_SUCCESS,
	FETCH_DOG_DATA_FAILURE,
	FETCH_GROUPS,
	FETCH_GROUPS_SUCCESS,
	FETCH_GROUPS_FAILURE,
	FETCH_BREEDS,
	FETCH_BREEDS_FAILURE,
	FETCH_BREEDS_SUCCESS,
} from "./actions";

const initialDogState = {
	data: null,
	loading: false,
	error: null,
};

const reducer = (state = initialDogState, action) => {
	switch (action.type) {
		case FETCH_DOG_DATA:
			return { ...state, loading: true, error: null };
		case FETCH_DOG_DATA_SUCCESS:
			return { ...state, loading: false, data: action.payload };
		case FETCH_DOG_DATA_FAILURE:
			return { ...state, loading: false, error: action.payload };
		case FETCH_GROUPS:
			return { ...state, loading: true, error: null };
		case FETCH_GROUPS_SUCCESS:
			return { ...state, loading: false, data: action.payload };
		case FETCH_GROUPS_FAILURE:
			return { ...state, loading: false, error: action.payload };
		case FETCH_BREEDS:
			return { ...state, loading: true, error: null };
		case FETCH_BREEDS_SUCCESS:
			return { ...state, loading: false, data: action.payload };
		case FETCH_BREEDS_FAILURE:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default reducer;
