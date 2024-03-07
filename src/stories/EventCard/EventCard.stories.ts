import React from "react";
import EventCard from "./EventCard";
import type {Meta, StoryObj} from "@storybook/react";

const meta : Meta<typeof EventCard> = {
  title: "forms/EventCard",
  component: EventCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    header: {
      control: { type: "text" },
    },
    registrationTime: {
      control: { type: "text" },
    },
    registrationTimeZone: {
      control: { type: "text" },
    },
    registrationDate: {
      control: { type: "text" },
    },
    width: {
      control: { type: "text" },
    },
    backgroundColor: {
      control: { type: "color" },
    },
    currentSeat: {
      control: { type: "number" },
    },
    totalSeat: {
      control: { type: "number" },
    },
    IsButton: {
      control: { type: "boolean" },
    },
  },
};

export default meta;


type Story=StoryObj<typeof EventCard>;


export const BaseEventCard:Story = {
args: {
  header: "IDI Dec 2023 Public Seminar",
  remainDays: "20",
  registrationTime: "12:00 pm",
  registrationTimeZone: "EST",
  registrationDate: "Nov 20, 2023",
  currentSeat: 30,
  totalSeat: 100,
  IsButton: true,
  session: [
    {
      id: 1,
      title: "Session 1",
      start_time: "12:00pm",
      end_time: "5:30pm",
      time_zone: "EST",
      date: "Dec 1, 2024",
    },

    {
      id: 2,
      title: "Session 2",
      start_time: "12:00pm",
      end_time: "5:30pm",
      time_zone: "EST",
      date: "Dec 2, 2024",
    },

    {
      id: 3,
      title: "Session 3",
      start_time: "12:00pm",
      end_time: "5:30pm",
      time_zone: "EST",
      date: "Dec 3, 2024",
    },
  ],
}
}
