import {
  experiments,
  Variant,
  emitter,
  experimentDebugger,
} from "@marvelapp/react-ab-test";
import "./App.css";
import Experiment from "@marvelapp/react-ab-test/lib/Experiment";
import mixpanel from "@marvelapp/react-ab-test/lib/helpers/mixpanel";
import React from "react";

experimentDebugger.enable();
emitter.defineVariants(
  "landingPageExperiment",
  ["control", "variant1", "variant2"],
  [34, 33, 33]
);

class App extends React.Component {
  buttonClick(e) {
    //Button logic - redirect to a new page etc
    emitter.emitWin("landingPageExperiment");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">My A/B test app</header>
        <div className="description">
          Doggo ipsum puggorino noodle horse shooberino heckin good boys and
          girls puggo, h*ck very taste wow. Bork shibe heckin good boys you are
          doing me a frighten h*ck, wow very biscit blep mlem blop mlem, very
          hand that feed shibe heck porgo. Wrinkler corgo most angery pupper I
          have ever seen long water shoob, doggo.
        </div>
        <Experiment name="landingPageExperiment">
          <Variant name="control">
            <button onClick={this.buttonClick}>Learn more</button>
          </Variant>
          <Variant name="variant1">
            <button onClick={this.buttonClick} className="variant1">
              Learn more
            </button>
          </Variant>
          <Variant name="variant2">
            <button onClick={this.buttonClick} className="variant2">
              Learn more
            </button>
          </Variant>
        </Experiment>
      </div>
    );
  }
}

export default App;

//in order to keep track of what is displayed and compare to other data
emitter.addPlayListener((experimentName, variantName) => {
  console.log(
    `Displaying experiment ${experimentName} with variant ${variantName}`
  );
});

emitter.addWinListener((experimentName, variantName) => {
  console.log(
    `Variant ${variantName} from Experiment ${experimentName} was clicked`
  );
  // mixpanel.track(experimentName, {
  //   name: experimentName,
  //   variant: variantName,
  // });
});
