import reviews from "./reviews";

const reducer = (state, action) => {
  if (action.type === "INIT") {
    return {
      ...state,
      people: reviews[0],
    };
  }
  if (action.type === "NEXT_PERSON") {
    const index = action.payload - 1;
    if (index + 1 >= reviews.length) {
      return {
        ...state,
        people: reviews[0],
      };
    } else {
      return {
        ...state,
        people: reviews[index + 1],
      };
    }
  }
  if (action.type === "PREV_PERSON") {
    const index = action.payload - 1;
    if (index - 1 < 0)
      return {
        ...state,
        people: reviews[reviews.length - 1],
      };
    else {
      return {
        ...state,
        people: reviews[index - 1],
      };
    }
  }
  if (action.type === "RANDOM_PERSON") {
    const len = reviews.length;
    const index = parseInt(Math.random() * len);
    console.log(index);
    return {
      ...state,
      people: reviews[index],
    };
  }
};
export default reducer;
