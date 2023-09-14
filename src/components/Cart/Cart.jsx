/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({ selectedCard, count,remaining }) => {
  return (
    <div>
      <h1>Credit Hour Remaining: {remaining}</h1>
      <hr />
      <h2>Course Name</h2>
      
        {selectedCard.map((name, index) => (
          <ol>
                <li key={index}>{name.course_name}</li>
            </ol>
            
          
        ))}
        <hr />
        <h2>Total Credit Hour : {count}</h2>
      
    </div>
  );
};

export default Cart;
