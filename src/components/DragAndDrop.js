import React , { useState } from 'react'

const Drag = () => {
    const [cardList, setCardList] = useState([
        {id: 1, order: 1, text: 'Card 1'},
        {id: 2, order: 2, text: 'Card 2'},
        {id: 3, order: 3, text: 'Card 3'},
        {id: 4, order: 4, text: 'Card 4'}
    ])
    const [currentCard, setCurrentCard] = useState(null)
    function dragStartHandler(e, card){
        setCurrentCard(card)
    }
    function dragEndHandler(e){
    }
    function dragOverHandler(e){
        e.preventDefault()

    }
    function dropHandler(e, card){
        e.preventDefault()
        setCardList(cardList.map(c => {
            if( c.id === card.id){
                return { ...c , order: currentCard.order}
            }
            if( c.id === currentCard.id){
                return { ...c, order: card.order}
            }
            return c
        }))
    }
    function sortCards(a,b){
        if (a.order > b.order){
            return 1
        }else{
            return -1
        }
    }
    return (
        <div className="cards">
             {cardList.sort(sortCards).map(card => 
                 <div 
                 key = {card.id}
                 onDragStart = {(e) => dragStartHandler(e, card)}
                 onDragLeave = {(e) => dragEndHandler(e)}
                 onDragEnd = {(e) => dragEndHandler(e)}
                 onDragOver = {(e) => dragOverHandler(e)}
                 onDrop = {(e) => dropHandler(e, card)}
                 draggable={true} 
                 className="cards__item">
                     {card.text}
                 </div>
             )}
        </div>
    )
}

export default Drag