<template>
  <div class="slides">
    <slide><opening/></slide>
    <slide><introduction/></slide>
    <slide>
      <slide><get-started/></slide>
      <slide><structure/></slide>
    </slide>
    <slide><vue-file/></slide>
    <slide>
      <slide><templates/></slide>
      <slide><template-details/></slide>
    </slide>
    <slide><components/></slide>
    <slide>
      <slide><styles/></slide>
      <slide><style-details/></slide>
    </slide>
    <slide>
      <slide><scripts/></slide>
      <slide><state/></slide>
      <slide><mutators/></slide>
      <slide><life-cycle/></slide>
      <slide><life-cycle-details/></slide>
    </slide>
    <slide><h1>Thanks</h1></slide>
  </div>
</template>

<script>
import Slide from "./components/Slide";
import Opening from "./components/slides/Opening"
import Introduction from "./components/slides/Introduction"
import GetStarted from "./components/slides/GetStarted/Index"
import Structure from "./components/slides/GetStarted/Structure"
import VueFile from "./components/slides/VueFile/Index"
import Templates from "./components/slides/VueFile/Templates/Template"
import TemplateDetails from "./components/slides/VueFile/Templates/TemplateDetails"
import Components from "./components/slides/VueFile/Components"
import Styles from "./components/slides/VueFile/Styles/Style"
import StyleDetails from "./components/slides/VueFile/Styles/StyleDetails"
import Scripts from "./components/slides/VueFile/Scripts/Script"
import State from "./components/slides/VueFile/Scripts/State"
import Mutators from "./components/slides/VueFile/Scripts/Mutators"
import LifeCycle from "./components/slides/VueFile/Scripts/LifeCycle"
import LifeCycleDetails from "./components/slides/VueFile/Scripts/LifeCycleDetails"
export default {
  name: "app",
  components: {
    Slide,
    Opening,
    Introduction,
    GetStarted,
    Structure,
    VueFile,
    Templates,
    TemplateDetails,
    Components,
    Styles,
    StyleDetails,
    Scripts,
    State,
    Mutators,
    LifeCycle,
    LifeCycleDetails
  },
  data() {
    return {
      activeSlide: [0, 0]
    };
  },
  mounted() {
    Reveal.addEventListener("slidechanged", event => {
      this.activeSlide = [event.indexh, event.indexv];
    });
  },
  watch: {
    activeSlide(newAS, oldAS) {
      let current = Reveal.getState();
      // check reveal state with our state, if it match then no action is needed
      // this is also needed to stop any update loop on the activeSlide
      if (current.indexh === newAS[0] && current.indexv === newAS[1]) {
        return
      }
      // change reveal state acording to our state
      Reveal.setState({ indexh: newAS[0], indexv: newAS[1] });
      current = Reveal.getState();
      // check if reveal state changed, if not reset our state
      if (current.indexh !== newAS[0] || current.indexv !== newAS[1]) {
        this.activeSlide = [current.indexh, current.indexv]
      }
    }
  },
  destroyed() {
    Reveal.removeEventListener("slidechanged", event => {
      this.activeSlide = [event.indexh, event.indexv];
    });
  }
};
</script>

<style>
footer {
  position: fixed;
  bottom: 8px;
  color: #bbb;
  width: 96%;
  line-height: 6px;
  font-size: 14px;
  padding: 0 2%;
}
footer a {
  color: #fff;
}
#attribution {
  float: left;
}
#link {
  float: right;
}
</style>
