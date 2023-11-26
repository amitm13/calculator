import { useState } from 'react';
import GrayButton from './Components/GrayButton';
import OrangeButton from './Components/OrangeButton';
import logo from './logo.svg';
import { fireEvent } from '@testing-library/react';

function App() {
  const [total, set_total] = useState();
  const [fisrtValue, set_firstValue] = useState(0);
  const [secondValue, set_secondValue] = useState(0);
  const [operator, set_operator] = useState('');
  const clearScreen = () => {
    set_total(0);
    set_firstValue();
    set_secondValue();
    set_operator('');
  }

  const setValue = (e) => {
    console.log(e)
    if(e=='/'|| e=='x' || e=='-' || e=='+' || e=='='){
      if(fisrtValue && secondValue){
        let tot = 0;
        if(e=='='){
          tot = calculateValue(operator);
          set_operator('');
          set_firstValue();
          set_secondValue();
          set_total(tot);
        }else{
          tot = calculateValue(e);
          set_firstValue(tot);
          set_secondValue();
        }
      }

      if(e!='='){
        set_operator(e);
      }
    }else{
      if(operator!=''){
        console.log('S val');
        if(secondValue){
          set_secondValue(secondValue+''+e);
        }else{
          set_secondValue(e);
        }
        set_total('')
      }else{
        console.log('F val');
        if(fisrtValue){
          set_firstValue(fisrtValue+''+e);
        }else{
          set_firstValue(e);
        }
        set_total('')
      }
    }
  }

  const calculateValue = (e) => {
    let tot = 0;
        switch (e) {
          case "/":
            tot = parseFloat(fisrtValue)/parseFloat(secondValue);
            break;

          case "x":
              tot = parseFloat(fisrtValue) * parseFloat(secondValue);
              break;

          case "-":
            tot = parseFloat(fisrtValue) - parseFloat(secondValue);
            break;
          
          case "+":
            tot = parseFloat(fisrtValue) + parseFloat(secondValue);
            break;

          default:
            break;
        }
        
    return tot;
  }

  return (
    <div className="bg-gray-300">
      <center>
        <div className='bg-gray-800 lg:w-1/3 md:w-2/3 h-screen'>
          <div className='w-full bg-gray-800 h-40'>
            <span className='mt-20 float-right p-3 text-4xl font-bold text-white'>{total} {fisrtValue}{operator}{secondValue}</span>
          </div>
          <div className="row m-2 grid grid-cols-4 gap-4">
            <GrayButton clicked={clearScreen} value="C"/>
            <GrayButton value="+/-"/>
            <GrayButton value="%"/>
            <OrangeButton value="/" />

            <GrayButton clicked={() => setValue(7)} value="7"/>
            <GrayButton clicked={() => setValue(8)} value="8"/>
            <GrayButton clicked={() => setValue(9)} value="9"/>
            <OrangeButton clicked={() => setValue('x')} value="X" />

            <GrayButton clicked={() => setValue(4)} value="4"/>
            <GrayButton clicked={() => setValue(5)} value="5"/>
            <GrayButton clicked={() => setValue(6)} value="6"/>
            <OrangeButton clicked={() => setValue('-')} value="-" />

            <GrayButton clicked={() => setValue(1)} value="1"/>
            <GrayButton clicked={() => setValue(2)} value="2"/>
            <GrayButton clicked={() => setValue(3)} value="3"/>
            <OrangeButton clicked={() => setValue('+')} value="+" />

            <GrayButton clicked={() => setValue(0)} extrclassName="col-span-2" value="0"/>
            <GrayButton clicked={() => setValue('.')} value="."/>
            <OrangeButton clicked={() => setValue('=')} value="=" />
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
