export const FETCH_STOCK_REPORTS_REQUEST = "FETCH_STOCK_REPORTS_REQUEST";
export const FETCH_STOCK_REPORTS_SUCCESS = "FETCH_STOCK_REPORTS_SUCCESS";
export const FETCH_STOCK_REPORTS_FAILURE = "FETCH_STOCK_REPORTS_FAILURE";

export const fetchStockReports = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_STOCK_REPORTS_REQUEST });

		fetch(
			"https://cloud.iexapis.com/v1/stock/aapl/insider-summary?token=YOUR_API_KEY",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				dispatch({ type: FETCH_STOCK_REPORTS_SUCCESS, payload: data });
			})
			.catch((error) => {
				dispatch({ type: FETCH_STOCK_REPORTS_FAILURE, payload: error.message });
			});
	};
};

export const setCurrentPage = (pageNumber) => {
	return { type: "SET_CURRENT_PAGE", payload: pageNumber };
};
