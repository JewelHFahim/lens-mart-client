import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/buyer/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsBuyer(data.isAdmin);
        });
    }
  }, [email]);
  return [isBuyer];
};

export default useBuyer;
