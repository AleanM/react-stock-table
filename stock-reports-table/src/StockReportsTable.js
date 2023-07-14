import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStockReports, setCurrentPage } from "./redux/actions";
import "./StockReportsTable.css";

const StockReportsTable = ({
	reports,
	loading,
	error,
	fetchStockReports,
	currentPage,
	setCurrentPage,
}) => {
	useEffect(() => {
		fetchStockReports();
	}, [fetchStockReports]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}
	//Количество отчётов на странице
	const reportsPerPage = 10;
	// Вычисление индекса последнего отчета на странице
	const indexOfLastReport = currentPage * reportsPerPage;
	// Вычисление индекса первого отчета на странице
	const indexOfFirstReport = indexOfLastReport - reportsPerPage;
	// Получение отчетов, соответствующих странице
	const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

	//Обработчик следующей страницы
	const handleNextPage = () => {
		setCurrentPage(currentPage + 1);
	};

	//Обработчик предыдущей страницы
	const handlePrevPage = () => {
		setCurrentPage(currentPage - 1);
	};
	//Форматирование если полученное число будет равно null
	const formatValue = (value) => {
		return value !== null ? value : "0";
	};
	//Форматирование если полученная дата будет равно null
	const formatDate = (date) => {
		return date !== null ? date : "Дата не найдена";
	};
	//Форматирование если полученная строка будет равно null
	const formatStr = (str) => {
		return str !== null ? str : "Пустая строка";
	};

	return (
		<div>
			<h1>Отчёт о купле-продажи акций в компании Apple</h1>
			<table>
				<thead>
					<tr>
						<th>№</th>
						<th>Полное имя физ.лица</th>
						<th>Всего купленных акций</th>
						<th>Всего проданных акций</th>
						<th>Дата обновления</th>
						<th>Наименование компании</th>
					</tr>
				</thead>
				<tbody>
					{currentReports.map((report, index) => (
						<tr key={report.updated}>
							<td>{index + 1}</td>
							<td>{formatStr(report.fullName)}</td>
							<td>{formatValue(report.totalBought)}</td>
							<td>{formatValue(report.totalSold)}</td>
							<td>{formatDate(report.date)}</td>
							<td>{formatStr(report.key)}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="button-container">
				{currentPage > 1 && (
					<button className="button" onClick={handlePrevPage}>
						Предыдущая страница
					</button>
				)}

				{indexOfLastReport < reports.length && (
					<button className="button" onClick={handleNextPage}>
						Следующая страница
					</button>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	reports: state.reports,
	loading: state.loading,
	error: state.error,
	currentPage: state.currentPage,
});

const mapDispatchToProps = (dispatch) => {
	return {
		fetchStockReports: () => dispatch(fetchStockReports()),
		setCurrentPage: (pageNumber) => dispatch(setCurrentPage(pageNumber)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(StockReportsTable);
