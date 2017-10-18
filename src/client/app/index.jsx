import React from 'react';
import {render} from 'react-dom';
import {Header, HeaderLogo, HeaderItem, ItemHeaderUser} from './components/header.jsx';
import {user} from './data.jsx';
import MainContainer from './components/MainContainer.jsx';
import MainContent from './components/MainContent.jsx';
import PageHeader from './components/PageHeader.jsx';
import Content from './components/Content.jsx';
import {Form, TextField} from './components/Form.jsx';
import {Sidebar, SidebarItem, SidebarItemSub} from './components/Sidebar.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputan : ""
    }
  }

  handleText(value){
    this.setState({
      inputan: value
    })
  }
  render () {
    return (
        <div>
            <Header>
              <HeaderLogo>
                Nursan
              </HeaderLogo>
            </Header>
            <MainContainer>
              <Sidebar>
                <SidebarItem link="#" title="Dashboard" icon="fa-tachometer" />
                <SidebarItem link="#" title="Dashboard" icon="fa-eye" />
                <SidebarItemSub title="Submenu">
                  <SidebarItem link="#" title="Dashboard" />
                  <SidebarItem link="#" title="Dashboard" />
                  <SidebarItem link="#" title="Dashboard" />
                </SidebarItemSub>
              </Sidebar>
              <MainContent>
                <PageHeader title="Welcome" desc="first born" />
                <Content>
                  <h1>Hello You</h1>
                  <Form>
                    <TextField inline="wajib" id="text" label="Inputan" placeholder="input" onchange={this.handleText.bind(this)} value={this.state.inputan} />
                  </Form>
                </Content>
              </MainContent>
            </MainContainer>
        </div>
    );
  }
}

render(
  <App/>, 
  document.getElementById('app')
);