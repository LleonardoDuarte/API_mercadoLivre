import React, { useState } from "react";
import { getItem, SetItem } from "../services/LocalStorageFuncs";
import { BsFillCartDashFill } from "react-icons/bs";
import { ProductsArea } from "../Css/Style";
import { Header } from "../components/Header";

export const Cart = () => {
  const [data, setData] = useState(getItem("carrinhoYt") || []);

  //Função para remover item do carrinho
  const removeItem = (obj) => {
    const arrFilter = data.filter((e) => e.id !== obj.id);
    setData(arrFilter);
    SetItem("carrinhoYt", arrFilter); //aqui eu salvo o novo array para retirar o item dos selecionados na loja
  };

  const subTotal = data.reduce((acc, cur) => acc + cur.price, 0);
  return (
    <div>
      <Header />
      <h3>{`Total: R$${subTotal}`}</h3>
      <ProductsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt={e.title} />
            <h4>{`R$: ${e.price}`}</h4>
            <button onClick={() => removeItem(e)}>
              <BsFillCartDashFill />
            </button>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
};
