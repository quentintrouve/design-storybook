import { ComponentStory, ComponentMeta } from "@storybook/react";
import SquaredButton, { SquaredButtonProps } from "./index";

export default {
  title: "Buttons/Squared Button",
  component: SquaredButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof SquaredButton>;

const Template: ComponentStory<typeof SquaredButton> = (
  args: SquaredButtonProps
) => <SquaredButton {...args} />;

const Primary = Template.bind({});

Primary.args = {
  type: "primary",
  text: "submit",
};

export { Primary };
