import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  
  const headList = [
    {id: 1, title: "PORTFOLIO"},
    {id: 2, title: "BLOG"},
    {id: 3, title: "CV"},
    {id: 4, title: "STORE"},
    {id: 5, title: "FREELANCE"},
    {id: 6, title: "ABOUT ME"},
    {id: 7, title: "CONTACT"},
  ];

  let a = 0;

  const mainList = [
    {id: 1, title: "All"},
    {id: 2, title: "UI Design"},
    {id: 3, title: "UX Design"},
    {id: 4, title: "Product Design"},
    {id: 5, title: "Articles"},
    {id: 6, title: "Tutorials"},
    {id: 7, title: "News"},
  ];

  let b = 0;
  
  return (
    <div className="App">
      <div className="container">
        <div className="header" > 
          <div className="headerLogo">
            <img src={require("./image/Leap.png")} alt="" />
            <img src={require("./image/Rectangle114.png")}  className="purple" alt="" />
          </div>
          <div className="headerList">
            {headList.map((e) => {
              return (
                <div>
                  <p>{e.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="main">
          <div className="section-1">
            <div className="blog-posts">
              <h1>Blog Posts</h1>
              <span>I think so, this is it.</span>
              <p>
              Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.
              </p>
              <div className="links">
              <a href="#" className="twit"><i class="bi bi-twitter"></i>    Twitter</a>
              <a href="#" className="link"><i class="bi bi-linkedin"></i> Linkedin</a>
              <a href="#" className="medi"><i class="bi bi-medium"></i> Medium</a>
              </div>
            </div>
            <div>
            <img src={require("./image/section1.png")} alt="" />
            </div>
          </div>
          <div className="section-2">
            <div className="mainList">
                {mainList.map((e) => {
                  return (
                    <div>
                      <p>{e.title}</p>
                    </div>
                  );
                })}
            </div>
            <div className="section2-aaa">
              <div className="section2-list">
                <img src={require("./image/section2-1.png")} alt="" />
                <h4>This way is wrong about UI Design.</h4>
                <p>A quick guide to assisting users in the challenging steps from learning 
                about your podcast on the web.  A quick guide to assisting users in the  challenging steps from learning about your podcast on the web. </p>              
                <a href="" className="read">READ MORE</a>
              </div>
              <div className="section2-list">
                <img src={require("./image/section2-2.png")} alt="" />
                <h4>This way is wrong about UI Design.</h4>
                <p>A quick guide to assisting users in the challenging steps from learning 
                about your podcast on the web.  A quick guide to assisting users in the  challenging steps from learning about your podcast on the web. </p>              
                <a href="" className="read">READ MORE</a>
              </div>
              <div className="section2-list">
                <img src={require("./image/section2-1.png")} alt="" />
                <h4>This way is wrong about UI Design.</h4>
                <p>A quick guide to assisting users in the challenging steps from learning 
                about your podcast on the web.  A quick guide to assisting users in the  challenging steps from learning about your podcast on the web. </p>              
                <a href="" className="read">READ MORE</a>
              </div>
              <div className="section2-list">
                <img src={require("./image/section2-2.png")} alt="" />
                <h4>This way is wrong about UI Design.</h4>
                <p>A quick guide to assisting users in the challenging steps from learning 
                about your podcast on the web.  A quick guide to assisting users in the  challenging steps from learning about your podcast on the web. </p>              
                <a href="" className="read">READ MORE</a>
              </div>
              <div className="section2-list">
                <img src={require("./image/section2-1.png")} alt="" />
                <h4>This way is wrong about UI Design.</h4>
                <p>A quick guide to assisting users in the challenging steps from learning 
                about your podcast on the web.  A quick guide to assisting users in the  challenging steps from learning about your podcast on the web. </p>              
                <a href="" className="read">READ MORE</a>
              </div>
              <div className="section2-list">
                <img src={require("./image/section2-2.png")} alt="" />
                <h4>This way is wrong about UI Design.</h4>
                <p>A quick guide to assisting users in the challenging steps from learning 
                about your podcast on the web.  A quick guide to assisting users in the  challenging steps from learning about your podcast on the web. </p>              
                <a href="" className="read">READ MORE</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <img src={require("./image/derel.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;