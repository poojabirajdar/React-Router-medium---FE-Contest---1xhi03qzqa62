import React from "react";


export const Calculator = () =>{
    const { search } = useLocation();
  const params = new URLSearchParams(search);
  const num1 = parseInt(params.get('num1'));
  const num2 = parseInt(params.get('num2'));
  const op = params.get('op');
  let result = 0;
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      result = 'Invalid operator';
  }

    return(
        <div>
      <p>Your calculation result is <span id="calc-result">{result}</span></p>
    </div>
        
    )
}
