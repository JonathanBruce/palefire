import React from "react";
import "./App.css";
import Body from "./components/body";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
const client = new ApolloClient({
});

const App: React.FC = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Body />
      </ApolloProvider>
    </div>
  );
};

export default App;
