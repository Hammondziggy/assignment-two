import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Users  from './Users'
import Home from './Home'
//import Data from'./Data'
import PageNotFound from './PageNotFound'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}


function App() {
  
  return (
      <section className = "navigations">
        <ErrorBoundary>
          <Routes>
            <Route path = "/" element ={<Home />} />
            <Route path = "/Users" element = {<Users />} /> 
            <Route path = "*" element = {<PageNotFound />} />
          </Routes>
        </ErrorBoundary>
      </section>
  );
}
             
export default App;




