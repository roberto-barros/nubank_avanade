import { useReducer, useState } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';

const Container = styled.div`
  display: flex;
  fieldset { 
    width: 60%;
    border: none;
  }
`

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  }
};

function Register() {

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
      <Banner background={true}>
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
              Nome Completo:
              <input type="text" name='nome' id='nome' required onChange={handleChange} />
            </label>
          </fieldset>

          <fieldset>
            <label>
              Celular:
              <input type="tel" name='celular' id='celular' onChange={handleChange} />
            </label>
          </fieldset>

          <fieldset>
            <label>
              E-mail:
              <input type="email" name='email' id='email' required onChange={handleChange} />
            </label>
          </fieldset>

          <fieldset>
            <label>
              Confirmação de e-mail
              <input type="email" name='confirma_email' id='confirma_email' required onChange={handleChange} />
            </label>
          </fieldset>

          <fieldset>
            <label>
              <input type="checkbox" name="aceito_comunicacao" id='aceito_comunicacao' />
              Aceito receber comunicações do Nubank por Whatsapp.
            </label>
          </fieldset>

          <fieldset>
            <label>
              <input type="checkbox" name="aceito_contrato" id='aceito_contrato' />
              Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta Política de Privacidade.
            </label>
          </fieldset>

          <button type='submit'>Enviar</button>
        </form>
      </Banner>
    </Container>
  );
}

export default Register;
