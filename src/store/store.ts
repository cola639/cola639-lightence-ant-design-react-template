import {configureStore} from '@reduxjs/toolkit'
import {errorLoggingMiddleware} from '@app/store/middlewares/errorLogging.middleware'
import rootReducer from '@app/store/slices'

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(errorLoggingMiddleware),
})

console.log('store.getState', store.getState)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
