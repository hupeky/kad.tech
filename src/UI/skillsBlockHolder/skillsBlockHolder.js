import React, {Component} from 'react'

import OnScreen from '../../hoc/OnScreen/OnScreen'
import classes from './skillsBlockHolder.css'

import Grid from '@material-ui/core/Grid'

import skillsBlockData from './skillsBlockData'
import { Typography } from '@material-ui/core'

class SkillsBlockHolder extends Component {
    delay = 0
    buildLogosHandler = () => {
        this.delay = 0
        return (
            <Grid className={classes.skillsBlock} container>
                {skillsBlockData[this.props.type].map( item => {
                    const LogoComponent = item.component
                    this.delay += this.props.delay
                    let startDelay = this.delay / 1000
                    return (
                        <Grid key={item.id} item xs={this.props.xs} sm={this.props.sm}>
                            <div style={{transitionDelay: this.props.onScreen === true ? this.delay + 'ms' :  '0ms'}} className={classes.slideIn}>
                                <LogoComponent img={item.img} startDelay={startDelay} onScreen={this.props.onScreen} id={item.id} title={item.title} />
                                {this.props.type === 'technical' ? <Typography style={{textAlign: "center"}}>{item.title}</Typography> : null}
                            </div>
                        </Grid>
                    )
                } )}
            </Grid>
        )
    }

    render() {
        return (
            <div className={this.props.onScreen ? [classes.onScreen, 'onscreen'].join( " " ) : null} >
                <Grid container spacing={8}>
                    {this.buildLogosHandler()}
                </Grid>
            </div>
        )
    }

}
SkillsBlockHolder.defaultProps = {
    delay: 100,
    xs: 6,
    sm: 3
}
export default OnScreen( SkillsBlockHolder, true, -25) // component, partial vis, offset
