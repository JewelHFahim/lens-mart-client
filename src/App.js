import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer 
        position="top-center"
        autoClose={500}

      />
    </div>
  );
}

export default App;
