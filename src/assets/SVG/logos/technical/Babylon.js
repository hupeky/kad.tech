import React, {Component} from 'react'
import ManageChildren from '../../../../hoc/ManageChildren/ManageChildren'

class ReactLogo extends Component {
    render () {
        return (
               <ManageChildren startDelay={this.props.startDelay} onScreen={this.props.onScreen} name={this.props.id}>

<path fill="#FFFFFF" d="M198.3,21.66l-110.92,64v128.11l110.92,64.07l110.92-64V85.69L198.3,21.66z"/>
<polygon fill="#E0684B" points="309.22,85.69 274.5,65.65 241.1,84.93 275.82,104.98 "/>
<polygon fill="#E0684B" points="120.78,104.98 231.69,40.94 198.3,21.65 87.38,85.69 "/>
<polygon fill="#E0684B" points="163.58,169.78 198.3,189.82 233.01,169.78 198.3,149.73 "/>
<polygon fill="#BB464B" points="275.82,104.98 275.82,194.49 198.3,239.25 120.78,194.49 120.78,104.98 87.38,85.69 87.38,213.77 
	198.3,277.81 309.22,213.77 309.22,85.69 "/>
<polygon fill="#BB464B" points="198.3,109.65 163.58,129.69 163.58,169.78 198.3,149.73 233.01,169.78 233.01,129.69 "/>
<polygon fill="#E0DED8" points="275.82,104.98 233.01,129.69 233.01,169.78 198.3,189.82 198.3,239.25 275.82,194.49 "/>
<polygon fill="#D5D2CA" points="120.78,104.98 163.58,129.69 163.58,169.78 198.3,189.82 198.3,239.25 120.78,194.49 "/>
<polygon fill="#FFFFFF" points="231.69,40.94 274.5,65.65 241.1,84.93 275.82,104.98 233.01,129.69 198.3,109.65 163.58,129.69 
	120.78,104.98 "/>


        </ManageChildren>
    )
}
}

export default ReactLogo