import { addons } from '@storybook/manager-api';
import custom from "./custom-theme";

addons.setConfig({
  theme: custom,
});