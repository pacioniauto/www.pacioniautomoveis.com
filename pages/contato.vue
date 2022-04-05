<template>
  <section class="contact">
    <div class="contact__call">
      <div class="contact__banner">
        <img src="~/static/uploads/call.jpg" alt="Entre em contato"/>
      </div>
      <div>
        <h1>Entre em contato</h1>
        <h2>Atendemos por email, telefone, celular ou whatsapp</h2>
        <a href="mailto:pacioniautomoveis@gmail.com">pacioniautomoveis@gmail.com</a>
        <a href="https://api.whatsapp.com/send/?phone=5519971194307&text&app_absent=0" rel="noopener" target="_blank">whatsapp</a>
        <a href="tel:+551997119‑4307">(19)97119‑4307</a>
        <a href="tel:+55193875-2803">(19)3875-2803</a>
      </div>
    </div>
    <div class="contact__social">
      <div class="contact__banner">
        <img src="~/static/uploads/media.jpg" alt="Mídias sociais"/>
      </div>
      <div>
        <h1>Confira nossas mídias socias</h1>
        <h2>Tire dúvidas ou descubra conteúdos relacionados ao mundo automobilisco</h2>
        <a href="https://www.facebook.com/pacioniauto" rel="noopener" target="_blank">facebook</a>
        <a href="https://www.instagram.com/Pacioniautomoveis" rel="noopener" target="_blank">Instagram</a>
        <a href="https://www.youtube.com/channel/UCz0m36699XBDWrObs6YrNnQ" rel="noopener" target="_blank">Youtube</a>
      </div>
    </div>
    <div class="contact__sell">
      <div class="contact__banner">
        <img src="~/static/uploads/venda.jpg" alt="Vendas"/>
      </div>
      <div>
        <h1>Confira nossos anúncios</h1>
        <h2>Estamos nos principais agregadores de anúncios</h2>
        <a href="https://www.comprecar.com.br/lojas/pacioni-automoveis" rel="noopener" target="_blank">CompreCar</a>
        <a href="https://www.olx.com.br/perfil/pacioni-automoveis-d25417a3" rel="noopener" target="_blank">Olx</a>
        <a href="https://lista.mercadolivre.com.br/veiculos/_CustId_681554520" rel="noopener" target="_blank">Mercado Livre</a>
        <a href="https://meucarronovo.com.br/anunciante/pacioni-automoveis-1083318" rel="noopener" target="_blank">Meu carro novo</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.contact {

  @include md {
    display: flex;

    & > * {
      flex-basis: 100%;
      margin-left: 2rem;
    }
  }

  h1 {
    font-family: $ff-primary;
    padding-bottom: 0.5rem;
    font-size: 3.5rem;
    color: $primary;
  }

  h2 {
    font-family: $ff-secondary;
    padding-bottom: 2rem;
    font-size: 2rem;
    color: $gray-500;
  }

  a, span {
    font-size: 2rem;
    font-family: $ff-primary;
    padding-right: 2rem;
    color: $gray-400;

    &:hover {
      color: $primary;
    }
  }

  img, iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__banner {
    height: 25rem;
    margin-bottom: 2rem;
    box-shadow: 10px 10px 0px 0px $primary;
  }

  &__call {
    margin-bottom: 4rem;
  }

  &__social {
    margin-bottom: 4rem;
  }

  &__sell {
    margin-bottom: 4rem;
  }
}

</style>


<script>
export default {
  head: {
    title: 'Contato',
    meta: [
      {
        hid: 'Contato',
        name: 'description',
        content: 'Informações sobre nossas redes sociais e meios de contato'
      }
    ],
  }
}
</script>

