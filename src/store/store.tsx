import {
	createRouterMiddleware,
	initialRouterState,
	routerReducer,
} from 'connected-next-router';
import { RouterState } from 'connected-next-router/types';
import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper';
import { AppContext } from 'next/app';
import Router from 'next/router';
import {
	AnyAction,
	applyMiddleware,
	combineReducers,
	createStore,
	Reducer,
} from 'redux';
import { format } from 'url';

export type AppState = {
	router: RouterState;
};

const bindMiddleware = middleware => {
	if (process.env.NODE_ENV !== 'production') {
		const { composeWithDevTools } = require('redux-devtools-extension');

		return composeWithDevTools(applyMiddleware(...middleware));
	}

	return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers<AppState>({
	router: routerReducer,
});

const reducer: Reducer<AppState, AnyAction> = (
	state: AppState,
	action: AnyAction,
): AppState => {
	if (action.type === HYDRATE) {
		const hydratedState = {
			...state,
			...action.payload,
		};

		if (typeof window !== 'undefined' && state?.router) {
			hydratedState.router = state.router;
		}

		return hydratedState;
	}

	return combinedReducer(state, action);
};

const initStore: MakeStore<AppState> = (context: AppContext) => {
	const routerMiddleware = createRouterMiddleware();
	const { asPath, pathname, query } = context.ctx || Router.router || {};
	const url = format({ pathname, query });

	const initialState: Partial<AppState> = {
		router: initialRouterState(url, asPath),
	};

	return createStore(
		reducer,
		initialState as AppState,
		bindMiddleware([routerMiddleware]),
	);
};

export const wrapper = createWrapper(initStore);
