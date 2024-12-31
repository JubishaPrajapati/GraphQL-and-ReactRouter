//react router
// import Home from './ReactRouter/simpleEg/home';
// import About from './ReactRouter/simpleEg/about';
// import ProfilePg from './ReactRouter/simpleEg/profilePg';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//nested routes
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Profile from "./ReactRouter/nestedRoutes/profile";

// const App: React.FC = () => {

// return (
//   <Router>
//     <nav>
//       <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/profile/jubisha">Jubisha's profile</Link>
//     </nav>

//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/profile/:username" element={<ProfilePg />} />
//     </Routes>
//   </Router>

// <Router>
//   <div>
//     <h1>Welcome to the Website</h1>
//     <Routes>
//       <Route path="/profile/*" element={<Profile />} />
//     </Routes>
//   </div>
// </Router>

//   );
// };

// export default App;

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import UseQueryComp from './graphQl/useQuery/useQueryComp';
import client from './config/graphql';
import UseLazyQuery from './graphQl/useLazy/useLazyQuery';
import LazyQuery2 from './graphQl/useLazy/lazyQuery2';
import GetAddressQuery from './graphQl/useQuery/getAddressComp';
import NestedComp from './graphQl/nestedQuery/nestedComp';
import LoginMutation from './graphQl/useMutation/loginMutationComp';
import RegisterMutationComp from './graphQl/useMutation/registerMutationComp';



const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      {/* <UseQueryComp />
      <UseLazyQuery /> */}
      {/* <LazyQuery2 /> */}
      {/* <GetAddressQuery /> */}
      {/* <NestedComp> */}
      {/* <LoginMutation /> */}
      <RegisterMutationComp />
    </ApolloProvider>
  );
};

export default App;
