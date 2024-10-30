import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "Mosh",
    address: {
      city: "San Francisco",
      zipCode: 90872,
      residency: "Uk",
    },
  });
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 90865 },
    });
  };
  return (
    <div>
      <button onClick={handleClick}>clickme</button>
    </div>
  );
}
export default App;
// prefer not to use nested object
// the deeper the nested structure the complex the syntax is
