import {
	FETCH_STOCK_REPORTS_REQUEST,
	FETCH_STOCK_REPORTS_SUCCESS,
	FETCH_STOCK_REPORTS_FAILURE,
} from "./actions";

const initialState = {
	reports: [],
	loading: false,
	error: null,
	currentPage: 1
  };

  const stockReportsReducer = (state = initialState, action) => {
	switch (action.type) {
	  case FETCH_STOCK_REPORTS_REQUEST:
		return { ...state, loading: true, error: null };
	  case FETCH_STOCK_REPORTS_SUCCESS:
		return { ...state, loading: false, reports: action.payload };
	  case FETCH_STOCK_REPORTS_FAILURE:
		return { ...state, loading: false, error: action.payload };
	  case 'SET_CURRENT_PAGE':
		return { ...state, currentPage: action.payload };
	  default:
		return state;
	}
  };
  
  export default stockReportsReducer;