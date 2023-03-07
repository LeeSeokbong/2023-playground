import './App.css';
import DateFnsExample from './componets/DateFns/DateFnsExample';
import DayjsExample from './componets/Dayjs/DayjsExample';
import MomentExample from './componets/Moment/MomentExample';
function App() {
  return (
    <div className="App">
      <DateFnsExample></DateFnsExample>
      <DayjsExample></DayjsExample>
      <MomentExample></MomentExample>
    </div>
  );
}

export default App;
