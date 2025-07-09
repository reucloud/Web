import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {

    console.log("レンダリング");
    //const String = ["こんにちは！","元気ですか？","またね"];
    const [num, setNum] = useState(0);
    //const [[num2,String], setNum2] = useState(0);


    const onClickButton = () => {
        setNum((prev) => {
            return prev + 1;
        });
    };

    const ResetButton = () => {
        setNum((prev) => {
            return prev = 0;
        })
    }
    const increment2Button = () => {
        setNum((prev) => {
            return prev + 2;
        });
    };
    const increment5Return = () => {
        setNum((prev) => {
            if(prev === 5){
                return prev = 0;
            }else{
                return prev + 1;
            }
        });
    };

    return (
    <>
        <h1 style={{ color: "red" }}>こんにちは！</h1>
        <ColoredMessage color="blue">お元気ですか?</ColoredMessage>
        <ColoredMessage color="pink">元気です!</ColoredMessage>
        <ColoredMessage color="pink">カウントアップ</ColoredMessage>
        <button onClick={onClickButton}>+1</button>
        <button onClick={ResetButton}>リセット</button>
        <button onClick={increment2Button}>+2</button>
        <button onClick={increment5Return}>+1R5</button>
        <p>{num}</p>
    </>
    );
};