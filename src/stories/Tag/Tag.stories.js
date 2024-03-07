import React from "react";
import Tag from "./Tag";

export default {
  title: "forms/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: [
        "order-placed",
        "assessment-sent",
        "pending-QA-approval",
        "registered",
        "assessment-approved",
        "assessment-in-progress",
        "assessment-submitted",
        "E-Learning-in-progress",
        "E-Learning-completed",
        "draft",
        "scheduled",
        "registration-in-progress",
        "registration-full",
        "registration-closed",
        "event-in-progress",
        "event-ended",
        "canceled",
        "published",
        "assessments",
        "enterprises",
        "independent-respondents",
        "e-learning",
        "seminars",
        "QA-workshops",
        "IDI-staff",
        "enterpirse-admins",
        "paying-by-invoice",
        "purchase-order",
        "request-submitted",
        "request-approved",
        "payment-pending",
        "paid",
        "rejected",
        "under-review",
        "pending",
        "approved",
        "rejected",
        "pending-approval",
        "card",
        "paying-by-invoice",
        "purchase-order",
        "not-set-up",
        "registered",
        "admin",
        "Staff",
        "active",
        "pending-invite",
        "inactive",
        "invite-revoked",
        "invite-expired",


      ],
      color: {
        control: { type: "text" },
      },
      label: {
        control: { type: "text" },
      },
      icon: {
        control: { type: "text" },
      },
    },
  },
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Assessment Sent',
  type: "card",
  icon: "eye",
  textColor: "#222940",
};
