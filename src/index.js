import './main.less';
export { default as Config } from './config';
import { default as HotspotComponent } from './components/Hotspot.svelte';
import { default as ModalComponent } from './components/Modal.svelte';
import { default as TooltipComponent } from './components/Tooltip.svelte';

export { HotspotComponent, ModalComponent, TooltipComponent };

const props = ['style', 'title', 'content'];

function genericConstructor(component, args) {
  const data = {};
  props.forEach(x => {
    if (args[x]) data[x] = args[x];  
  })

  return new component({
    ...args,
    data,
    target: document.querySelector('body'),
  });
}

export class Hotspot {
  constructor(args) {
    return genericConstructor(HotspotComponent, args);
  }
}

export class Modal {
  constructor(args) {
    return genericConstructor(ModalComponent, args);
  }
}

export class Tooltip {
  constructor(args) {
    return genericConstructor(TooltipComponent, args);
  }
}
