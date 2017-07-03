import React,{Component} from 'react'
import {Form} from 'semantic-ui-react'


const options = [
  { key: 'l', text: 'Low', value: 'low' },
  { key: 'n', text: 'Normal', value: 'normal' },
  { key: 'h', text: 'High', value: 'high' }
]


class FormAdd extends Component {



 render() {

    return (
      <div>
        <Form style={{marginTop:30,marginBottom:30,marginLeft:100,marginRight:100}} onSubmit={this.props.handleSubmit}>
          <Form.Group>
            <Form.Input onChange={this.props.handleChangeDesc} value={this.props.desc} label='Description' placeholder='Description a bug'/>
          </Form.Group>
          <Form.Group>
            <Form.Select onChange={this.props.handleChangeSeverity} value={this.props.severity} label='Severity' options={options} placeholder='Choose Severity' />
          </Form.Group>
          <Form.Group>
            <Form.Input onChange={this.props.handleChangeAssigned} value={this.props.assigned} label='Assigned To' placeholder='Enter responsible...' />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default FormAdd
