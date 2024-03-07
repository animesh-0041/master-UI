import React, { useState } from "react";
import { Card, Image } from "antd";
import "./style.scss";
import ButtonBase from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faPresentation,
  faChair,
} from "@fortawesome/pro-light-svg-icons";

type arrayItemType={
  id?:Number,
  title:string,
  start_time: string,
  end_time:string,
  time_zone: string,
  date:string,
}[]

export type EventCardProps = {
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

export default function EventCard(props: EventCardProps): React.ReactNode {
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
    IsButton,
  } = props;

  return (
    <div
      className={`eventcard`}
      style={{
        width: width ? width : "424px",
        backgroundColor: backgroundColor ? backgroundColor : "#F5F5F9",
      }}
    >
      <div className="card-header">
        <h1 className="card-header-title">{header}</h1>
        <p className="card-remainDays">In {remainDays} days</p>
      </div>

      <div className="card-info">
        <div className="info">
          <div className="info-icon">
            <FontAwesomeIcon style={{ color: "#555763" }} icon={faCalendar} />
          </div>
          <div className="info-data">
            {session &&
              session?.map((ele:any, index:number) => (
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
            <FontAwesomeIcon style={{ color: "#555763" }} icon={faClock} />
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
            <FontAwesomeIcon style={{ color: "#555763" }} icon={faChair} />
          </div>
          <div className="info-data">
            <div className="info-data-seat">
              <div>{currentSeat}</div> out of <div>{totalSeat}</div> seats
              available
            </div>
          </div>
        </div>
      </div>

      {IsButton && (
        <div>
          <ButtonBase label={"Register"} type={"primary"} marketSite={true} />
        </div>
      )}
    </div>
  );
}
