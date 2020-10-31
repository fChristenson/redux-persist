import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Bar } from "./Bar";
import { Baz } from "./Baz";
import { Foo } from "./Foo";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Route exact path="/" render={() => <Foo />} />
        <Route exact path="/bar" render={() => <Bar />} />
        <Route exact path="/baz" render={() => <Baz />} />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
