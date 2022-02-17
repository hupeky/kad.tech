import React from 'react'

import TimelineLite from '../../assets/gsap/TimelineLite'
import '../../assets/gsap/plugins/DrawSVGPlugin'
import {Elastic} from '../../assets/gsap/EasePack'

class ManageChildren extends React.Component {
    state = {

    }
    tl = new TimelineLite()
    renderChildren () {
        return React.Children.map( this.props.children, ( child, i ) => {
            let clonedChild1 = React.cloneElement( child, {
                className: "fill",
                id: 'fill' + i,
                style: {fillOpacity: 0, transformOrigin:'50% 50%', transform:'scale(0)'}
            } )
            let clonedChild2 = React.cloneElement( child, {
                fill: "none",
                className: "stroke",
                id: 'stroke' + i,
                stroke: child.props.fill,
                strokeWidth: "2px",
                strokeOpacity:1
            } )
            let clonedArray = []
            clonedArray.push( [clonedChild1, clonedChild2] )
            return clonedArray
        } )
    }

    componentDidMount () {
        this.tl.set( `#${this.props.name} .stroke`, {drawSVG: "0% 0%"}, 0 )
        this.tl.set( `#${this.props.name} .stroke`, {delay: this.props.startDelay}, 0 )
            .staggerTo( `#${this.props.name} .stroke`, 1, {drawSVG: "0% 100%"}, 0.4 )
            .staggerTo( `#${this.props.name} .stroke`, 0.5, {strokeOpacity: 1}, 0.4 )
            .seek( 0 )
            .pause()

        let myFIll = document.getElementById( `${this.props.name}` ).getElementsByClassName( 'fill' )
        for ( let i = 0; i < myFIll.length; i++ ) {
            this.tl.set( myFIll[i].style, {fillOpacity: 0}, 2 )
            this.tl.to( myFIll[i].style, 0.5, {fillOpacity: 1}, 2.6 + ( this.props.startDelay  ) )
            this.tl.to( myFIll[i].style, 1.5, {transform:'scale(1)', ease:Elastic.easeOut},  2.6 + ( this.props.startDelay  ) )
        }
    }


    render () {
        if ( this.props.onScreen ) {
            this.tl.timeScale(1)
            this.tl.play()
        } else {
            this.tl.timeScale(8)
            this.tl.reverse()
        }

        return (
            <svg className="logoSVG" pathcount={React.Children.count( this.props.children )} version="1.1" id={this.props.name} x="0px" y="0px" viewBox="0 0 400 300">
                {this.renderChildren()}
            </svg>
        )
    }
}
export default ManageChildren
