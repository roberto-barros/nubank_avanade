import { useReducer, useState } from 'react';
import styled from 'styled-components';
import bannerBG from '../assets/images/bannerBG.png';

const Container = styled.div`
  display: flex;
  fieldset { 
    width: 60%;
    border: none;
  }
`

const Banner = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  border: solid 1px red;
  background: ${(props) => props.background ? "url(" + props.background + ") #e5e5e5" : ""} 20% 90% no-repeat;
  @media (max-width: 1280px) {
    background-size: 60%;
  }
`

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  }
};

function Login() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (

    //componente inteligente é um componente abstrato, que se adapta a situações, mas que continua simples

    <Container>
      <Banner background={bannerBG}>
        <h1>Complete os campos ao lado para pedir sua Conta e Cartão de crédito</h1>
      </Banner>

      <Banner>

        {submitting && (
          <div>
            <p>Enviando o Formulário...</p>
            <ul>
              {Object.entries(formData).map(([name, value]) => (
                <li key={name}>
                  <strong>{name}</strong>: {value.toString()}
                </li>
              ))}
            </ul>
          </div>
        )}
        <form onSubmit={handleSubmit} >
          <fieldset>
            <label>
              CPF:
              <input type="text" name='cpf' id='cpf' required onChange={handleChange} />
            </label>
          </fieldset>

          <fieldset>
            <label>
              Senha:
              <input type="password" name='senha' id='senha' required onChange={handleChange} />
            </label>
          </fieldset>

          <button type='submit'>Entrar</button>
        </form>
      </Banner>
    </Container>
  );
}

export default Login;
