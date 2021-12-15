import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Grid, Container } from "@material-ui/core";
import nunjucks from "nunjucks";

function App(props) {
  const [context, setContext] = useState('{"value": "hello world"}');
  const [template, setTemplate] = useState("{{value}}");
  const [output, setOutput] = useState("");

  const handleChange = (setter, e) => setter(e.target.value);

  function render() {
    console.log(context);
    const ctx = JSON.parse(context);
    console.log(ctx);
    console.log(template);
    console.log(output);
    nunjucks.configure({ autoescape: true });
    const rendered = nunjucks.renderString(template, ctx);
    console.log(rendered);
    setOutput(rendered);
  }
  return (
    <Container>
      <Button onClick={render} variant="contained" color="primary">
        Render
      </Button>
      <Grid container spacing={24}>
        <Grid item xs>
          <TextField
            label="Context"
            placeholder='{"value": "hello world"}'
            fullWidth
            multiline={true}
            value={context}
            onChange={(e) => handleChange(setContext, e)}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs>
          <TextField
            label="Template"
            placeholder="{{value}}..."
            fullWidth
            multiline={true}
            value={template}
            onChange={(e) => handleChange(setTemplate, e)}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs>
          <TextField
            label="Output"
            placeholder="hello world"
            fullWidth
            multiline={true}
            value={output}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
