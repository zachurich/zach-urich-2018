// import React from "react";
// import { render } from "react-dom";

// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Contact from "../components/Contact";

// import Landing from "./pages/Landing";
// import Blog from "./pages/Blog";
// import Post from "./pages/Post";

// import { nav, links } from "./config";

// import {
//   BrowserRouter as Router,
//   browserHistory,
//   Route,
//   Switch
// } from "react-router-dom";

// class Routes extends React.Component {
//   constructor(props) {
//     super(props);
//     this.previousLocation = this.props.location;
//   }
//   componentDidMount() {
//     // If user tries to directly access 'contact', redirect to '/'
//     if (this.props.location.pathname === "/contact") {
//       this.props.history.push("/");
//     }
//   }
//   componentWillUpdate(nextProps) {
//     const { location } = this.props;
//     // set previousLocation if props.location is not modal
//     if (
//       nextProps.history.action !== "POP" &&
//       (!location.state || !location.state.modal)
//     ) {
//       this.previousLocation = this.props.location;
//     }

//     // If we are on the homepage, just scroll down to the form
//     if (this.previousLocation.pathname === "/") {
//       document.getElementById("contact").scrollIntoView();
//     }
//   }

//   render() {
//     const { location } = this.props;
//     const isModal = !!(
//       location.state &&
//       location.state.modal &&
//       this.previousLocation !== location
//     ); // not initial render

//     return (
//       <div>
//         <Header nav={nav} handleModal={this.handleModal} />
//         <Switch location={isModal ? this.previousLocation : location}>
//           <Route exact path="/" render={props => <Landing {...props} />} />
//           <Route exact path="/writing" render={props => <Blog {...props} />} />
//           <Route path="/writing/:slug" render={props => <Post {...props} />} />
//         </Switch>
//         {isModal && this.previousLocation.pathname !== "/" ? ( // check: are we home? are we passing the modal prop?
//           <Route
//             path="/contact"
//             render={props => <Contact {...props} useModal={true} />}
//           />
//         ) : null}
//       </div>
//     );
//   }
// }

// export default Routes;
