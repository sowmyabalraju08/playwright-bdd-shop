// Generated from: features\search.feature
import { test } from "../../steps/fixtures.ts";

test.describe('Product search', () => {

  test.beforeEach('Background', async ({ Given, productListPage }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the shop home page', null, { productListPage }); 
  });
  
  test('Search finds a matching product', { tag: ['@search', '@smoke'] }, async ({ When, Then, And, productListPage }) => { 
    await When('I search for "earbuds"', null, { productListPage }); 
    await Then('I should see 1 product', null, { productListPage }); 
    await And('I should see the product "Wireless Earbuds"', null, { productListPage }); 
  });

  test('Search with no matches shows a message', { tag: ['@search'] }, async ({ When, Then, And, productListPage }) => { 
    await When('I search for "zzzzqq"', null, { productListPage }); 
    await Then('I should see 0 products', null, { productListPage }); 
    await And('I should see the no results message', null, { productListPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\search.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@search","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the shop home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I search for \"earbuds\"","stepMatchArguments":[{"group":{"start":13,"value":"\"earbuds\"","children":[{"start":14,"value":"earbuds","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see 1 product","stepMatchArguments":[{"group":{"start":13,"value":"1"},"parameterTypeName":"int"}]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And I should see the product \"Wireless Earbuds\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Wireless Earbuds\"","children":[{"start":26,"value":"Wireless Earbuds","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":13,"tags":["@search"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the shop home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I search for \"zzzzqq\"","stepMatchArguments":[{"group":{"start":13,"value":"\"zzzzqq\"","children":[{"start":14,"value":"zzzzqq","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see 0 products","stepMatchArguments":[{"group":{"start":13,"value":"0"},"parameterTypeName":"int"}]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And I should see the no results message","stepMatchArguments":[]}]},
]; // bdd-data-end