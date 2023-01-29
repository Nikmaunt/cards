const initState = {
   auth: '',
}

export const authReducer = (state = initState, action: AuthActionType) => {
    switch (action.type) {
        case "AUTH": {
            return {...state}
        }
        default:
            return state
    }
}

export type AuthActionType = ReturnType<typeof authAC >

export const authAC = (auth: string)  => ({
    type: 'AUTH',
    auth,
}) as const
