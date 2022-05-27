
const Menu = ({ newMenu, setNewMenu }) => {
  return (
    <div>
      {newMenu.map((el) => (
        <div className="card" key={el.id}>
          <img src={el.img} alt="food" />
          <div className="food">
            <h3>
              {el.title} <span id="price">$ {el.price}</span>
            </h3>
            <p>{el.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Menu;
