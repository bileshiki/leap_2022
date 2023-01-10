import logo from "./logo.svg";
import "./App.css";

const headList = [
  { id: 1, title: "PORTOFOLIO" },
  { id: 2, title: "BLOG" },
  { id: 3, title: "CV" },
  { id: 4, title: "STORE" },
  { id: 5, title: "FREELANCE" },
  { id: 6, title: "ABOUT ME" },
  { id: 7, title: "CONTACT" },
];

const mainList = [
  { id: 1, title: "All" },
  { id: 2, title: "UI Design" },
  { id: 3, title: "UX Design" },
  { id: 4, title: "Product Design" },
  { id: 5, title: "Articles" },
  { id: 6, title: "Tutorials" },
  { id: 7, title: "News" },
];

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="header">
          <div className="headLogo">
            <img src={require("./image/Leap.png")} />
            <img src={require("./image/Rectangle114.png")} />
          </div>
          <div className="headList">
            {headList.map((e) => {
              return (
                <div>
                  <p>{e.title}</p>
                </div>
              );
            })}
          </div>
        </header>

        <main className="main">
          <section className="section-1">
            <div className="blogPost">
              <h1>Blog Posts</h1>
              <span>I think so, this is it.</span>
              <p>
                Design begins after I begin to think about how to present an
                experience most successfully, whether a button I put in can
                solve a problem. The only point in design is not ui design, if
                the user does not have a good experience at the end of the
                product, the design will be considered unsuccessful in my
                opinion.
              </p>
              <div className="links">
              <a href="#" className="twitter">
                <p class="bi bi-twitter">TWITTER</p>
              </a>
              <a href="#" className="linkedin">
                <p class="bi bi-linkedin">LINKEDIN</p>
              </a>
              <a href="#" className="medium">
                <p class="bi bi-medium">MEDIUM</p>
              </a>
            </div>
            </div>
            
            <div className="section-1-img">
              <img src={require("./image/section1.png")} />
            </div>
          </section>

          <section className="section-2">
            <div className="mainList">
              {mainList.map((e) => {
                return (
                  <div>
                    <p>{e.title}</p>
                  </div>
                );
              })}
            </div>

            <div className="section-2-1">
              <img src={require("./image/section2-1.png")} />
              <p>NOV 23 2020</p>
              <h1>This way is wrong about UI Design</h1>
              <p>
                A quick guide to assisting users in the challenging steps from
                learning about your podcast on the web. A quick guide to
                assisting users in the challenging steps from learning about
                your podcast on the web.{" "}
              </p>
              <a href="#" className="readMore">READ MORE</a>
            </div>

            <div className="section-2-2">
              <img src={require("./image/section2-2.png")}/>
              <p>NOV 23 2020</p>
              <h1>This way is wrong about UI Design</h1>
              <p>
                A quick guide to assisting users in the challenging steps from
                learning about your podcast on the web. A quick guide to
                assisting users in the challenging steps from learning about
                your podcast on the web.{" "}
              </p>
              <a href="#" className="readMore">READ MORE</a>
            </div>
          </section>
        </main>

        <footer className="footer">
              <img src={require("./image/derel.png")}/>
        </footer>
      </div>
    </div>
  );
}

export default App;
