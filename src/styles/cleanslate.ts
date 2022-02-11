import { css } from "styled-components";

export const cleanSlateRules = css`
  /*!
* CleanSlate
*   github.com/premasagar/cleanslate
*
*/ /*
    An extreme CSS reset stylesheet, for normalising the styling of a container element and its children.

    by Premasagar Rose
        dharmafly.com

    license
        opensource.org/licenses/mit-license.php

    **

    v0.10.1

*/

  /* == BLANKET RESET RULES == */

  /* HTML 4.01 */
  h1, h2, h3, h4, h5, h6, p, td, dl, tr, dt, ol, form, select, option, pre, div, table,  th, tbody, tfoot, caption, thead, ul, li, address, blockquote, dd, fieldset, li, iframe, strong, legend, em, summary, cite, span, input, sup, label, dfn, object, big, q, samp, acronym, small, img, strike, code, sub, ins, textarea, button, var, a, abbr, applet, del, kbd, tt, b, i, hr,

/* HTML5 - Sept 2013 taken from MDN https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list */
article, aside, figure, figcaption, footer, header, menu, nav, section, time, mark, audio, video, abbr, address, area, blockquote, canvas, caption, cite, code, colgroup, col, datalist, fieldset, main, map, meta, optgroup, output, progress, svg {
    background-attachment: scroll;
    background-color: transparent;
    background-image: none; /* This rule affects the use of pngfix JavaScript http://dillerdesign.com/experiment/DD_BelatedPNG for IE6, which is used to force the browser to recognise alpha-transparent PNGs files that replace the IE6 lack of PNG transparency. (The rule overrides the VML image that is used to replace the given CSS background-image). If you don't know what that means, then you probably haven't used the pngfix script, and this comment may be ignored :) */
    background-position: 0 0;
    background-repeat: repeat;
    border-color: black;
    border-color: currentColor; /* border-color should match font color. Modern browsers (incl. IE9) allow the use of "currentColor" to match the current font 'color' value <http://www.w3.org/TR/css3-color/#currentcolor>. For older browsers, a default of 'black' is given before this rule. Guideline to support older browsers: if you haven't already declared a border-color for an element, be sure to do so, e.g. when you first declare the border-width. */
    border-radius: 0;
    border-style: none;
    border-width: medium;
    bottom: auto;
    clear: none;
    clip: auto;
    color: inherit;
    counter-increment: none;
    counter-reset: none;
    cursor: auto;
    direction: inherit;
    display: inline;
    float: none;
    font-family: inherit; /* As with other inherit values, this needs to be set on the root container element */
    font-size: inherit;
    font-style: inherit;
    font-variant: normal;
    font-weight: inherit;
    height: auto;
    left: auto;
    letter-spacing: normal;
    line-height: inherit;
    list-style-type: inherit; /* Could set list-style-type to none */
    list-style-position: outside;
    list-style-image: none;
    margin: 0;
    max-height: none;
    max-width: none;
    min-height: 0;
    min-width: 0;
    opacity: 1;
    outline: invert none medium;
    overflow: visible;
    padding: 0;
    position: static;
    quotes: "" "";
    right: auto;
    table-layout: auto;
    text-align: inherit;
    text-decoration: inherit;
    text-indent: 0;
    text-transform: none;
    top: auto;
    unicode-bidi: normal;
    vertical-align: baseline;
    visibility: inherit;
    white-space: normal;
    width: auto;
    word-spacing: normal;
    z-index: auto;

    /* CSS3 */
    /* Including all prefixes according to http://caniuse.com/ */
    /* CSS Animations don't cascade, so don't require resetting */
    -webkit-background-origin: padding-box;
    background-origin: padding-box;
    -webkit-background-clip: border-box;
    background-clip: border-box;
    -webkit-background-size: auto;
    -moz-background-size: auto;
    background-size: auto;
    -webkit-border-image: none;
    -moz-border-image: none;
    -o-border-image: none;
    border-image: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-column-count: auto;
    -moz-column-count: auto;
    column-count: auto;
    -webkit-column-gap: normal;
    -moz-column-gap: normal;
    column-gap: normal;
    -webkit-column-rule: medium none black;
    -moz-column-rule: medium none black;
    column-rule: medium none black;
    -webkit-column-span: 1;
    -moz-column-span: 1; /* doesn't exist yet but probably will */
    column-span: 1;
    -webkit-column-width: auto;
    -moz-column-width: auto;
    column-width: auto;
    font-feature-settings: normal;
    overflow-x: visible;
    overflow-y: visible;
    -webkit-hyphens: manual;
    -moz-hyphens: manual;
    hyphens: manual;
    -webkit-perspective: none;
    -moz-perspective: none;
    -ms-perspective: none;
    -o-perspective: none;
    perspective: none;
    -webkit-perspective-origin: 50% 50%;
    -moz-perspective-origin: 50% 50%;
    -ms-perspective-origin: 50% 50%;
    -o-perspective-origin: 50% 50%;
    perspective-origin: 50% 50%;
    -webkit-backface-visibility: visible;
    -moz-backface-visibility: visible;
    -ms-backface-visibility: visible;
    -o-backface-visibility: visible;
    backface-visibility: visible;
    text-shadow: none;
    -webkit-transition: all 0s ease 0s;
    transition: all 0s ease 0s;
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform-style: flat;
    -moz-transform-style: flat;
    -ms-transform-style: flat;
    -o-transform-style: flat;
    transform-style: flat;
    word-break: normal;
  }

  /* == BLOCK-LEVEL == */
  /* Actually, some of these should be inline-block and other values, but block works fine (TODO: rigorously verify this) */
  /* HTML 4.01 */
  h3, h5, p, h1, dl, dt, h6, ol, form, option, pre, div, h2, caption, h4, ul, address, blockquote, dd, fieldset, hr,

/* HTML5 new elements */
article, dialog, figure, footer, header, hgroup, menu, nav, section, audio, video, address, blockquote, colgroup, main, progress, summary {
    display: block;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  h1 {
    font-size: 2em;
    padding: 0.67em 0;
  }
  h2 {
    font-size: 1.5em;
    padding: 0.83em 0;
  }
  h3 {
    font-size: 1.17em;
    padding: 0.83em 0;
  }
  h4 {
    font-size: 1em;
  }
  h5 {
    font-size: 0.83em;
  }
  p {
    margin: 1em 0;
  }
  table {
    display: table;
  }
  thead {
    display: table-header-group;
  }
  tbody {
    display: table-row-group;
  }
  tfoot {
    display: table-footer-group;
  }
  tr {
    display: table-row;
  }
  th,
  td {
    display: table-cell;
    padding: 2px;
  }

  /* == SPECIFIC ELEMENTS == */
  /* Some of these are browser defaults; some are just useful resets */
  ol,
  ul {
    margin: 1em 0;
  }
  ul li,
  ul ul li,
  ul ul ul li,
  ol li,
  ol ol li,
  ol ol ol li,
  ul ol ol li,
  ul ul ol li,
  ol ul ul li,
  ol ol ul li {
    list-style-position: inside;
    margin-top: 0.08em;
  }
  ol ol,
  ol ol ol,
  ul ul,
  ul ul ul,
  ol ul,
  ol ul ul,
  ol ol ul,
  ul ol,
  ul ol ol,
  ul ul ol {
    padding-left: 40px;
    margin: 0;
  }
  /* helper for general navigation */
  nav ul,
  nav ol {
    list-style-type: none;
  }
  ul,
  menu {
    list-style-type: disc;
  }
  ol {
    list-style-type: decimal;
  }
  ol ul,
  ul ul,
  menu ul,
  ol menu,
  ul menu,
  menu menu {
    list-style-type: circle;
  }
  ol ol ul,
  ol ul ul,
  ol menu ul,
  ol ol menu,
  ol ul menu,
  ol menu menu,
  ul ol ul,
  ul ul ul,
  ul menu ul,
  ul ol menu,
  ul ul menu,
  ul menu menu,
  menu ol ul,
  menu ul ul,
  menu menu ul,
  menu ol menu,
  menu ul menu,
  menu menu menu {
    list-style-type: square;
  }
  li {
    display: list-item;
    /* Fixes IE7 issue with positioning of nested bullets */
    min-height: auto;
    min-width: auto;
    padding-left: 20px; /* replace -webkit-padding-start: 40px; */
  }
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
  kbd,
  samp,
  code,
  pre {
    font-family: monospace;
  }
  a {
    color: blue;
    text-decoration: underline;
  }
  a:visited {
    color: #529;
  }
  a,
  a *,
  input[type="submit"],
  input[type="button"],
  input[type="radio"],
  input[type="checkbox"],
  select,
  button {
    cursor: pointer;
  }
  button,
  input[type="submit"] {
    text-align: center;
    padding: 2px 6px 3px;
    border-radius: 4px;
    text-decoration: none;
    font-family: arial, helvetica, sans-serif;
    font-size: small;
    background: white;
    -webkit-appearance: push-button;
    color: buttontext;
    border: 1px #a6a6a6 solid;
    background: lightgrey; /* Old browsers */
    background: rgb(255, 255, 255); /* Old browsers */
    background: -moz-linear-gradient(
      top,
      rgba(255, 255, 255, 1) 0%,
      rgba(221, 221, 221, 1) 100%,
      rgba(209, 209, 209, 1) 100%,
      rgba(221, 221, 221, 1) 100%
    ); /* FF3.6+ */
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, rgba(255, 255, 255, 1)),
      color-stop(100%, rgba(221, 221, 221, 1)),
      color-stop(100%, rgba(209, 209, 209, 1)),
      color-stop(100%, rgba(221, 221, 221, 1))
    ); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 1) 0%,
      rgba(221, 221, 221, 1) 100%,
      rgba(209, 209, 209, 1) 100%,
      rgba(221, 221, 221, 1) 100%
    ); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(
      top,
      rgba(255, 255, 255, 1) 0%,
      rgba(221, 221, 221, 1) 100%,
      rgba(209, 209, 209, 1) 100%,
      rgba(221, 221, 221, 1) 100%
    ); /* Opera 11.10+ */
    background: -ms-linear-gradient(
      top,
      rgba(255, 255, 255, 1) 0%,
      rgba(221, 221, 221, 1) 100%,
      rgba(209, 209, 209, 1) 100%,
      rgba(221, 221, 221, 1) 100%
    ); /* IE10+ */
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 0%,
      rgba(221, 221, 221, 1) 100%,
      rgba(209, 209, 209, 1) 100%,
      rgba(221, 221, 221, 1) 100%
    ); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#dddddd',GradientType=0 ); /* IE6-9 */
    -webkit-box-shadow: 1px 1px 0px #eee;
    -moz-box-shadow: 1px 1px 0px #eee;
    -o-box-shadow: 1px 1px 0px #eee;
    box-shadow: 1px 1px 0px #eee;
    outline: initial;
  }
  button:active,
  input[type="submit"]:active,
  input[type="button"]:active,
  button:active {
    background: rgb(59, 103, 158); /* Old browsers */
    background: -moz-linear-gradient(
      top,
      rgba(59, 103, 158, 1) 0%,
      rgba(43, 136, 217, 1) 50%,
      rgba(32, 124, 202, 1) 51%,
      rgba(125, 185, 232, 1) 100%
    ); /* FF3.6+ */
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, rgba(59, 103, 158, 1)),
      color-stop(50%, rgba(43, 136, 217, 1)),
      color-stop(51%, rgba(32, 124, 202, 1)),
      color-stop(100%, rgba(125, 185, 232, 1))
    ); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(
      top,
      rgba(59, 103, 158, 1) 0%,
      rgba(43, 136, 217, 1) 50%,
      rgba(32, 124, 202, 1) 51%,
      rgba(125, 185, 232, 1) 100%
    ); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(
      top,
      rgba(59, 103, 158, 1) 0%,
      rgba(43, 136, 217, 1) 50%,
      rgba(32, 124, 202, 1) 51%,
      rgba(125, 185, 232, 1) 100%
    ); /* Opera 11.10+ */
    background: -ms-linear-gradient(
      top,
      rgba(59, 103, 158, 1) 0%,
      rgba(43, 136, 217, 1) 50%,
      rgba(32, 124, 202, 1) 51%,
      rgba(125, 185, 232, 1) 100%
    ); /* IE10+ */
    background: linear-gradient(
      to bottom,
      rgba(59, 103, 158, 1) 0%,
      rgba(43, 136, 217, 1) 50%,
      rgba(32, 124, 202, 1) 51%,
      rgba(125, 185, 232, 1) 100%
    ); /* W3C */
    border-color: #5259b0;
  }
  button {
    padding: 1px 6px 2px 6px;
    margin-right: 5px;
  }
  input[type="hidden"] {
    display: none;
  }
  /* restore form defaults */
  textarea {
    -webkit-appearance: textarea;
    background: white;
    padding: 2px;
    margin-left: 4px;
    word-wrap: break-word;
    white-space: pre-wrap;
    font-size: 11px;
    font-family: arial, helvetica, sans-serif;
    line-height: 13px;
    resize: both;
  }
  select,
  textarea,
  input {
    border: 1px solid #ccc;
  }
  select {
    font-size: 11px;
    font-family: helvetica, arial, sans-serif;
    display: inline-block;
  }
  textarea:focus,
  input:focus {
    outline: auto 5px -webkit-focus-ring-color;
    outline: initial;
  }
  input[type="text"] {
    background: white;
    padding: 1px;
    font-family: initial;
    font-size: small;
  }
  input[type="checkbox"],
  input[type="radio"] {
    border: 1px #2b2b2b solid;
    border-radius: 4px;
  }
  input[type="checkbox"],
  input[type="radio"] {
    outline: initial;
  }
  input[type="radio"] {
    margin: 2px 2px 3px 2px;
  }
  abbr[title],
  acronym[title],
  dfn[title] {
    cursor: help;
    border-bottom-width: 1px;
    border-bottom-style: dotted;
  }
  ins {
    background-color: #ff9;
    color: black;
  }
  del {
    text-decoration: line-through;
  }
  blockquote,
  q {
    quotes: none; /* HTML5 */
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after,
  li:before,
  li:after {
    content: "";
  }
  input,
  select {
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
  }
  *[dir="rtl"] {
    direction: rtl;
  }
  mark {
    background-color: #ff9;
    color: black;
    font-style: italic;
    font-weight: bold;
  }
  menu {
    padding-left: 40px;
    padding-top: 8px;
  }

  /* additional helpers */
  [hidden],
  template {
    display: none;
  }
  abbr[title] {
    border-bottom: 1px dotted;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
  img {
    border: 0;
  }
  figure {
    margin: 0;
  }
  textarea {
    overflow: auto;
    vertical-align: top;
  }

  /* == ROOT CONTAINER ELEMENT == */
  /* This contains default values for child elements to inherit  */
  * {
    font-size: medium;
    line-height: 1;
    direction: ltr;
    text-align: left; /* for IE, Opera */
    text-align: start; /* recommended W3C Spec */
    font-family: "Times New Roman", Times, serif; /* Override this with whatever font-family is required */
    color: black;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    list-style-type: disc;
  }

  pre {
    white-space: pre;
  }
`;
