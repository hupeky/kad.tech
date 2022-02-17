import React, {Component} from 'react'

import {withStyles} from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'

import LazyLoad from 'react-lazyload'
import Spinner from '../../../UI/Spinner/Spinner'

import onScreen from '../../../hoc/OnScreen/OnScreen'
import myClasses from './ExampleImage.css'
import { Typography } from '@material-ui/core'
const styles = theme => ( {
    card: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginBottom: '60px'
        // [theme.breakpoints.down( 'sm' )]: {flexDirection: 'column'}
    },

    imgHolder: {
        width: '100%',
        boxSizing: 'border-box'
    },
    img: {
        height: 0,
        width: '100%',
        paddingTop: '56.5%', // 16:9
        display: 'block',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create( 'transform', {
            duration: theme.transitions.duration.shortest
        } )
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    title: {
        backgroundColor: theme.palette.primary.main,
        textAlign: 'left'
    }
} )

class ReferenceItem extends Component {
    state = {
        expanded: false
    }

    handleExpandClick = () => {
        this.setState( {expanded: !this.state.expanded} )
    }

    render () {
        const imgProps = {width: '80%', height: '80%'}
        const {classes} = this.props
        return (
            <LazyLoad
                height={500}
                offset={40000}
                placeholder={<Spinner />}>
                <Card className={classes.card}>
                    <CardHeader
                        className={classes.title}
                        avatar={<Avatar aria-label="Recipe" imgProps={imgProps} src={this.props.logo}></Avatar>}
                        title={this.props.title}
                    />

                    {this.props.url ? <div className={[myClasses.imgHolder, this.props.onScreen ? myClasses.onScreen : null].join( " " )}>
                        <div className={myClasses.img} style={{paddingTop: this.props.height, backgroundImage: `url(${this.props.url})`}} />
                    </div> :
                    <div className={myClasses.videoWrapper}>
                            <iframe src={this.props.video} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>}
                    {this.props.body ? (
                        <React.Fragment>
                            <CardActions className={classes.actions} disableActionSpacing>
                                <Typography component={"p"} style={{marginLeft: 'auto', height: 0, marginTop: "12px"}}>more info</Typography>
                                <IconButton
                                    className={[classes.expand, this.state.expanded ? classes.expandOpen : null].join( " " )}
                                    onClick={this.handleExpandClick}
                                    aria-expanded={this.state.expanded}
                                    aria-label="Show more">
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>

                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    {this.props.body}
                                </CardContent>
                            </Collapse>
                        </React.Fragment> )
                        : null
                    }
                </Card>
            </LazyLoad>
        )
    }
}

export default onScreen( withStyles( styles )( ReferenceItem ), true )