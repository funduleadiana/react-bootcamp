import logo from "./logo.svg";
import {
  experiments,
  Variant,
  emitter,
  experimentDebugger,
} from "@marvelapp/react-ab-test";
import "./App.css";
import Experiment from "@marvelapp/react-ab-test/lib/Experiment";

experimentDebugger.enable();
emitter.defineVariants(
  "landingPageExperiment",
  ["control", "variant1", "variant2"],
  [34, 33, 33]
);
function App() {
  return (
    <div className="App">
      <header className="App-header">My A/B test app</header>
      <div className="description">
        Doggo ipsum puggorino noodle horse shooberino heckin good boys and girls
        puggo, h*ck very taste wow. Bork shibe heckin good boys you are doing me
        a frighten h*ck, wow very biscit blep mlem blop mlem, very hand that
        feed shibe heck porgo. Wrinkler corgo most angery pupper I have ever
        seen long water shoob, doggo.
      </div>
      <Experiment name="landingPageExperiment">
        <Variant name="control">
          <button>Learn more</button>
        </Variant>
        <Variant name="variant1">
          <button className="variant-1">Learn more</button>
        </Variant>
        <Variant name="variant2">
          <button className="variant-2">Learn more</button>
        </Variant>
      </Experiment>
    </div>
  );
}

export default App;
