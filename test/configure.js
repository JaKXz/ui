import test from 'ava';

const Onboardist = require('../dist/onboardist-ui.cjs');

test.beforeEach(() => {
  Onboardist.reset();
});

test('configure - can register components', t => {
  Onboardist.configure({
    components: [{
      name: 'foo',
      component: 'modal',
      content: 'Foo bar',
    }],
  });

  t.truthy(Onboardist.Registry.component('foo'));
  t.is(Onboardist.Registry.component('foo').args.name, 'foo');
});

