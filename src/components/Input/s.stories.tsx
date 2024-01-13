import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title",
    placeholder: "Placeholder",
    disabled: false,
    isError: false,
    message: "Lorem ipsum dolor sit amet.",
  },
};
