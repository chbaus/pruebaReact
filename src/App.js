import React from "react";
import "./css/styles.scss";
import Profesor from './components/Profesor';


const App = () => (
  <>
    <h1>Titulo de la pagina</h1>
    <Profesor />
  </>
);

export default App;

<div class="main-banner img-container" id="main-banner">
  <div class="ed-grid lg-grid-6">
    <div class="lg-cols-4 lg-x-2">
      <img class="main-banner__img" src="tu-imagen.jpg">
      <div class="main-banner__data s-center">
        <p class="t2 s-mb-0">Título del banner</p>
        <p> Subtítulo del banner</p>
        <a href="#" class="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div>


<article class="card">
  <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="path/img" alt="">
  </div>
  <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 class="t5 s-mb-2 s-center">
      Programación orientada a objetos con Go
    </h3>
    <div class="s-mb-2 s-main-center">
      <div class="card__teacher s-cross-center">
        <div class="card__avatar s-mr-1">
          <div class="circle img-container">
            <img src="path/img" alt="">
          </div>
        </div>
        <span class="small">Alexys Lozada</span>
      </div>
    </div>
    <div class="s-main-center">
      <a class="button--ghost-alert button--tiny" href="#">$ 20USD</a>
    </div>
  </div>
</article>

<article class="card">
  <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="path/img" alt="">
  </div>
  <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 class="t5 s-mb-2 s-center">
      Programación orientada a objetos con Go
    </h3>
    <div class="s-mb-2 s-main-center">
      <div class="card__teacher s-cross-center">
        <div class="card__avatar s-mr-1">
          <div class="circle img-container">
            <img src="path/img" alt="">
          </div>
        </div>
        <span class="small">Alexys Lozada</span>
      </div>
    </div>
    <div class="s-main-center">
      <a class="button--ghost-alert button--tiny" href="#">$ 20USD</a>
    </div>
  </div>
</article>