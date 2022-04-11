import React, { useState } from 'react'
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function PostEditor({ onSubmit }) {
    const [data, setData] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // Define your onSubmit function here
        // ...
        onSubmit();
    };

    function inputHandler(event, editor) {
        console.log(editor.getData());
        // Define your onSubmit function here
        // ...
        // for example, setData() here
        setData();
    };

    return(
        <div className="Sumbit"> Form Here
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                {/* <CKEditor
                  id="inputText"
                  editor={ClassicEditor}
                  onChange={inputHandler}
                /> */}
              </div>
              <button>Submit Post</button>
            </form>
          </div>
        </div>
    )
}

export default PostEditor