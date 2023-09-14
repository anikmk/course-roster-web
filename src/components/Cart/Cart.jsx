/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({ selectedCard, count,remaining,totalPrice}) => {
  return (
    <div>
      <h1>Credit Hour Remaining: {remaining} hr</h1>
      <hr />
      <h2>Course Name</h2>
        <ol>
        {selectedCard.map((name, index) => (
            
                <li key={index}> {index+1}. {name.course_name}</li>
          
            
          
        ))}
        </ol>
        <hr />
        <h2>Total Credit Hour : {count}</h2>
        <hr />
        <h3>Total Price : {totalPrice}</h3>
      
    </div>
  );
};

export default Cart;
