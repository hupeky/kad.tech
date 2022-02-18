import React from 'react'

import exampleImageData from './exampleImageData'
import ExampleImage from './ExampleImage/ExampleImage'

const exampleImageHolder = (props) => {
    const calculatePercent = ( value1, value2 ) => {
        let result = ( value1 / value2 ) * 100
        return parseFloat(result.toFixed(1))
    }
    let exampleImages = exampleImageData[props.company].map((exampleImage,i) => {
        let percent = calculatePercent( exampleImage.height, exampleImage.width )
        return (
            <ExampleImage height={`${percent}%`}  key={i} url={exampleImage.url} />
        )
    })
    return exampleImages
}
export default exampleImageHolder
