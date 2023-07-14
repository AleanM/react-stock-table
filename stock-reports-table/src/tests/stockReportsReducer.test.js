import {
	FETCH_STOCK_REPORTS_REQUEST,
	FETCH_STOCK_REPORTS_SUCCESS,
	FETCH_STOCK_REPORTS_FAILURE,
	setCurrentPage,
} from "../redux/actions";
import stockReportsReducer, { initialState } from "../redux/reducers";

describe("stockReportsReducer", () => {
	it("should handle FETCH_STOCK_REPORTS_REQUEST", () => {
		const action = { type: FETCH_STOCK_REPORTS_REQUEST };
		const state = stockReportsReducer(undefined, action);
		expect(state).toEqual({
			currentPage: 1,
			error: null,
			loading: true,
			reports: [],
		});
	});

	it("should handle FETCH_STOCK_REPORTS_SUCCESS", () => {
		const reports = [];
		const action = { type: FETCH_STOCK_REPORTS_SUCCESS, payload: reports };
		const state = stockReportsReducer(undefined, action);
		expect(state).toEqual({
			currentPage: 1,
			error: null,
			loading: false,
			reports: [],
		});
	});

	it("should handle FETCH_STOCK_REPORTS_FAILURE", () => {
		const error = "Ошибка загрузки отчетов";
		const action = { type: FETCH_STOCK_REPORTS_FAILURE, payload: error };
		const state = stockReportsReducer(undefined, action);
		expect(state).toEqual({
			currentPage: 1,
			error: error,
			loading: false,
			reports: [],
		});
	});

	it("should handle SET_CURRENT_PAGE", () => {
		const pageNumber = 2;
		const action = setCurrentPage(pageNumber);
		const state = stockReportsReducer(undefined, action);
		expect(state).toEqual({
			currentPage: 2,
			error: null,
			loading: false,
			reports: [],
		});
	});
});
