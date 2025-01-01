import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Component/Home/Home';
import Work1Desc from './Component/Work/work1/Work1Desc';
import Work2Description from './Component/Work/work2/Work2Description';
import Work3Desc from './Component/Work/work3/Work3Desc';
import Work4Desc from './Component/Work/work4/Work4Desc';
import Work5Desc from './Component/Work/work5/Work5Desc';
import Work6Desc from './Component/Work/work6/Work6Desc';
import MainWork from './Component/Work/MainWork';
import MainAbout from './Component/About/MainAbout';
import Contact from './Component/Contact/Contact';
import Article1 from './Component/Articles/Article1/Article1';
import ImageBanner from './Component/Articles/ImageBanner';
import Articles from './Component/Articles/Articles';
import Test from './Component/Commons/GradientEffect';
import Article2 from './Component/Articles/Article2/Article2';
import Work7Desc from './Component/Work/work7/Work7Desc';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/work/fitsync' element={<Work1Desc/>}/>
          <Route path='/work/zervings' element={<Work2Description/>}/>
          <Route path='/work/plotcraft' element={<Work3Desc/>}/>
          <Route path='/work/taskflow' element={<Work4Desc/>}/>
          <Route path='/work/eventura' element={<Work5Desc/>}/>
          <Route path='/work/globetales' element={<Work6Desc/>}/>
          <Route path='/work/lustre' element={<Work7Desc/>}/>
          <Route path='/work' element={<MainWork/>}/>
          <Route path='/about' element={<MainAbout/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/test' element={<Test/>}/>
          <Route path='/articles/java-class-vs-java-record' element={<Article1/>}/>
          <Route path='/articles/api-gateway-eureka' element={<Article2/>}/>
          <Route path='/articles' element={<Articles/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
