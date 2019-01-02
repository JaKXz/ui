(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{316:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],data:function(){return{destroyables:[],tour:null}},mounted:function(){this.tour=new Onboardist.UI.Tour({scenarios:[{backdrop:!0,components:[{component:Onboardist.UI.Modal,title:"Getting Started",content:"Take a quick tour of the system"}]},{components:[{component:Onboardist.UI.Hotspot,attach:'.links a[href*="/guide/"]',name:"hot1"},{component:"tooltip",attach:"hot1",content:"Try the guide"}]}]})},destroyed:function(){this.tour.stop(),Onboardist.UI.reset()},methods:{startTour:function(){this.tour.start()}}},e=a(43),o=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tour"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tour","aria-hidden":"true"}},[t._v("#")]),t._v(" Tour")]),t._v(" "),a("p",[t._v("A tour is a special meta-component that combines multiple sub-components into a series of steps. Technically it is a\nstate machine. Each step in the tour is an independent state and each state defines multiple ways to transition to the\nnext, previous, or an arbitrary state.")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("ol",[a("li",[t._v('User clicks on a help button which starts the tour. A modal opens in the middle of the screen with a "Next" button in it.')]),t._v(" "),a("li",[t._v('Clicking the next button opens a hotspot with a tooltip next to it. This also has a "Next" button')]),t._v(" "),a("li",[t._v("Clicking THAT next button opens yet another hotspot with another tooltip, etc, etc.")])]),t._v(" "),a("div",{staticClass:"example"},[a("button",{attrs:{id:"tour-button"},on:{click:function(s){t.startTour()}}},[t._v("Start Tour")])]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[t._v("The tour's "),a("code",[t._v("scenarios")]),t._v(" is an array where each element is a step along the tour. Each scenario has some options but\nthe main one is "),a("code",[t._v("components")]),t._v(" which is an array of the Onboardist components you want to display.")]),t._v(" "),a("p",[t._v("Example code used for the tour on this page:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tour "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Onboardist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tour")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Scenario list")]),t._v("\n  scenarios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Scenario #1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      backdrop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Onboardist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Modal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Getting Started'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Take a quick tour of the system'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Scenario #2")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Onboardist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hotspot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attach"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.links a[href*=\"/guide/\"]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hot1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tooltip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attach"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hot1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Try the guide'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Additional options for tour")]),t._v("\n  showNext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  showPrev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntour"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can either use the component name, or a simple string for the component, i.e. "),a("code",[t._v("'tooltip'")]),t._v(" instead of "),a("code",[t._v("Onboardist.UI.Tooltip")]),t._v(" as seen above. This makes\ntour configs JSON-compatible.")])]),t._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("h3",{attrs:{id:"scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenarios","aria-hidden":"true"}},[t._v("#")]),t._v(" scenarios")]),t._v(" "),a("p",[t._v("List of scenarios.")]),t._v(" "),a("h4",{attrs:{id:"secnario-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secnario-options","aria-hidden":"true"}},[t._v("#")]),t._v(" Secnario Options")]),t._v(" "),a("h5",{attrs:{id:"wait"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wait","aria-hidden":"true"}},[t._v("#")]),t._v(" wait")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("number|selector")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("Make Onboardist wait for either "),a("code",[t._v("number")]),t._v(" ms or for the element matching "),a("code",[t._v("selector")]),t._v(" to appear on the badge before triggering. This should be combined with hiding the next button on components to prevent the user from skipping to the\nnext step on accident;")]),t._v(" "),a("h5",{attrs:{id:"components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components","aria-hidden":"true"}},[t._v("#")]),t._v(" components")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Array")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("[]")])])]),t._v(" "),a("p",[t._v("Array of Onboardist component arguments")]),t._v(" "),a("h3",{attrs:{id:"showprev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showprev","aria-hidden":"true"}},[t._v("#")]),t._v(" showPrev")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Default: true")])]),t._v(" "),a("p",[t._v("Show a button to navigate to the previous page. Only affects components that show buttons (Modals, Tooltips). Doesn't show on first scenario.")]),t._v(" "),a("h3",{attrs:{id:"shownext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shownext","aria-hidden":"true"}},[t._v("#")]),t._v(" showNext")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Default: true")])]),t._v(" "),a("p",[t._v('Show a button to navigate to the next page. Only affects components that show buttons (Modals, Tooltips). On the last scenario it shows "End".')])])},[],!1,null,null,null);o.options.__file="README.md";s.default=o.exports}}]);