import NavBar from "@/components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Todos.css";
import { Provider } from "react-redux";
import store from "@/store/Store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
