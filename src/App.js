import React from "react";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditor from "react-froala-wysiwyg";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="App">
          <FroalaEditor
            onModelChange={(e) => {
              console.log("test >>>", e);
            }}
          />
        </div>
      </>
    );
  }
}

export default App;
