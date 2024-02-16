import './App.css';
import ButtonComponent from "./components/ButtonComponent";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="flex flex-col gap-3 text-white justify-center items-center w-screen h-screen bg-gray-600">
        Click here to continue..
        <ButtonComponent/>
        <br/>
        <PostList/>
    </div>
  );
}

export default App;
