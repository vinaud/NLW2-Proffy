import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem(){
    return(
        <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/4031158?s=460&u=5289aea87a807ca2146c7aaf127526ee3435c533&v=4" alt="Diego Fernandes"/>
        <div>
          <strong>João Vinaud</strong>
          <span>Engenharia de software</span>
        </div>
      </header>

      <p>
        Professor de programação
        <br/><br/>
        Lorem ipsum dolor
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
    )
    }

export default TeacherItem