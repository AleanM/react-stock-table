import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import StockReportsTable from "./StockReportsTable";

const App = () => {
	return (
		<Provider store={store}>
			<StockReportsTable />
		</Provider>
	);
};

export default App;
