
export function fetchEvents() {
    return {
      type: FETCH_EVENTS
    }
}

export function fetchEventsFailure(error) {
  return {
    type: FETCH_EVENTS_FAILURE,
    error 
  }
}

export function fetchEventsSuccess() {
  return {
    type: FETCH_EVENTS_SUCCESS
  }
}

const initialState = {
  isFetching: true,
  error: ''
}

export default events(state = initialState, action) {
  switch(action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: ''
      }
    default:
      return state
  }
}