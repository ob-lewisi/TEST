import axios from "axios";
import { useEffect, useState} from 'react';
import * as S from './index.styles'
import Card from '../components/Card/card'


export default function Home() {

  const [data, setData] = useState(null);

useEffect(() => {
  axios.get('https://api.punkapi.com/v2/beers').then((response) => {
    setData(response.data);
  });
}, []);

if (!data) return null;

  return (
  <>
  <S.Layout>
    <S.BaseHeader>Punk IPA</S.BaseHeader>  
    <S.Content>
      <S.Main>
        <S.Grid>
          <S.Row>
        <S.Col >  
        { data &&
          data.map((item) => (
            <>
              <Card title={item.name} text={item.tagline} icon={item.image_url}></Card>
              <img scr={item.image_url}></img>
              </>
          ))}
       </S.Col>
     
        </S.Row>
        </S.Grid>
      </S.Main>
    </S.Content>
  </S.Layout>
 


  </>
  )
}
