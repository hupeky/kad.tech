import React from 'react'

import Auxillery from '../../hoc/Auxillery/Auxillery'
import HomeBanner from '../../Containers/HomeBanner/HomeBanner'
import PageBlock from '../../UI/pageBlock/pageBlock'

import Display3 from '../../UI/Display3/Display3'
import Display1 from '../../UI/Display1/Display1'
import Headline from '../../UI/headline/headline'

import ScaleIn from '../../UI/ScaleIn/ScaleIn'
import SlideIn from '../../UI/SlideIn/SlideIn'
import CompanyLogo from '../../UI/companyLogo/companyLogo'

import {MuiThemeProvider} from '@material-ui/core/styles'
import {withTheme, withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import darkTheme from '../../assets/themes/darkTheme'
import PageList from '../../UI/pageList/pageList'

import SkillsBlockHolder from '../../UI/skillsBlockHolder/skillsBlockHolder'
import ReferenceHolder from '../../UI/referenceHolder/ReferenceHolder'
import ExampleImageHolder from '../../UI/ExampleImageHolder/ExampleImageHolder'

import rsLogo from '../../assets/SVG/logos/companies/rsLogo.svg'
import pretLogo from '../../assets/SVG/logos/companies/pretSmall.svg'
import rhokettLogo from '../../assets/SVG/logos/companies/rhokettStampLogo.svg'
import rbsLogo from '../../assets/SVG/logos/companies/rbs.svg'

// import aboutMeIcon from '../../assets/SVG/pageBlockIcons/aboutMe.svg'
import ExamplesIcon from '@material-ui/icons/Devices'
import RecommendationsIcon from '@material-ui/icons/ThumbUp'
import SkillsIcon from '@material-ui/icons/Settings'
import AboutMeIcon from '@material-ui/icons/FormatQuote'

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


                <PageBlock label={'About Me'} icon={<AboutMeIcon />} backgroundColor={theme.palette.primary.main}>
                    <SlideIn partial={true}>
                        <Display3>About me</Display3>
                    </SlideIn>
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={2} />
                        <Grid item xs={10} md={8}>
                            <ScaleIn offset={50}>
                                <AboutMeIcon className={classes.pageBlockIcon} />
                            </ScaleIn>
                        </Grid>
                        <Grid item xs={4} sm={2} />
                        <Grid item xs={12} />

                        {/* ********** intro */}
                        <Grid item xs={1} md={2} />
                        <Grid item xs={10} md={8}>
                            <SlideIn partial={true}>

                                <SlideIn partial={true}>
                                    <Typography variant="body1">I am a front-end web developer with a specialism in 3D.  I have a blend of creative and technical skills with a passion for learning and problem solving. I help companies create a competitive edge by innovating the ways their users can connect to and visualise data.</Typography>
                                </SlideIn>
                                <SlideIn partial={true}>
                                    <Typography variant="body1">I’ve worked in a variety of industries over the last 10 years, ranging from engineering, insurance, e-commerce, B2B and B2C, I have a diverse range of skills in design, technical and business development, that give me the versatility to adapt to any job.</Typography>
                                </SlideIn>
                                <SlideIn partial={true}>
                                    <Typography variant="body1">I have knowledge of the latest frameworks and tools like React, Redux, JS2015+, GSAP, WebVR / Aframe amongst others (and will continue to learn more). With a background in 3d I’m seeing huge opportunities in the new wave of applications that can be created on the web and I’m excited to be evolving with it.</Typography>
                                </SlideIn>

                            </SlideIn>
                        </Grid>
                        <Grid item xs={1} md={2} />
                    </Grid>

                </PageBlock>

            </MuiThemeProvider>

            <MuiThemeProvider theme={darkTheme}>

            <PageBlock icon={<SkillsIcon />} label={'Skills'} backgroundColor={"rgb(50,50,50)"}>

                <SlideIn partial={true}>
                    <Display3>Skills</Display3>
                </SlideIn>

                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <SkillsIcon style={{color: 'white', padding: '15px'}} className={classes.pageBlockIcon} />
                        </ScaleIn>

                        <SlideIn partial={true}>
                            <Typography variant="body1">I’m never going to want to stop learning, I'm amazed at the power of the technology we have at our disposal today. Such is my interest in technology, that I will spend my free time learning it, not because I need to, but because I <i>want</i> to.</Typography>
                        </SlideIn>

                        {/* ********** technical skill set */}
                        <Display1>Technical</Display1>
                        <SkillsBlockHolder type={'technical'} />

                        {/* ********** software skill set */}
                        <Display1>Software</Display1>
                        <SkillsBlockHolder type={'software'} />

                        {/* ********** other skill set */}
                        <Display1>Other</Display1>
                        <PageList columns={2} list={[
                            'Rapid learning'
                            , 'Detailed researching',
                            'Prototyping and testing',
                            'Strong communicator ',
                            'Good presentation skills',
                            'Can influence at senior level',
                            'Exposure to agile environment',
                            'Creative and design sensibility'
                        ]} />
                    </Grid>
                </Grid>
            </PageBlock>
    

            <PageBlock icon={<ExamplesIcon />} label={'Examples'} backgroundColor={'black'}>
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <SlideIn partial={true}>
                            <Display3>Examples</Display3>
                        </SlideIn>
                    </Grid>
                </Grid>

                {/* ************************ RBS */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <CompanyLogo img={rbsLogo} name='RBS Bank' width={100} />
                        </ScaleIn>
                        <Display1>RBS Bank</Display1>
                        <Typography variant="body1">This app was produced in around 5 weeks, it was a gamified style quiz that helped communicate banking regulation changes in a fun way. I worked closely with the designer from an 80 page story board to build out a React app that worked across all device types and IE11.</Typography >
                        <Typography variant="body1">React was also used to create a dynamic character using svg data that could randomise 10s of thousands of character combinations that could then be shared on their social media platform.</Typography >
                        <Headline>Deliverables</Headline>
                        <PageList columns={1} list={[
                            'Great feedback from client',
                            'Compatible accross all devices and resolutions',
                            'Randomised character creation'
                        ]} />
                    </Grid>
                </Grid>
                <ExampleImageHolder company='rbs' />

                {/* ************************ RS COMPONENTS */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <CompanyLogo img={rsLogo} name={'RS Components'} width={100} />
                        </ScaleIn>
                        <Display1>RS Components</Display1>
                        <Typography variant="body1">I started this role as a web designer creating marketing pages for the multichannel team (Internationally). The role quickly evolved to supporting the UX design teams for mobile prototyping and development.</Typography >
                        <Typography variant="body1">Whilst in that role I impressed the company by developing (in my own time) a web based 3d demo, using JavaScript, WebGL, and three.js. Which earned me a new position in innovation, working with new technologies to drive user experiences such as web based 3d product systems and augmented reality for mobile, which were fast becoming the most important future technology platforms for the business. </Typography >

                        <Headline>Deliverables</Headline>
                        <PageList columns={1} list={[
                            'Earned a promotion from a pioneering 3d web prototype',
                            'Supported the developement of an experimental AR product viewer',
                            'Built marketing pages to support product launches of global brands',
                            'Built a prototype mobile interface with UX team'
                        ]} />
                    </Grid>
                </Grid>
                <ExampleImageHolder company='rs' />

                {/* ************************ RHOKETT */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <CompanyLogo img={rhokettLogo} width={170} />
                        </ScaleIn>
                        <Display1>Rhokett</Display1>


                        <Typography variant="body1">Rhokett is a company Ive done a lot of freelance work for over the years, most recently I worked on a prototype for a new 3d product viewing system for their dessert range using a photogrammetry technique for photorealistic 3d. Its then run through simplification processes to bring each dessert down from 60MB of data to under 1MB and can run on low-end devices. </Typography>

                        <Headline>Deliverables</Headline>

                        <PageList columns={1} list={[
                            'Created award nominated designs for luxury packaging',
                            'Designed and built their web site end to end',
                            'Prototyped 3D photogrammatery for photo-real products'
                        ]} />
                    </Grid>
                </Grid>
                <ExampleImageHolder company='rhokett' />

                {/* ************************ PRET */}
                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <ScaleIn offset={50}>
                            <CompanyLogo style={{marginBottom: '50px'}} img={pretLogo} width={170} />
                        </ScaleIn>
                    </Grid>
                </Grid>
                <ExampleImageHolder company='pret' />

            </PageBlock>
            </MuiThemeProvider>

            <PageBlock icon={<RecommendationsIcon />} label={'Recommendations'} backgroundColor={theme.palette.grey.main}>


                <Grid container spacing={8}>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={10} md={8}>
                        <SlideIn partial={true}>
                            <Display3>Recommendations</Display3>
                        </SlideIn>
                        <ScaleIn offset={50}>
                            <RecommendationsIcon style={{color: 'black', padding: '15px'}} className={classes.pageBlockIcon} />
                        </ScaleIn>
                    </Grid>
                </Grid>

                <ReferenceHolder />
            </PageBlock>
        </Auxillery >
    )
}

export default withTheme()( withStyles( styles )( home ) )
