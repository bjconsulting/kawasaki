import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import 'src/index.css'
import CarouselMotos from '~/components/carousel-motos/carousel';
import About from '~/components/about';
import Form from '~/components/form';
import HowWork from '~/components/howWork';
export default component$(() => {
  return (
    <>
      <div class="outside bg outside_first">
        <div class="container">
          
          <div class="t-row">
            <div class="left-box">
              <div class="text">
                <h2><b>CONSÓRCIO KAWASAKI BRASIL</b></h2>
                <h1> <b>LIBERTE</b> SEU <b>SONHO</b> DE TER UMA <b>MOTO!</b> </h1>
              </div>

              <div class="rows">
                <div class="f-row">
                  <div>
                    <h2>SEM <br /><i>JUROS</i></h2>
                  </div>
                  <div>
                    <h2>SEM <br /><i>ENTRADA</i></h2>
                  </div>
                </div>
                <div class="s-row">
                  <div><h2>PLANOS DE ATÉ <br /><i>100 MESES</i></h2></div>
                </div>
              </div>

            </div>
            <div class="right-box">
              <h2>Deixe suas informações e conheça os <b>planos e vantagens!</b></h2>
              <Form />
            </div>
          </div>
        </div>
      </div>
      <CarouselMotos />
      <About />
      <HowWork />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Consórcio Kawasaki Brasil',
  meta: [
    {
      name: 'description',
      content: 'Aqui você encontra diversas formas de fazer seu consórcio.',
    },
  ],
};
