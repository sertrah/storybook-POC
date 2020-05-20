import React from 'react';
import {HRoundedButton, HButton} from '../components/buttons';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';


import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: themes.dark,
});


export default {
    component: HRoundedButton,
    title: 'Addons/S4N POC/Button',
    decorators: [storyFn => <div style={{ backgroundColor: 'white' }}>{storyFn()}</div>, withA11y],
  };
export const BasicWithText = () => <HButton onClick={action('clicked')}>Hello Button </HButton>;

export const BasicWithEmoji = () => (
  <HButton onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </HButton>
);

export const InvalidContrast = () => <HRoundedButton style={{ backgroundColor: 'blue', color: 'darkRed', }} >Hello Button </HRoundedButton>;

export const withEmojiPrimary = () => (
  <HRoundedButton primary>
    <span role="img" aria-label="being cool">
      😀 😎 👍 💯
    </span>
  </HRoundedButton>
);

BasicWithEmoji.story = {
    decorators: [storyFn => <div style={{ border: '5px solid red' }}>{storyFn()}</div>],
  };