


export default function Button({ children, onClickHandler }){
    return(
        <button
            className='add-to-favorites-btn'
            onClick={onClickHandler}
        >
            {children}
        </button>
    )
}

/*
onClick={() => handleAddFavorite(recipe)}
*/