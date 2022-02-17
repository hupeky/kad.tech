// component for lists
import ListItem from '../../UI/ListItem/ListItem'

 // hoc svg component for animating icons
 // new

import Agile from '../../assets/SVG/logos/technical/Agile'
import Aws from '../../assets/SVG/logos/technical/Aws'
import Typescript from '../../assets/SVG/logos/technical/Typescript'
import Babylon from '../../assets/SVG/logos/technical/Babylon'
import Three from '../../assets/SVG/logos/technical/Three'

import ReactLogo from '../../assets/SVG/logos/technical/ReactLogo'
import ReduxLogo from '../../assets/SVG/logos/technical/ReduxLogo'
import JS2015Logo from '../../assets/SVG/logos/technical/JS2015Logo'
import WebpackLogo from '../../assets/SVG/logos/technical/WebpackLogo'

import GreensockLogo from '../../assets/SVG/logos/technical/GreensockLogo'
import GithubLogo from '../../assets/SVG/logos/technical/GithubLogo'
import AframeLogo from '../../assets/SVG/logos/technical/AframeLogo'

 // standard svg imports for list
 import unity from '../../assets/SVG/logos/software/unity.svg'
 import blender from '../../assets/SVG/logos/software/blender.svg'
 import framer from '../../assets/SVG/logos/software/framer.svg'
 import visualstudio from '../../assets/SVG/logos/software/visualstudio.svg'



import adobeAI from '../../assets/SVG/logos/software/adobeAI.svg'
import adobeID from '../../assets/SVG/logos/software/adobeID.svg'
import adobePS from '../../assets/SVG/logos/software/adobePS.svg'
import adobeXD from '../../assets/SVG/logos/software/adobeXD.svg'
import maya from '../../assets/SVG/logos/software/maya.svg'
import realityCapture from '../../assets/SVG/logos/software/realityCapture.svg'
import sketch from '../../assets/SVG/logos/software/sketch.svg'
import vsCode from '../../assets/SVG/logos/software/vsCode.svg'

const logos = {
    software: [
      {
        component: ListItem,
        img:blender,
        id: 'blender',
        title: 'Blender'
    },
    {
        component: ListItem,
        img:unity,
        id: 'unity',
        title: 'Unity'
    },
    {
      component: ListItem,
      img:maya,
      id: 'maya',
      title: 'Maya'
  },
  {
    component: ListItem,
    img:realityCapture,
    id: 'realityCapture',
    title: 'Reality Capture'
},
    {
        component: ListItem,
        img:visualstudio,
        id: 'Visualstudio',
        title: 'Visual Studio'
    },
    {
      component: ListItem,
      img:vsCode,
      id: 'vscode',
      title: 'VS Code'
  },
    {
        component: ListItem,
        img:framer,
        id: 'framer',
        title: 'Framer'
    },


        {
            component: ListItem,
            img:sketch,
            id: 'sketch',
            title: 'Sketch'
        },

        {
            component: ListItem,
            img:adobeXD,
            id: 'adobeXD',
            title: 'adobe XD'
        },
        {
            component: ListItem,
            img:adobePS,
            id: 'adobePS',
            title: 'Photoshop'
        },
        {
            component: ListItem,
            img:adobeID,
            id: 'adobeID',
            title: 'InDesign'
        },
        {
            component: ListItem,
            img:adobeAI,
            id: 'adobeAI',
            title: 'Illustrator'
        }
    ],
    technical: [
      {
        component: Babylon,
        id: 'Babylon',
        title: 'Babylon.js'
    },

    {
      component: Aws,
      id: 'AWS',
      title: 'AWS Services'
  },
  {
    component: Typescript,
    id: 'Typescript',
    title: 'Typescript'
},
{
  component: Three,
  id: 'Three',
  title: 'Three.js'
},

        {
            component: ReactLogo,
            id: 'react',
            title: 'React'
        },
        {
            component: ReduxLogo,
            id: 'redux',
            title: 'Redux'
        },
        {
            component: JS2015Logo,
            id: 'JS2015',
            title: 'JS 2015+'
        },
        {
            component: WebpackLogo,
            id: 'webpack',
            title: 'Webpack'
        },

        {
            component: GreensockLogo,
            id: 'greensock',
            title: 'GSAP'
        },
        {
            component: GithubLogo,
            id: 'github',
            title: 'Github'
        },
        {
            component: AframeLogo,
            id: 'aframe',
            title: 'A-Frame'
        },
        {
          component: Agile,
          id: 'agile',
          title: 'Agile'
      },
    ]
}


export default logos
