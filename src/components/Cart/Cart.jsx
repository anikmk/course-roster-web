/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({ selectedCard, count,remaining,totalPrice}) => {
  return (
    <div>
      <h1 className="font-bold text-base text-blue-600 mb-4">Credit Hour Remaining: {remaining} hr</h1>
      <hr />
      <h2 className="my-2 font-bold text-black text-xl">Course Name</h2>
        <ol className="mb-3">
        {selectedCard.map((name, index) => (
            
                <li className="mb-2 text-gray-500" key={index}> {index+1}. {name.course_name}</li> 
        ))}
        </ol>
        <hr />
        <h2 className="my-4 font-medium text-gray-700">Total Credit Hour : {count}</h2>
        <hr />
        <h3 className="mt-3 font-medium text-gray-700">Total Price : {totalPrice}</h3>
      
    </div>
  );
};

export default Cart;
