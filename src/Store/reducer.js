const INITIAL_STATE = {
    name: 'khatumal',
    age: 21
}

const reducer = (state = INITIAL_STATE, action) => {
    if (action.type === "UPDATENAME") {
        state.name = 'kamal'
    }

    console.log(state.name)
    switch(action.type) {
        case 'UPDATENAME': state.name = "kailash";
        break
        default: state.name = "khatumal"
    }
}
export default reducer;