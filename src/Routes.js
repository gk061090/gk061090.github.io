import Home from "./pages/Home";
import About from "./pages/About";
import Todo from "./pages/Todo";
import Money from "./pages/Money";
import NotFound from "./pages/NotFound";
import App from "./components/App";

export default [
  {
    component: App,
    routes: [
      {
        component: Home,
        path: "/",
        exact: true
      },
      {
        component: About,
        path: "/about"
      },
      {
        component: Todo,
        path: "/todo"
      },
      {
        component: Money,
        path: "/money"
      },
      {
        component: NotFound
      }
    ]
  }
];
