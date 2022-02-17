import React from 'react'

import Auxillery from '../../hoc/Auxillery/Auxillery'
import HomeBanner from '../../Containers/HomeBanner/HomeBanner'
import PageBlock from '../../UI/pageBlock/pageBlock'

import Display3 from '../../UI/Display3/Display3'
import Display1 from '../../UI/Display1/Display1'
import SlideIn from '../../UI/SlideIn/SlideIn'

import shot1 from "../../assets/imgs/kadshow/shot1a.png"
import shot2 from "../../assets/imgs/kadshow/shot2a.png"
import shot3 from "../../assets/imgs/kadshow/shot3a.png"
import shot4 from "../../assets/imgs/kadshow/shot4a.png"


import {MuiThemeProvider} from '@material-ui/core/styles'
import {withTheme, withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import darkTheme from '../../assets/themes/darkTheme'

import SkillsBlockHolder from '../../UI/skillsBlockHolder/skillsBlockHolder'
// import ExampleImageHolder from '../../UI/ExampleImageHolder/ExampleImageHolder'

// import aboutMeIcon from '../../assets/SVG/pageBlockIcons/aboutMe.svg'
import ExamplesIcon from '@material-ui/icons/Devices'
import SkillsIcon from '@material-ui/icons/Settings'
import AboutMeIcon from '@material-ui/icons/FormatQuote'
import BurstMode from '@material-ui/icons/BurstMode'

const styles = {
    pageBlockIcon: {
        fontSize: '200px',
        color: 'white',
      opacity: '0.2',
        boxSizing: 'border-box',
        margin: '15px 0'
    }
}

const home = ( props ) => {
    const {theme, classes} = props
    return (
        <Auxillery>
            <MuiThemeProvider theme={darkTheme}>

                <Paper elevation={10}>
                    <HomeBanner />
                </Paper>
                <PageBlock margin={50} icon={<SkillsIcon />} label={'Skills'} backgroundColor={"rgb(40,40,40)"}>  </PageBlock>

                <PageBlock label={'About us'} icon={<AboutMeIcon />} backgroundColor={theme.palette.primary.main}>
                    <SlideIn partial={true}>
                        <Display3>About us</Display3>
                    </SlideIn>
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={2} />
                        <Grid item xs={10} md={8}>
                        <SlideIn partial={true}>
                                <AboutMeIcon className={classes.pageBlockIcon} />
                                </SlideIn>
                        </Grid>
                        <Grid item xs={4} sm={2} />
                        <Grid item xs={12} />

                        {/* ********** intro */}
                        <Grid item xs={1} md={2} />
                        <Grid item xs={10} md={8}>
                            <SlideIn partial={true}>

                                <SlideIn partial={true}>
                                    <Typography variant="body1">KaD.tech is a technology software house building cloud delivered VR and AR apps using web technologies, such as Babylon, Three, React, WebPack. The software being made by us is on the cutting edge of what is possible on webpage and is cross platform / cross browser compatible in a way that has not been seen before.</Typography>
                                </SlideIn>
                                <SlideIn partial={true}>
                               
                                  <Typography gutterBottom variant='h3' component={"h3"}>History</Typography>
                              
                                    <Typography variant="body1">KaD.tech was started by two guys; Dan and Kye, who both studied 3d graphics engineering at the same university. Around 6 years ago in their spare-time outside work, Dan started doing research into VR, photogrammetry scanning and skeletal rigging, whilst heading a development team within the financial services industry in London. By coincidence, around the same time Kye had started doing research and development around 3d web-based software for business application.</Typography>
                                </SlideIn>
                                <SlideIn partial={true}>
                                    <Typography variant="body1">Two years ago, in a chance conversation, they agreed to embark on a software development project, KaD.tech and the software we are about to launch is the result of that journey.</Typography>
                                </SlideIn>

                            </SlideIn>
                        </Grid>
                        <Grid item xs={1} md={2} />
                    </Grid>

                </PageBlock>

            </MuiThemeProvider>

            <MuiThemeProvider theme={darkTheme}>

            <PageBlock icon={<SkillsIcon />} label={'Skills'} backgroundColor={"rgb(40,40,40)"}>

                <SlideIn partial={true}>
                    <Display3>Skills</Display3>
                </SlideIn>

                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                    <SlideIn partial={true}>
                            <SkillsIcon style={{color: 'white', padding: '15px'}} className={classes.pageBlockIcon} />
                            </SlideIn>

                        <SlideIn partial={true}>
                            <Typography variant="body1">Here are just some of the core technologies and software we use inhouse on a daily basis.</Typography>
                        </SlideIn>

                        {/* ********** technical skill set */}
                        <Display1>Technical</Display1>
                        <SkillsBlockHolder type={'technical'} />

                        {/* ********** software skill set */}
                        <Display1>Software</Display1>
                        <SkillsBlockHolder type={'software'} />
                    </Grid>
                </Grid>
            </PageBlock>


            <PageBlock icon={<ExamplesIcon />} label={'Examples'} backgroundColor={'rgb(35,35,35)'}>
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <SlideIn partial={true}>
                            <Display3>Examples</Display3>
                            <SlideIn partial={true}>
                            <BurstMode style={{color: 'white', padding: '15px'}} className={classes.pageBlockIcon} />
                            </SlideIn>
                        </SlideIn>
                    </Grid>
                </Grid>


                {/* ************************ RHOKETT */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
  

                    <SlideIn partial={true}>
                        <Typography variant="body1">This is our first web-based 3D application, cross platform, cross browser compliant this software runs on all modern browsers from mobile phones to VR headsets, all from a single JavaScript codebase.  Delivered through the cloud using AWS services to a worldwide audience.</Typography>
                        </SlideIn>
                        <Grid item xs={1} md={2} />
                  
                        </Grid>
                  </Grid>
                  <Grid container spacing={8}>
                <Grid id="fick" item xs={1} md={1} />
                    <Grid item xs={10} md={10}>
                    <img src={shot1} style={{width: "100%", height: "auto", margin: "10px"}}></img>
                    <img src={shot2} style={{width: "100%", height: "auto", margin: "10px"}}></img>
                    <img src={shot3} style={{width: "100%", height: "auto", margin: "10px"}}></img>
                    <img src={shot4} style={{width: "100%", height: "auto", margin: "10px"}}></img>
                    </Grid>
           </Grid>

            </PageBlock>
            </MuiThemeProvider>


        </Auxillery >
    )
}

export default withTheme()( withStyles( styles )( home ) )
