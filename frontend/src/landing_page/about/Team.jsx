import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5  mb-5 ">
        <h1 className="text-center mt-5 ">People</h1>
      </div>

      <div
        className="row p-5 mt-5  text-muted fs-6"
        style={{ lineHeight: 1.8, fontSize: "1.3em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media\images-20260413T105856Z-3-001\images\nithinKamath.jpg"
            alt="profilepic"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5 className="mt-5">Nithin Kamath</h5>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href=" "> Homepage</a> / <a href=" ">TradingQnA</a> /{" "}
            <a href=" ">Twitter</a>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4 team-container text-center">
            <img
              className="team-members-images"
              src="media\images-20260413T105856Z-3-001\images\Nikhil.jpg"
              alt="Nikhil kamath, chief Investment Officer"
              style={{ borderRadius: "100%", width: "50%" }}
            ></img>
            <h5>Nikhil Kamath</h5>
            <p className="text-grey">Co-Founder & CFO</p>
            <p className="text-grey show-bio">
              <a href=" ">
                "Bio" <i className="icon-angle-down :: icon-angle-up"></i>
              </a>
            </p>
            <div
              className="team-featured-desc text-left"
              style={{ display: "block" }}
            >
              <p>
                Nikhil is an astute and experienced investor, and he heads
                financial planning at Zerodha. An avid reader, he always
                appreciates a good game of chess.
              </p>
            </div>
          </div>
          <div className="col-4 team-container text-center">
            <img
              className="team-members-images"
              src="media\images-20260413T105856Z-3-001\images\kailash.jpg"
              alt="Kailash Nadh, chief Technical Officer"
              style={{ borderRadius: "100%", width: "50%" }}
            ></img>
            <h5>Dr. Kailash Nadh</h5>
            <p className="text-grey">CTO</p>
            <p className="text-grey show-bio">
              <a href=" ">
                "Bio" <i className="icon-angle-down :: icon-angle-up"></i>
              </a>
            </p>
            <div
              className="team-featured-desc text-left"
              style={{ display: "block" }}
            >
              <p>
                Kailash has a PhD in Artificial Intelligence & Computational
                Linguistics, and is the brain behind all our technology and
                products. He has been a developer from his adolescence and
                continues to write code every day.
              </p>
            </div>
          </div>
          <div className="col-4 team-container text-center">
            {" "}
            <img
              className="team-members-images"
              src="media\images-20260413T105856Z-3-001\images\venu.jpg"
              alt="Venu Madhav, chief Operational Officer"
              style={{ borderRadius: "100%", width: "50%" }}
            ></img>
            <h5>Venu Madhav</h5>
            <p className="text-grey">COO</p>
            <p className="text-grey show-bio">
              <a href=" ">
                "Bio" <i className="icon-angle-down :: icon-angle-up"></i>
              </a>
            </p>
            <div
              className="team-featured-desc text-left"
              style={{ display: "block" }}
            >
              <p>
                Venu is the backbone of Zerodha taking care of operations and
                ensuring that we are compliant to rules and regulations. He has
                over a dozen certifications in financial markets and is also
                proficient in technical analysis. Workouts, cycling, and
                adventuring is what he does outside of Zerodha.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-4 team-container text-center">
            {" "}
            <img
              className="team-members-images"
              src="media\images-20260413T105856Z-3-001\images\Seema.jpg"
              alt="seema patil, Director"
              style={{ borderRadius: "100%", width: "50%" }}
            ></img>
            <h5>Seema Patil</h5>
            <p className="text-grey">Director</p>
            <p className="text-grey show-bio">
              <a href=" ">
                "Bio" <i className="icon-angle-down :: icon-angle-up"></i>
              </a>
            </p>
            <div
              className="team-featured-desc text-left"
              style={{ display: "block" }}
            >
              <p>
                Seema who has lead the quality team since the beginning of
                Zerodha, is now a director. She is an extremely disciplined
                fitness enthusiast.
              </p>
            </div>
          </div>
          <div className="col-4 team-container text-center">
            {" "}
            <img
              className="team-members-images"
              src="media\images-20260413T105856Z-3-001\images\Karthik.jpg"
              alt="Karthik rangappa, chief of Education"
              style={{ borderRadius: "100%", width: "50%" }}
            ></img>
            <h5>Karthik Rangappa</h5>
            <p className="text-grey">Chief of Education</p>
            <p className="text-grey show-bio">
              <a href=" ">
                "Bio" <i className="icon-angle-down :: icon-angle-up"></i>
              </a>
            </p>
            <div
              className="team-featured-desc text-left"
              style={{ display: "block" }}
            >
              <p>
                Karthik "Guru" Rangappa single handledly wrote Varsity,
                Zerodha's massive educational program. He heads investor
                education initiatives at Zerodha and loves stock markets,
                classic rock, single malts, and photography.
              </p>
            </div>
          </div>
          <div className="col-4 team-container text-center">
            {" "}
            <img
              className="team-members-images"
              src="media\images-20260413T105856Z-3-001\images\Austin.jpg"
              alt="Austin Parkesh, Director strategy"
              style={{ borderRadius: "100%", width: "50%" }}
            ></img>
            <h5>Austin Parkesh</h5>
            <p className="text-grey">Director strategy</p>
            <p className="text-grey show-bio">
              <a href=" ">
                "Bio" <i className="icon-angle-down :: icon-angle-up"></i>
              </a>
            </p>
            <div
              className="team-featured-desc text-left"
              style={{ display: "block" }}
            >
              <p>
                Austin is a successful self-made entrepreneur from Singapore.
                His area of specialty revolves around helping organisations
                including grow by optimizing revenue streams and creating growth
                strategies. He is a boxing enthusiast and loves collecting
                exquisite watches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
