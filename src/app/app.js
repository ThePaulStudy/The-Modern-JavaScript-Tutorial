import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';

import { init } from './helpers/init';
import { render, renderFactory } from './render';
import suffix from './components/suffix';

/**
 * The core component initialization method
 * @param {HTMLElement} container - The container within which components will be initialized
 */
const app = (container) => {
  // Init components (single occurance)

  init(suffix, container.querySelector('.js-suffix'));

  // Init components (multiple occurance)
};

// Init the components
app(document, window.config);

// Define a global JS function that can be called from window object (BE can init FE components)
window.reinitJs = app;
