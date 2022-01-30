import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

interface ICard {
  title: string;
  content: string;
  color?: string;
  path: string;
}

const CardComponent:FC<ICard> = ({title, content, color, path}) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(path)} className={'card_'}>
      <div className={'card_title'}>
        {title}
      </div>
      <div className={'card_content'}>
        {content}
      </div>
      {color && <div style={{backgroundColor: color}} className={'card_color'} />}
    </div>
  );
};

export default CardComponent;
