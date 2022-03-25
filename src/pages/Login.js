import React from 'react'
import { Wrapper } from '../components/Wrapper'
import { Heading} from '../components/Heading'
import { Input} from '../components/Input'
import { Button} from '../components/Button'
import { Form } from '../components/Form'
import { Container } from '../components/Container'
import DecorationPoke from '../components/DecorationPoke'
import { Logo } from '../components/Logo'

const Login = () => {
  return (
    
    <Wrapper grid>
      <Container className='text-center'>
        <Logo src="./PokeLogo.png" alt="logo"/>
        <Heading>Hola Entrenador!</Heading>
        <Form>
          <label>Ingrese su nombre para empezar</label>
          <Input />
          <Button>Empezar</Button>
        </Form>
      </Container>
      <DecorationPoke right="50%"/>
    </Wrapper>
    
  )
}

export default Login