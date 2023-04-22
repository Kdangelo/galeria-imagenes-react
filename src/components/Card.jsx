const Card = ( { title, descript} ) => {
  return (
    <div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2017/06/24/02/56/art-2436545_1280.jpg" alt="" />
      </div>
      <div>
        <h3> {title} </h3>
        <p> {descript} </p>
      </div>
    </div>
  );
}

export default Card;