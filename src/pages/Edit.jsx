import React, { createRef, useState } from 'react';
import { Button } from "react-bootstrap";
import { exportComponentAsJPEG } from "react-component-export-image";
import { useSearchParams } from "react-router-dom";
import Text from "../components/text";

const EditPage = () =>{
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const memeRef = createRef();
    

    const addText = () => { setCount(count + 1)};

    

    return (
   <div>
    <div style={{width: "700px", border: "1px solid"}} ref={memeRef} className="meme mt-5 mb-5">
        <img src={params.get("url")} width ="250px" />
        {
            Array(count)
            .fill(0)
            .map((e) => (
                <Text />
            ))
        }
    </div>
    <Button onClick={addText}>Add Text </Button>
    <Button variant="success" onClick={e => exportComponentAsJPEG(memeRef)}>Save</Button>
    </div>
    );
   };

export default EditPage;
