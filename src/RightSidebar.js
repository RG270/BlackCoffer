import React from 'react'
import { Grid, Menu, Sidebar, Button, Checkbox, Dropdown } from 'semantic-ui-react'
import App from './App'

const RightSidebar = () => {
  
  const [visible, setVisible] = React.useState(true);
return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        // inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width='wide'
        direction='right'
      >
      <div className="ui basic segment">
        <Button.Group buttons={['Chart', 'Quick Guide', 'Feedback']} />
      </div>
      
      <div className="ui segment">
      Waves (Years)
        <Button.Group size='mini' buttons={['All', '1', '2', '3', '4']} />
      </div>
      
      <h4>Year Range</h4>
      <input type="range" min="2020" max="2100" value="2020" class="slider"></input>
      
      <div className='ui basic segment'>
        <Grid>
          <Grid.Column width={9}>
            <h4>Filter</h4>
            <div className="ui basic segment">
              <Checkbox label={{ children: <code>TOPIC</code> }} />
            </div>
            <div className="ui basic segment">
              <Checkbox label={{ children: <code>SECTOR</code> }} />
            </div>
            <div className="ui basic segment">
              <Checkbox label={{ children: <code>REGION</code> }} />
            </div>
            <div className="ui basic segment">
              <Checkbox label={{ children: <code>PEST</code> }} />
            </div>
          </Grid.Column>
          <Grid.Column width={7}>
            <h5>MEASURE</h5>
              <Dropdown placeholder='Intensity' fluid selection />
            <h5>SOURCE</h5>
              <Dropdown placeholder='All' fluid selection />
            <h5>CONFIDENCE</h5>
              <Dropdown placeholder='95%' fluid selection />
          </Grid.Column>
        </Grid>
        
        <div className='ui basic segment'>
          <Button color='yellow'>Save</Button>
          <Button color='teal'>Evidence</Button>
        </div>
        
      </div>
      
      </Sidebar>
      <Sidebar.Pusher>
        <div>
          <App />
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default RightSidebar;