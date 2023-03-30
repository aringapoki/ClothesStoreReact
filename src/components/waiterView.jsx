function MenuTypeButton() {
  return (
    <div>
      <button className="desayunoButton">DESAYUNO</button>
      <button className="menuDiarioButton">MENÚ DIARIO</button>
    </div>
  );
}

function MenuProducts() {
  return (
    <div>
      <button>espresso</button>
      <button>americano</button>
      <button>macchiato</button>
      <button>capuccino</button>
      <button>latte</button>
      <button>mocaccino</button>
      <button>filtrado</button>
    </div>
  );
}

function Order() {
    return (
        <div>
        <article>articulo 1</article>
        <article>articulo 2</article>
        <article>articulo 3</article>
        <article>articulo 4</article>
        <button>ENVIAR A COCINA</button>
    </div>
    )
}

function CreateWaiterView (){
return (
    <div>
    <MenuTypeButton/>
    <MenuProducts/>
    <Order/>
    </div>
)
}

export default CreateWaiterView
