import Hero from './Hero';
import Projects from './Projects';

// Kredencijali za Contentful cloud platformu gde se cuvaju podaci za dohvatanje.
// Space ID:
// Content Delivery API - access token:
const App = () => {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  );
};
export default App;
