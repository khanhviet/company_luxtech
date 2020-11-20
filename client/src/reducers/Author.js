const initialBook = {
    author: []
}

export default function AuthorReducer(state = initialBook, action) {
    switch (action.type) {
        case 'ADD_AUTHOR':
            {
                console.log(state)
                return state;
            }
        case 'REMOVE_AUTHOR': return state;
        case 'UPDATE_AUTHOR': {
            return state;
        }
    }
}
