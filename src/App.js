import './App.css';
import ButtonComponent from "./components/ButtonComponent";

function App() {
  return (
    <div className="flex flex-col gap-3 text-white justify-center items-center w-screen h-screen bg-gray-600">
        Click here to continue..
        <ButtonComponent/>
    </div>
  );
}

export default App;
