import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./App.css";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      {/* //ref required  */}
      <h1>React Book</h1>
      <p>{props.children}</p>
      <p class="page-number">Page number: {props.number}</p>
    </div>
  );
});

function App(props) {
  return (
    <div class="App">
      {/* <h1>React Book</h1> */}
      <HTMLFlipBook class="App" width={500} height={500} showCover={true} maxShadowOpacity={1}>
        <PageCover>BOOK TITLE</PageCover>
        <Page number="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sem sed felis dapibus vulputate. Nullam non libero iaculis nibh tincidunt ultricies. Phasellus luctus interdum magna et luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec lacinia fermentum lobortis. Donec ipsum metus, accumsan a orci vitae, dignissim malesuada sapien. Donec quis augue libero. Phasellus iaculis mi odio, at scelerisque felis vestibulum quis.</Page>
        <Page number="2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sem sed felis dapibus vulputate. Nullam non libero iaculis nibh tincidunt ultricies. Phasellus luctus interdum magna et luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec lacinia fermentum lobortis. Donec ipsum metus, accumsan a orci vitae, dignissim malesuada sapien. Donec quis augue libero. Phasellus iaculis mi odio, at scelerisque felis vestibulum quis.</Page>
        <Page number="3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sem sed felis dapibus vulputate. Nullam non libero iaculis nibh tincidunt ultricies. Phasellus luctus interdum magna et luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec lacinia fermentum lobortis. Donec ipsum metus, accumsan a orci vitae, dignissim malesuada sapien. Donec quis augue libero. Phasellus iaculis mi odio, at scelerisque felis vestibulum quis.</Page>
        <Page number="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sem sed felis dapibus vulputate. Nullam non libero iaculis nibh tincidunt ultricies. Phasellus luctus interdum magna et luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec lacinia fermentum lobortis. Donec ipsum metus, accumsan a orci vitae, dignissim malesuada sapien. Donec quis augue libero. Phasellus iaculis mi odio, at scelerisque felis vestibulum quis.</Page>
        <PageCover>THE END</PageCover>
      </HTMLFlipBook>
      
      {/* [<span>{this.state.page}</span> of
               <span>{this.state.totalPage}</span>] */}
    </div>
  );
}

export default App;
