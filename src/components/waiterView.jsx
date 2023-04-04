import data from "../../data.json";

const products = data.products;

function MenuTypeButton() {
  return (
    <div>
      <button className="desayunoButton">DESAYUNO</button>
      <button className="menuDiarioButton">MENÚ DIARIO</button>
    </div>
  );
}

//falta agregar evento onClick para que sume
function MenuProducts() {
  return (
    <div>
      {products.map((product) =>
      <button className="productButton">{product.name} {product.price}</button>)}      
    </div>
  );
}

const order = [];
function Order() {
  return (
    <div className="order">
      <article className="article">{products[0].name} {products[0].price} </article>
      <button className="orderButton">ENVIAR A COCINA</button>
    </div>
  );
}

function CreateWaiterView() {
  return (
    <div>
      <MenuTypeButton />
      <MenuProducts />
      <Order />
    </div>
  );
}

export default CreateWaiterView;
