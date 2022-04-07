
import './App.css';
import Commonbtn from './day1/CommonBtn';
import ContactUs from './day1/ContactUs';
import Download from './day1/Download';
import Help from './day1/Help';
import Home from './day1/Home';
import JoinUS from './day1/JoinUS';
import Login from './day1/Login';
import Search from './day1/Search';
import Settings from './day1/Settings';
import Heading from './day1/Heading';
import List from './day1/List';

function App() {
  const data1=["Apple" ,"Blackberry","iPhone","Windows Phone"]
  const data2=["Samsung","HTC","Micromax","Apple"]
  return (
    <>
    <h1>By Craeting 8 Component</h1>
    <div className="App">
      {/* <h1>Masai School</h1> */}
      {/* <List heading="Course List" label="Course Type"/> */}
      {/* <List heading1="Mobile Operating System" li1="Android" li2="Blackberry" li3="iPhone" li4="Windoows Phone" heading2="Mobile Manufacturers" h2l1="Samsung" h2l2="HTC" h2l3="Micromax" h2l4="Apple"/> */}
      
      <JoinUS name="JOIN US"/>
      <Settings name="SETTINGS"/>
      <Login name="LOGIN"/>
      <ContactUs name="CONTACT US"/>
      <Search name="SEARCH"/>
      <Help name="HELP"/>
      <Home name="HOME"/>
      <Download name="DOWNLOAD"/>
    </div>
    <h1>By Creating One Component</h1>
    <div className='App'>
      <Commonbtn name="Join Us" id="join"/>
      <Commonbtn name="Settings" id="settings"/>
      <Commonbtn name="Login" id="login"/>
      <Commonbtn name="Contact Me" id="contact"/>
      <Commonbtn name="Search" id="search"/>
      <Commonbtn name="Help" id="help"/>
      <Commonbtn name="Home" id="home"/>
      <Commonbtn name="Download" id="download"/>
    </div>
    <Heading heading={"Mobile Operating System"}/>
    <List d1={data1}/>
    <Heading heading={"Mobile Manufacturers"}/>
    <List d1={data2} />
    </>
  );
}

export default App;
