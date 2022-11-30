import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(
        `https://lens-mart-server-jewelhfahim.vercel.app/users/seller/${email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data.isAdmin);
        });
    }
  }, [email]);
  return [isSeller];
};

export default useSeller;
