export default function Header ({headList}) {
    
    console.log(headList);

        return (
            <div className="head row d-flex ">
                <div className="headLogo col-4">
                    <b class="bi bi-medium"> MEDIUM</b>
                </div>
            <div className="headList d-flex col-8 justify-content-between">
                    {headList.map((obj) => {
                        return(
                            <div key={obj.id}>
                                <p>{obj.title}</p>
                            </div>
                        )
                    })}
                    <button href="#" className="bg-dark rounded">Get started</button>
            </div>
            </div>
        )
    }