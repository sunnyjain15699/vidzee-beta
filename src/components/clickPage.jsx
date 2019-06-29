import React from "react";
import Navigation from "./navigation";

const SinglePage = () => {
  return (
    <React.Fragment>
      <main role="main">
        <Navigation />
        <div className="container">
          <div className="img">
            <img src="https://picsum.photos/id/1/200/300" className="img-fluid" alt="Responsive image" style={{width: "100%", height:"400px"}} />
          </div>
        </div>
<br/><br/><br/>
        <div className="container">
          <div className="row">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.{" "}
            </p>
            <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="row">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.{" "}
            </p>
            <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="row">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.{" "}
            </p>
            <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>

          <hr />
        </div>
      </main>
    </React.Fragment>
  );
};

export default SinglePage;
