import { useState, useEffect } from "react";
import Axios from "axios";

function MainCard() {
  const [advice, setAdvice] = useState("You're not as fat as you think you are.");
  const [adviceId, setAdviceId] = useState("111");

  useEffect(() => {
    return () => {
      getAdvice();
    };
  }, []);

  const getAdvice = async () => {
    try {
      const newAdvice = await Axios.get("	https://api.adviceslip.com/advice");
      setAdvice(newAdvice.data.slip.advice);
      setAdviceId(newAdvice.data.slip.id);
    } catch (error) {
      console.log(error);
      await getAdvice();
    }
  };
  return (
    <div className="MainCard">
      <span className="adviceId">ADVICE #{adviceId}</span>
      <q className="advice">{advice}</q>
      <div className="divider"></div>
      <div
        onClick={async () => {
          await getAdvice();
        }}
        className="generateBtn"
      ></div>
    </div>
  );
}

export default MainCard;
