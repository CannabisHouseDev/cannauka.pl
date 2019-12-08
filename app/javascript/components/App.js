import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Post from "./Post";
import Posts from "./Posts";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import Home from "./Home";

const app = () => {
  return(
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/posts/new" component={AddPost} />      
      <Route exact path="/posts/:id" component={Post} />
      <Route exact path="/posts/:id/edit" component={EditPost} />
      </Switch>
    </Router>
  )
}

export default app;
