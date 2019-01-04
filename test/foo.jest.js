const UI = require('../dist');

test('Can configure Onboardist', () => {
  UI.configure({
    components: [{
      name: 'foo',
      component: 'modal',
      content: 'Foo bar',
    }],
  });

  expect(UI.components.foo).toBeTruthy();
  expect(UI.components.foo.args.name).toEqual('foo');
});
