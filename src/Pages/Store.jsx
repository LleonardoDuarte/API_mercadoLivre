import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { getItem, SetItem } from "../services/LocalStorageFuncs";
import { ProductsArea } from "../Css/Style";
import { Header } from "../components/Header";

export const Store = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(getItem("carrinhoYt") || []);

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
      const response = await fetch(url);
      const objJson = await response.json();
      setData(objJson.results);
    };
    fetchApi();
  }, []);

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id == obj.id);
    if (element) {
      //se o item clicado for diferente do que ja estiver no carrinho eu posso adicionar ao carrinho
      const arrFilter = cart.filter((e) => e.id !== obj.id);
      setCart(arrFilter); //muda o carrinho para o novo valor
      SetItem("carrinhoYt", arrFilter);
    } else {
      setCart([...cart, obj]); //junto todos os itens que estao no carrinho e junta com o novo objeto
      SetItem("carrinhoYt", [...cart, obj]);
    }
  };

  return (
    <div>
      <Header />
      <ProductsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="" />
            <h4>{`R$:${e.price}`}</h4>
            <button onClick={() => handleClick(e)}>
              {cart.some((itemCart) => itemCart.id == e.id) ? (
                <BsFillCartCheckFill />
              ) : (
                <BsFillCartPlusFill />
              )}
            </button>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
};
