let prefix = 'algolia-docsearch';
let suggestionPrefix = `${prefix}-suggestion`;
let headerPrefix = `${prefix}-header`;

// let templates = {
//   suggestion: `
//   <div class="${suggestionPrefix}
//     {{#isCategoryHeader}}${suggestionPrefix}__main{{/isCategoryHeader}}
//     {{#isSubCategoryHeader}}${suggestionPrefix}__secondary{{/isSubCategoryHeader}}
//   ">
//     <div class="${suggestionPrefix}--category-header">{{{category}}}</div>
//     <div class="${suggestionPrefix}--wrapper">
//       <div class="${suggestionPrefix}--subcategory-column">
//         <span class="${suggestionPrefix}--subcategory-column-text">{{{subcategory}}}</span>
//       </div>
//       <div class="${suggestionPrefix}--content">
//         <div class="${suggestionPrefix}--subcategory-inline">{{{subcategory}}}</div>
//         <div class="${suggestionPrefix}--title">{{{title}}}</div>
//         <div class="${suggestionPrefix}--text">{{{text}}}</div>
//       </div>
//     </div>
//   </div>
//   `,
//   footer: `
//     <div class="${footerPrefix}">
//       Search by <a class="${footerPrefix}--logo" href="https://www.algolia.com/docsearch">Algolia</a>
//     </div>
//   `
// };

let templates = {
  suggestion: `
  <div class="${suggestionPrefix}
    {{#isCategoryHeader}}${suggestionPrefix}__main{{/isCategoryHeader}}
    {{#isSubCategoryHeader}}${suggestionPrefix}__secondary{{/isSubCategoryHeader}}
  ">
    <div class="${suggestionPrefix}--item">
      <div class="${suggestionPrefix}--item-header">
        <h3>{{{category}}}</h3>
      </div>
      <div class="${suggestionPrefix}--content">
        <div class="${suggestionPrefix}--item-content--row">  
          <div class="${suggestionPrefix}--item-content root-item col-3 no-padding-left">
            <div class="item-content--subtitle">
              <h3>{{{subcategory}}}</h3>
            </div>
          </div>
          <div class="${suggestionPrefix}--item-content col-7 divider-left">
            <div class="item-content--title">
              <h3>{{{title}}}</h3>
            </div>
            <div class="item-content--description">
              <p>{{{text}}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  header: `
    <div class="${headerPrefix}">
      Search by <a class="${headerPrefix}--logo" href="https://www.algolia.com/docsearch">Algolia</a>
    </div>
  `
};

export default templates;

