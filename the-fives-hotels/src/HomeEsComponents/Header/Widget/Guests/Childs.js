import "./Guest.scss";
export default function Childs({
  childAges,
  setChildAges,
  numberChilds,
  setNumberChilds,
  maxNumberChilds,
}) {
  const incrementChilds = (currentValue, setValue) => {
    setValue((prevValue) =>
      prevValue < maxNumberChilds ? prevValue + 1 : prevValue
    );
    if (currentValue < maxNumberChilds) {
      setChildAges([...childAges, 0]);
    
    }
    /* childAges es una prop que es un array vacio  vamos a agregar  un 0 a este array que va a ser igual al numberChilds */
  };

  const decrementChilds = () => {
    if (numberChilds > 0) {
      setNumberChilds(prevValue => prevValue - 1);
      setChildAges(prevChildren => prevChildren.slice(0, -1)); // Elimina el último niño
    }
  };
  const handleAgeChange = (index, newAge) => {
    const age = Math.max(0, Math.min(17, parseInt(newAge, 10) || 0));
    const updatedChildren = [...childAges];
    updatedChildren[index] = age;
    setChildAges(updatedChildren);
  };
  return (
    <article className="modal-guest__children-counter">
      <aside className="counter-guest-children">

      <label>Número de niños</label>
      <button
        type="button"
        className="modal-guest__button-minus"
        onClick={decrementChilds}
        >
        -
      </button>
      <input id="childrenInput" type="text" value={numberChilds} readOnly />

      <button
        type="button"
        className="modal-guest__button-plus"
        onClick={() => incrementChilds(numberChilds, setNumberChilds)}
        >
        +
      </button>
      </aside>
      <section className="modal-guest__children-conditions">
        <h3>Edad de los niños al momento del check-out </h3>
        <p>
        Al agregar la edad de sus hijos, podemos garantizar la mejor combinación de ropa de cama, el tamaño adecuado de la habitación y precios especiales.
        </p>
      </section>
      <div className="modal-child-ages">

      {childAges.map((child, index) => (
        <section className=" modal-guest__child" key={index}>
          <label className=" modal-guest__child--label">
            Niño {index + 1}
          </label>

          <select
            key={index}
            value={child}
            onChange={(e) => handleAgeChange(index, e.target.value)}
            className="modal-guest__child--select"
            >
            {Array.from({ length: 18 }, (_, i) => (
              <option
              key={i}
              value={i}
              className="modal-guest__child-age--option"
              >
                {i}
              </option>
            ))}
          </select>
        </section> 
      ))}
      </div>
    </article>
  );
}
