import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(
        `https://lens-mart-server-jewelhfahim.vercel.app/users/buyer/${email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setIsBuyer(data.isAdmin);
        });
    }
  }, [email]);
  return [isBuyer];
};

export default useBuyer;
