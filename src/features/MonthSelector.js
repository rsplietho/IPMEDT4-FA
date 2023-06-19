// Action types
const UPDATE_TEXT = 'UPDATE_TEXT';
const TOGGLE_FIRST_SVG = 'TOGGLE_FIRST_SVG';
const TOGGLE_SECOND_SVG = 'TOGGLE_SECOND_SVG';
// Action creators
export const updateText = (text) => {
  return {
    type: UPDATE_TEXT,
    payload: text,
  };
};

export const toggleFirstSVG = () => {
  return {
    type: TOGGLE_FIRST_SVG,
  };
};
export const toggleSecondSVG = () => {
  return {
    type: TOGGLE_FIRST_SVG,
  };
};

// Reducer
const initialState = {
  text: 'Current month',
  showFirstSVG: true,
  showSecondSVG: true,
};

export const monthReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case TOGGLE_FIRST_SVG:
      return {
        ...state,
        showFirstSVG: !state.showFirstSVG,
      };
    case TOGGLE_SECOND_SVG:
      return {
        ...state,
        showFirstSVG: !state.showSecondSVG,
      };
    default:
      return state;
  }
};
