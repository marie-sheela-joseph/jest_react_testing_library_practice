import './App.css';
import FirstRender from './firstRender_Present_NotPresent_later_appear_disappear/C1'
import Counter from './updateStateOnMouseclickTest/Counter';
import KeyboardNumberInput from './TypeInToInputTest/KeyboardNumberInput';
import C1 from './contextTest/C1';

function App() {
  return (
    <>
      <FirstRender />
      <Counter />
      <KeyboardNumberInput />
      <C1 />
    </>
  );
}

export default App;
