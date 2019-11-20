import { configure } from '@storybook/angular';
const req = require.context('../src/stories', true, /\.stories\.ts$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);