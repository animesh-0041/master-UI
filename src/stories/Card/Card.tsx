import React, { useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock, faPresentation, faChair
} from "@fortawesome/pro-light-svg-icons";

type arrayItemType={
  id?:Number,
  title:string,
  start_time: string,
  end_time:string,
  time_zone: string,
  date:string,
}[]


export type CardProps = {
  width?: string;
  header?: string;
  remainDays?: string;
  backgroundColor?: string;
  session?: arrayItemType;
  registrationTime?: string;
  registrationTimeZone?: string;
  registrationDate?: string;
  currentSeat?: number;
  totalSeat?: number;
  IsButton?: boolean;
};

export default function Card(props: CardProps): React.ReactNode  {
  const {
    width,
    header,
    remainDays,
    backgroundColor,
    session,
    registrationTime,
    registrationTimeZone,
    registrationDate,
    currentSeat,
    totalSeat,
  } = props;

  return (
    <div
      className={`card`}
      style={{
        width: width ? width : "400px",
        backgroundColor: backgroundColor ? backgroundColor : "#FFF",
      }}
    >
      <div className="card-header">
        <h1 className="card-header-title">{header}</h1>
        <p className="card-remainDays">In {remainDays} days</p>
      </div>

      <div className="card-info">
        <div className="info">
          <div className="info-icon">
            <FontAwesomeIcon
              style={{ color: "#555763" }}
              icon={faCalendar}
            />
          </div>
          <div className="info-data">
            {session &&
              session?.map((ele, index) => (
                <div key={index} className="info-data-calender">
                  {ele.title}: {ele.start_time}-{ele.end_time} {ele.time_zone}{" "}
                  {ele.date}
                </div>
              ))}
          </div>
        </div>

        <div className="info">
          <div className="info-icon">
            <FontAwesomeIcon
              style={{ color: "#555763" }}
              icon={faPresentation}
            />
          </div>
          <div className="info-data">
            <div className="info-data-zoom">Zoom</div>
          </div>
        </div>

        <div className="info">
          <div className="info-icon">
            <FontAwesomeIcon
              style={{ color: "#555763" }}
              icon={faClock}
            />
          </div>
          <div className="info-data">
            <div className="info-data-registration">
              Registration closes at{" "}
              <div>
                {registrationTime} {registrationTimeZone}, {registrationDate}
              </div>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="info-icon">
            <FontAwesomeIcon
              style={{ color: "#555763" }}
              icon={faChair}
            />
          </div>
          <div className="info-data">
            <div className="info-data-seat">
              <div>{currentSeat}</div> out of <div>{totalSeat}</div> seats
              available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

