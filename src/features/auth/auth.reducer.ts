import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'app/store';
import { appActions } from 'app/app.reducer';
import { authAPI, LoginParamsType } from 'features/auth/auth.api';
import { clearTasksAndTodolists } from 'common/actions';
import {createAppAsyncThunk, handleServerAppError, handleServerNetworkError} from 'common/utils';

const login = createAppAsyncThunk<any, any>('auth/login',
	async (thunkAPI) => {
		const {dispatch} = thunkAPI
		try {
			const res = await appActions.setAppStatus({status: 'loading'})
			if (res.data.resultCode === 0) {
				dispatch(authActions.setIsLoggedIn({isLoggedIn: true}))
				dispatch(appActions.setAppStatus({status: 'succeeded'}))
			} else {
				handleServerAppError(res.data, dispatch)
			}
		} catch {

		}
	})

export const loginTC = (data: LoginParamsType): AppThunk => (dispatch) => {
	dispatch(appActions.setAppStatus({status: 'loading'}))
	authAPI.login(data)
		.then(res => {
			if (res.data.resultCode === 0) {
				dispatch(authActions.setIsLoggedIn({isLoggedIn: true}))
				dispatch(appActions.setAppStatus({status: 'succeeded'}))
			} else {
				handleServerAppError(res.data, dispatch)
			}
		})
		.catch((error) => {
			handleServerNetworkError(error, dispatch)
		})
}

const slice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: false
	},
	reducers: {
		setIsLoggedIn: (state, action: PayloadAction<{ isLoggedIn: boolean }>) => {
			state.isLoggedIn = action.payload.isLoggedIn
		}
	}
})

export const authReducer = slice.reducer
export const authActions = slice.actions


// thunks


export const logoutTC = (): AppThunk => (dispatch) => {
	dispatch(appActions.setAppStatus({status: 'loading'}))
	authAPI.logout()
		.then(res => {
				if (res.data.resultCode === 0) {
					dispatch(authActions.setIsLoggedIn({isLoggedIn: false}))
					dispatch(clearTasksAndTodolists())
					dispatch(appActions.setAppStatus({status: 'succeeded'}))
				} else {
					handleServerAppError(res.data, dispatch)
				}
			}
		)
		.catch((error) => {
			handleServerNetworkError(error, dispatch)
		})
}

