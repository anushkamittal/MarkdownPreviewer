class App extends React.Component {
  constructor(){
    super();
    this.state = {
      markdown :''
    };
  }
  updateMarkdown (event){
    this.setState ({
      markdown : event.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>Markdown Input</h1>
        <textarea  onChange={this.updateMarkdown.bind(this)} value={this.state.markdown} /><br />
        <h1>Markdown Output</h1>
        <div dangerouslySetInnerHTML={{__html:marked(this.state.markdown)}} ></div>
      </div>
    )
  }
}

React.render(<App />,document.getElementById('root'));

