const root = document.getElementById("root");

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click me to Redirect on google",
};

// function customRender(reactElement, root) {
//   const domElement = document.createElement(reactElement.type);
//   domElement.innerHTML = reactElement.children;
//   domElement.setAttribute("href", reactElement.props.href);
//   domElement.setAttribute("target", reactElement.props.target);

//   root.appendChild(domElement);
// }

//
//
//

// using forIn loop to set each property

function customRender() {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const value in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(value, reactElement.props[value]);
  }
  root.appendChild(domElement);
}

customRender(reactElement, root);
