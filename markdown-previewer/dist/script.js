//set up marked 
marked.setOptions({
  breaks: true });


//React function components
const App = () => {
  const [enteredContent, setEntered] = React.useState(`${initialTxt}`);
  return /*#__PURE__*/(
    React.createElement("div", { class: "container-md" }, /*#__PURE__*/
    React.createElement(Editor, {
      entered: enteredContent,
      setEnteredTxt: setEntered }), /*#__PURE__*/

    React.createElement("br", null), /*#__PURE__*/
    React.createElement(PreView, { content: enteredContent })));


};

const PreView = ({ content }) => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/

  React.createElement("h2", { "data-bs-toggle": "tooltip", "data-bs-placement": "right", title: "Show the formatted content here" }, "PreView"), /*#__PURE__*/
  React.createElement("div", { class: "view", id: "preview", dangerouslySetInnerHTML: { __html: marked(content) } }));


};

const Editor = ({ entered, setEnteredTxt }) => {
  const textChangeHandler = e => {
    setEnteredTxt(e.target.value);
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h2", { "data-bs-toggle": "tooltip", "data-bs-placement": "right", title: "Edite markdown text here " }, "EditArea"), /*#__PURE__*/
    React.createElement("textarea", { class: "form-control", id: "editor", type: "text", placeholder: "<h1>Title</h1>", value: entered, onChange: textChangeHandler })));


};

//initial value for Editor
const initialTxt = `# Welcome to my React Markdown Previewer!
## Type for fun
here's something you can do:
Heres some code, \`<div></div>\`, between 2 backticks.
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

   
1. edit some code:
    
2. write a story: once upon a time.... **bold**
    
3. put your images here ![image](https://bit.ly/fcc-relaxing-cat) sharing a <a href="https://www.freecodecamp.org/news/svg-tutorial-learn-to-code-images/">link about how to make Christmas icons</a>;
    


\`\`\`
 // this is multi-line code:
     
     #include<stdio.h> 
        int main(){                             
        
        printf("hello!");                                  
                                                                       
        return 0;                                                   
        }
\`\`\`
[links](https://www.freecodecamp.org) link about how to make Christmas icons </a>
Heres some code, \`<div></div>\`, between 2 backticks.
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
 <blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting <strong>the future of nature</strong>. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote>`;


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));