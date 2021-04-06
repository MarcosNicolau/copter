import setDate from "./set-date";

const chartState = {
	data: {
		prices: [],
		timestamps: [],
	},
	ranges: {
		WEEKLY: "weekly",
		MONTHLY: "monthly",
		YEARLY: "yearly",
	},
	activeDate: "yearly",
	error: null,
};

const chartActions = {
	SET_DATA: "set-data",
	SET_DATE: "set-date",
	SET_ERROR: "set-error",
};

const chartReducer = (state, action) => {
	const payload = action.payload;
	switch (action.type) {
		case chartActions.SET_DATA:
			return {
				...state,
				data: {
					prices: payload.prices,
					timestamps: payload.timestamps,
				},
				activeDate: payload.activeDate,
				error: payload.error,
			};
		case chartActions.SET_DATE:
			return setDate(state, payload);
		case chartActions.SET_ERROR:
			return { ...state, error: payload };
		default:
			return { ...state };
	}
};

export default chartReducer;
export { chartState, chartActions };
