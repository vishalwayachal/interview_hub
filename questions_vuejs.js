window.questions_vuejs = [
  {
    question: "What is the difference between v-if and v-show in Vue.js?",
    answer: "v-if adds or removes the element from the DOM. v-show just toggles the visibility using CSS (display: none). Use v-if when you want to save memory (expensive elements), and v-show when toggling frequently."
  },
  {
    question: "How does Vue handle two-way binding?",
    answer: "Vue uses the v-model directive for two-way binding. It syncs data between the input field and the component’s data. Example: <input v-model=\"name\"> <p>Hello, {{ name }}</p>"
  },
  {
    question: "What are Vue components, and why use them?",
    answer: "Components are reusable blocks of code (HTML + JS + CSS) in Vue. They help you split UI into logical pieces, reuse code across pages, and make big apps easier to manage."
  },
  {
    question: "What’s the difference between computed properties and methods?",
    answer: "Computed properties are cached and only re-run when dependencies change. Methods re-run every time you call them. Use computed for derived values based on data. Use methods for actions."
  },
  {
    question: "What is the Vue lifecycle? Why is it important?",
    answer: "The Vue lifecycle is the set of stages a component goes through: from creation to destruction. Key hooks: created (data is ready, no DOM yet), mounted (DOM is ready), updated (data or DOM has changed), destroyed (cleanup time!). Use these to initialize data, call APIs, or clean up resources (like intervals or event listeners)."
  },
  {
    question: "How do you handle global state in Vue?",
    answer: "Use Vuex (in Vue 2) or Pinia (in Vue 3+). These libraries help manage global data like logged-in users, settings, or themes. Example: store.state.username, store.commit('updateUsername', 'Vishal')"
  },
  {
    question: "How can you pass data between components?",
    answer: "Parent → Child: via props. Child → Parent: via $emit. Siblings or across components: use Vuex or an event bus. Example: <ChildComponent :message=\"greeting\" />"
  },
  {
    question: "What is a watcher in Vue.js?",
    answer: "A watcher watches a data property and runs code when it changes. Good for: Reacting to API changes, watching route params, delayed/conditional logic. Example: watch: { userId(newVal) { this.fetchUserData(newVal); } }"
  },
  {
    question: "What are slots in Vue?",
    answer: "Slots let you inject custom content into components. Example: <Modal> <template v-slot:header>My Title</template> <p>Body content goes here</p> </Modal>"
  },
  {
    question: "How do you improve performance in a large Vue app?",
    answer: "Use v-show instead of v-if for frequently toggled elements, lazy load components with defineAsyncComponent, break code into smaller chunks, use computed properties instead of methods for caching, avoid unnecessary watchers."
  },
  {
    question: "How does Vue handle reactivity?",
    answer: "Vue tracks changes to reactive data using getters and setters (Proxy in Vue 3, Object.defineProperty in Vue 2). When reactive data changes, Vue automatically updates the DOM. It’s smart and only updates what's needed."
  },
  {
    question: "What are dynamic components in Vue?",
    answer: "Dynamic components let you switch which component is rendered using the <component> tag. Example: <component :is=\"currentComponent\" /> Useful for tabs, modals, or dashboards where components swap in/out."
  },
  {
    question: "What’s the difference between v-bind and v-model?",
    answer: "v-bind: One-way binding from data to an attribute or prop. v-model: Two-way binding (for inputs and forms). Example: <img :src=\"imageUrl\"> <input v-model=\"username\">"
  },
  {
    question: "How do you handle forms in Vue?",
    answer: "Use v-model for syncing inputs, plus @submit.prevent to stop reload. Validate using computed or external libraries like Vuelidate or Yup. Example: <form @submit.prevent=\"submitForm\"> <input v-model=\"email\" /> </form>"
  },
  {
    question: "What is the key attribute used for in lists?",
    answer: "The key helps Vue track elements in a loop efficiently. Without it, Vue may reuse elements incorrectly. Example: <li v-for=\"item in list\" :key=\"item.id\">{{ item.name }}</li> Use unique IDs — improves performance and avoids bugs."
  },
  {
    question: "How do you lazy load components in Vue?",
    answer: "In Vue 3: import { defineAsyncComponent } from 'vue'; const MyComponent = defineAsyncComponent(() => import('./MyComponent.vue')); In Vue 2: const MyComponent = () => import('./MyComponent.vue'); Use it for large components or routes to reduce initial load time."
  },
  {
    question: "How would you structure a large Vue.js application?",
    answer: "Organize by features (not types), use Vuex/Pinia for state management, lazy load routes & components, use scoped CSS & reusable components, abstract API calls into services, add linter + tests + CI/CD."
  },
  {
    question: "What are mixins in Vue? Are they still recommended?",
    answer: "Mixins let you reuse logic across components. Example: export const timeMixin = { created() { console.log('Mixin loaded at', new Date()); } }; Downside: Mixins can cause naming conflicts and implicit behavior. Better alternative in Vue 3: Composition API or composables."
  },
  {
    question: "Explain Vue Router navigation guards.",
    answer: "Guards let you control access before entering a route. Example: router.beforeEach((to, from, next) => { if (!isAuthenticated) next('/login'); else next(); }); Also includes beforeEnter, beforeRouteLeave, etc. — great for auth, permissions, and onboarding flows."
  },
  {
    question: "How does the Composition API differ from the Options API?",
    answer: "Composition API (Vue 3): Uses setup() function, code is more reusable and readable for large components, better TypeScript support. Options API: Uses data, methods, computed, etc. Easier for beginners but gets messy in complex components."
  },
  {
    question: "How do you implement SSR in Vue?",
    answer: "Use Nuxt.js for Server-Side Rendering. Benefits: Faster initial load (HTML pre-rendered), better SEO, can hydrate into full SPA after load."
  },
  {
    question: "How do you debounce input in Vue?",
    answer: "Use a watcher or lodash.debounce: watch: { searchInput: debounce(function (val) { this.fetchResults(val); }, 300) } Prevents API calls on every keystroke. Very useful for search bars."
  },
  {
    question: "What is provide / inject in Vue?",
    answer: "Lets you pass data from parent to deeply nested child without prop drilling. Parent: provide('theme', 'dark'); Child: inject('theme'); Useful for global config, themes, localization, etc."
  },
  {
    question: "How do you test Vue components?",
    answer: "Use tools like Vue Test Utils for unit testing components, Jest or Vitest for test runner. Use shallowMount vs mount as needed. Example: const wrapper = shallowMount(MyComponent); expect(wrapper.text()).toContain('Welcome');"
  },
  {
    question: "What performance bottlenecks have you faced in Vue apps? How did you fix them?",
    answer: "Re-render storms due to large lists → solved with v-show, virtual-scroll. Memory leaks from event listeners → fixed with beforeDestroy cleanup. Slow startup → solved by lazy-loading routes/components."
  },
  {
    question: "What is Teleport in Vue 3 and when would you use it?",
    answer: "<Teleport> allows you to render a component’s DOM outside of its parent hierarchy. Use cases: Modals, Tooltips, Notifications. Example: <teleport to=\"body\"> <div class=\"modal\">I teleport!</div> </teleport> It avoids CSS/z-index headaches and helps with layout flexibility."
  },
  {
    question: "How do you handle authentication in a Vue app?",
    answer: "Common pattern: Store token in localStorage or HttpOnly cookies, use route guards to protect routes, add interceptors via Axios for token injection, use Vuex/Pinia to store user info. Bonus: Protect refresh with JWT + refresh tokens."
  },
  {
    question: "How do you handle error boundaries in Vue?",
    answer: "Vue 3 allows errorCaptured() in components. Example: errorCaptured(err, vm, info) { console.error(err); return false; } You can also create global error handlers with app.config.errorHandler."
  },
  {
    question: "When would you use a render function instead of a template?",
    answer: "Use render functions when you need dynamic component creation, templates can’t express your logic, or you’re writing a reusable library. Example: render(h) { return h('button', this.label); } But templates are preferred 90% of the time for readability."
  },
  {
    question: "How do you handle responsiveness in Vue?",
    answer: "Use CSS frameworks (Tailwind, Bootstrap) or media queries, use window.innerWidth in watchers/computed, or use Vue plugins like vue-screen, vue-device-detect. Also: <KeepAlive> for caching mobile tab state."
  },
  {
    question: "How would you build a plugin in Vue?",
    answer: "Create a plugin by exporting an install() function. Example: export default { install(app, options) { app.config.globalProperties.$myMethod = () => {...}; } } Register with: app.use(MyPlugin); Use this for things like $toast, $api, or global utilities."
  },
  {
    question: "What's the difference between ref and reactive in Vue 3?",
    answer: "ref works with primitive values and returns .value. reactive is for objects/arrays. Example: const count = ref(0); const user = reactive({ name: 'Vishal' }); You can even unwrap ref in templates without .value."
  },
  {
    question: "How would you architect a Vue app for SSR + PWA + SEO?",
    answer: "Use Nuxt.js for SSR + SEO, add PWA support via Nuxt modules, use <meta> tags for dynamic SEO, add sitemap, robots.txt, and prefetching, use lazy-loading + compression for performance."
  },
  {
    question: "How do you handle real-time updates in Vue?",
    answer: "Use WebSockets (native or with libraries like socket.io), use event bus or Vuex to sync messages, use watchers for deep object changes. For scalability, use RabbitMQ/Kafka on the backend."
  },
  {
    question: "Explain v-once, v-pre, and v-memo.",
    answer: "v-once: Renders element once only — no reactivity. v-pre: Skips compilation — great for raw mustache template output. v-memo (Vue 3.2+): Caches template output if dependencies haven't changed. Example: <h1 v-once>This will never change</h1>"
  }
];
