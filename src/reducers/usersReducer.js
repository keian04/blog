export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};

//add element to array
// [...state, "new element"]

//replaceing an element to array
//state.map(el => el === "old element" ? "new element" : el)

//removing an element to array
//state.filter(el => el !== "element to delete")

//add/update property to an object
//{...state, name:"Allen"}

//removing a property (use loadash)
//_.omit(state,"property to remove")
