import React from 'react';
import bird from '../../img/bird.jpeg';

const Item = () => {
  return (
    <div className="item">
      <img className="item__image" src={bird} alt="文鳥の画像" />
      <div className="item__info">
        <h3>文鳥</h3>
        <p>2000円</p>
      </div>
    </div>
  );
};

export default Item;
