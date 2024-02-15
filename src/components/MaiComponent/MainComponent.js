import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  header,

  members,
}) => {
  return (
    <div
      className={classes.mainContainer}
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.mainWrapper}>
        <div className={classes.header} style={{ "--bg": header.background }}>
          <h3
            className={classes.heading}
            style={{ "--color": header.headingColor }}
          >
            {header.heading}
          </h3>{" "}
          <p className={classes.date} style={{ "--color": header.dateColor }}>
            {header.date}
          </p>
        </div>

        <div className={classes.members}>
          {members.map(
            (
              {
                nameContainer,
                border,
                boxShadow,
                yesterday,
                today,
                impediment,
              },
              i
            ) => (
              <div className={classes.content}>
                <p
                  className={classes.name}
                  style={{
                    "--color": nameContainer.color,
                    "--bg": nameContainer.background,
                  }}
                >
                  {nameContainer.name}
                </p>
                <div
                  className={classes.yesterDayToday}
                  style={{
                    "--border": border,
                    "--boxShadow": boxShadow,
                  }}
                >
                  {yesterday && (
                    <div
                      className={classes.box}
                      style={{
                        "--bg": yesterday.background,
                      }}
                    >
                      <h4
                        className={classes.title}
                        style={{
                          "--color": yesterday.titleColor,
                        }}
                      >
                        {yesterday.title}
                      </h4>
                      <ul className={classes.listContainer}>
                        {yesterday.lists?.map((list, i) => (
                          <li
                            key={i}
                            className={classes.info}
                            style={{ "--color": list.infoColor }}
                          >
                            {list}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {today && (
                    <div
                      className={[classes.box, classes.today].join(" ")}
                      style={{
                        "--bg": today.background,
                      }}
                    >
                      <h4
                        className={classes.title}
                        style={{
                          "--color": today.titleColor,
                        }}
                      >
                        {today.title}
                      </h4>
                      <ul className={classes.listContainer}>
                        {today.lists?.map((list, i) => (
                          <li
                            key={i}
                            className={classes.info}
                            style={{ "--color": list.infoColor }}
                          >
                            {list}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {impediment && (
                  <div
                    className={classes.box}
                    style={{
                      "--bg": impediment.background,
                    }}
                  >
                    <h4
                      className={classes.title}
                      style={{
                        "--color": impediment.titleColor,
                      }}
                    >
                      <span className={classes.icon}> {impediment.icon}</span>{" "}
                      {impediment.title}
                    </h4>
                    <ul className={classes.listContainer}>
                      {impediment.lists?.map((list, i) => (
                        <li
                          key={i}
                          className={classes.info}
                          style={{ "--color": list.infoColor }}
                        >
                          {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
