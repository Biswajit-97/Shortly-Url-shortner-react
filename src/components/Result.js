import React from 'react'
import '../assets/main.css'

function Result({ shortlink, url }) {


    return (
        <div>
          <div className="link__output">
            <div className="link__output__address">
              <p className="main-url">{url}</p>
            </div>
            <p  onClick={() =>  navigator.clipboard.writeText(shortlink)} className="link__output__result">
            {shortlink}
            </p>
          </div>
        </div>
    )
}

export default Result
