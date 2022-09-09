import React from 'react'
import './App.css';
import Button from './Form/button';
import Input from './Form/input';

class App extends React.Component {
  
  state = {
    email: '',
    password: '',
    checkbox: 'false',
  }

  handleChange = ({ target }) => { 
    const { name } = target    
    const value = target.type === 'checkbox' ? target.checked : target.value         
    
    this.setState (({[name]: value}))   
  }
  
  render() {

    // const { state } = this
    // const { email, password, checkbox } = state

    return (
      <section className='section-flex'>
        <form>
          <h1 className='title'>Login</h1>
          <Input 
            type = 'email'
            value= { this.state.email } 
            name= 'email' 
            onChange= {this.handleChange}
          />
          <Input 
            type = 'password' 
            value= { this.state.password } 
            name= 'password' 
            onChange= {this.handleChange}
          />
          <div className='div-checkbox'>
            <Input 
              type = 'checkbox'
              value = { this.state.checkbox }
              name = 'checkbox'
              onChange = {this.handleChange}              
            />
            <p className='info-check'>Deseja salvar as informações acima?</p>
          </div>   
          <Button type= 'submit'/>      
        </form>
      </section>
    )
  };
};

export default App;
