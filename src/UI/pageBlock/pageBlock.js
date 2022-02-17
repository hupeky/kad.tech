import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as siteActions from '../../store/actions/siteActions'

import classes from './pageBlock.css'

import Paper from '@material-ui/core/Paper'


class PageBlock extends Component  {
    componentDidMount () {
         let pageBlockData = {
             label: this.props.label,
             ref: this.sectionRef,
             icon: this.props.icon,
             current: false
         }
        this.props.addPageBlockDataHandler (pageBlockData)
    }
    render () {
        if (this.props.onScreen === true) {
            console.log (this.props.label, 'is on screen now')
        }
        const backgroundColor = {backgroundColor: this.props.backgroundColor}
        return (
            <section ref={(sectionRef) => { this.sectionRef = sectionRef }} style={{...backgroundColor} } className={[classes.sectionBlock, this.props.onScreen ? 'visible' : null].join( ' ' )}>
                <Paper elevation={10}>
                    <div style={{ margin: `${this.props.margin}px auto` }} className={classes.contentBlock}>
                        {this.props.children}
                    </div>
                </Paper>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPageBlockDataHandler: ( pageBlockData ) => dispatch( {type: siteActions.ADD_PAGEBLOCK, pageBlockData: pageBlockData} )
    }
}

export default connect( null, mapDispatchToProps )( PageBlock )
