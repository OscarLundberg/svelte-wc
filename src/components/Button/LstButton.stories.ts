import type { Meta, StoryObj } from '@storybook/svelte';

import LstButton from './LstButton.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'LstButton',
  component: LstButton,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<LstButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    primary: true,
    label: 'LstButton',
  },
};
