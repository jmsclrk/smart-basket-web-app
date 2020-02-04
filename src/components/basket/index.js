import React from 'react';
import './styles.scss'

export default function Basket(props) {
  return (
    <div id="basket-component">
      <h4 className="basket-title">BASKET</h4>
      { props.items.length < 1 ? (
        <h3>Nothing added yet.</h3>
      ) : (
        <React.Fragment>
          { props.items.map((i) => {
            return <h3 key={String(i.id)}>1 x {i.name} ({i.amount} {i.measurement})</h3>
          })}
        </React.Fragment>
      )}
    </div>
  )
}
