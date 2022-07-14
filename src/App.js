import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import BucketList from "./components/BucketList";
import Detail from "./components/Detail";
import NotFound from "./NotFound";
import Write from "./components/Write";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <Container>
        <Title>리액트 사전</Title>
        <Switch>
          <Route path="/" exact>
            <BucketList />
          </Route>
          <Route path="/detail/:index">
            <Detail />
          </Route>
          <Route exact path="/write/" component={Write} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Container>
      <button
        onClick={() => {
          history.push("/write/");
        }}
      >
        +
      </button>
    </div>
  );
}

const Container = styled.div`
  max-width: 70%;
  min-height: 100vh;
  background-color: #fdf7ff;
  padding: 16px;
  margin: 20px auto;
`;

const Title = styled.h1`
  color: #2e1c8f;
  text-align: center;
`;

export default App;
