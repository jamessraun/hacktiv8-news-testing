import React, {Component} from 'react'
import {Loader, Segment,Item,Card,Button,List,Label} from 'semantic-ui-react'


class ItemList extends Component {

  render() {
    if(this.props.bugs.length===0){
      return (
        <div style={{marginTop:20}}>
         <Segment>
           <Loader active inline/>
         </Segment>
        </div>
      );
    }
    else{
      let list=[]
      let bugs = this.props.bugs
      for (let key in bugs) {
        list.push({id:key,value:bugs[key]})
      }

      return(
          <div style={{marginTop:20}}>
            <Item.Group>
            {list.map((bug) =>
              <Item key={bug.id}>
                <Item.Content>
                    <Card>
                      <Card.Content>
                        <Card.Header>
                          {bug.value.desc}
                        </Card.Header>

                        <Card.Meta>

                        </Card.Meta>

                        <Card.Description>
                          <List selection>
                            <List.Item>
                              <Label color='red' horizontal>{bug.value.severity}</Label>
                            </List.Item>
                            <List.Item>
                              Assigned To : {bug.value.assigned}
                            </List.Item>
                            <List.Item>
                              <Label color='green' horizontal>{bug.value.status} </Label>
                            </List.Item>
                          </List>
                        </Card.Description>

                      </Card.Content>
                      <Card.Content extra>
                        <div className='ui two buttons'>
                          <Button id={bug.id} onClick={this.props.handleEdit} basic color='green'>Close</Button>
                          <Button id={bug.id} onClick={this.props.handleDelete} basic color='red'>Delete</Button>
                        </div>
                      </Card.Content>
                    </Card>
                </Item.Content>
              </Item>
              )}
            </Item.Group>
          </div>
        );
      }
    }
}

export default ItemList
