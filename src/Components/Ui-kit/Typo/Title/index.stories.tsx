import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Title, { TitleProps } from "./index";

export default {
  title: "Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args: TitleProps) => (
  <Title {...args} />
);

const title = Template.bind({});
const subtitle = Template.bind({});
const smallSubtitle = Template.bind({});

title.args = {
  content: "Title",
  heading: "h1",
};

subtitle.args = {
  content: "Subtitle",
  heading: "h2",
};

smallSubtitle.args = {
  content: "Small Subtitle",
  heading: "h3",
};

export { title, subtitle, smallSubtitle };
