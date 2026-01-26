import { useEffect, useState } from "react";

export function LetterData() {
  const [letters, setLetters] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch();
      const finishedData = await data.json;
      setLetters(finishedData);
    };

    fetchData();
  }, []);
  return <>{letters}</>;
}
