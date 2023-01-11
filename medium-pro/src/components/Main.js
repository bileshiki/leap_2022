export default function Main({data}) {

  return (
    <div className="main">
        <div className="mainStay">
            <h1>Stay curious.</h1>
            <span>
            Discover stories, thinking, and expertise from writers on any topic.
            </span>
            <button
            href="#"
            className="col-md-6 text-white bg-dark rounded text-decoration-none">
            Start reading
            </button>
        </div>        
        <div className="mainImg">
            <img src={data.img} alt=""/>
        </div>
    </div>
  );
}
