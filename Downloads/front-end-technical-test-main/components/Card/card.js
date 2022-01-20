import * as S from './Card.styles';

const Card = ({ children, title, text, icon }) => {
  return (

  <S.Tile>
  <S.Card>
  <S.Header>
      <S.Icon src={icon}></S.Icon>
          <S.Title >{title}</S.Title>
        </S.Header>
        <S.Text>{text}</S.Text>
        {/* {children && <S.Body>{children}</S.Body>} */}
  </S.Card>
  </S.Tile>
  )
};


export default Card;
