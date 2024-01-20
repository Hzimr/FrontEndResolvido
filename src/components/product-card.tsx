import styled from "styled-components";

interface ProductCardProps {
  img: string;
  title: string;
  price: number;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;

  width: 256px;

  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0;

    > div {
      width: 228px;
      height: 1px;
      margin: 8px 0;
      padding: 0px;
      background: var(--shapes);
    }
  }
  
`

export function ProductCard(props: ProductCardProps){
  return (
    <Card>
      <img src={props.img} />   
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{(props.price/100).toLocaleString('pt-BR', { style:'currency', currency: 'BRL'})}</p>
      </div>
    </Card>
  )
}