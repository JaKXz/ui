// Tests for main API
import test from 'ava';

const Onboardist = require('../dist/onboardist-ui.cjs');

test('Can retrieve a component from the registry by name', t => {
  Onboardist.configure({
    components: [{
      component: 'tooltip',
      name: 'new-user-modal',
    }],
  });

  t.truthy(Onboardist.Registry.getComponent('new-user-modal'));
});

test('Can retrieve a tour from the registry by name', t => {
  Onboardist.configure({
    tours: [{
      name: 'new-user',
    }],
  });

  t.truthy(Onboardist.Registry.getTour('new-user'));
});
