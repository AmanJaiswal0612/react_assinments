import { Button, Rapper } from "./Button";

import React from 'react'

const Btn = () => {
  return (
    <div>

<Rapper>
      <Button color="white" border="1px solid grey" background="blue">
        Primary Button
      </Button>
      <Button color="black" border="1px solid grey" background="white">
        Default Button
      </Button>
      <Button border="1px dashed black">Dashed Button</Button>
      <Button border="none">Text Button</Button>
      <Button border="none" color="blue">
        Link Button
      </Button>
      <Button
        color="white"
        bimg="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wEar?ver=c556"
        borderRadius="50px"
      >
        robocalls
      </Button>
    </Rapper>

    </div>
  )
}

export default Btn