import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BaseComponent, { BaseComponentProps } from "./index";

export default {
  title: "Base Component",
  component: BaseComponent,
  // Remove the line below to include all stories
  includeStories: [],
} as ComponentMeta<typeof BaseComponent>;

const Template: ComponentStory<typeof BaseComponent> = (
  args: BaseComponentProps
) => <BaseComponent {...args} />;

const Primary = Template.bind({});

Primary.args = {};

export { Primary };
