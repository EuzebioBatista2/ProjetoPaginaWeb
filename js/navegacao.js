import { cadastro, enviar, sucesso } from "./cadastros.js";
import { putBase, alterar, mudar, putSucess } from "./alteraracao.js";
import { remover, excluir, excluirSucess } from "./removecao.js"
import { getPagina } from "./infoUsers.js";


// Quando a página iniciar será chamado o conteúdo de get
document.addEventListener("DOMContentLoaded", function(event) {
  getPagina(event)
}) 
// fim conteúdo gerado de get.

// Botões da página
const botaoGet = document.getElementById('get')
botaoGet.addEventListener("click", function(event) {
  getPagina(event)
})

const botaoCadastro = document.getElementById("post")
botaoCadastro.addEventListener("click", function(event) {
  cadastro(event)
})

const botaoAlterar = document.getElementById("put")
botaoAlterar.addEventListener("click", function(event) {
  putBase(event)
})

const botaoRemover = document.getElementById("remove")
botaoRemover.addEventListener("click", function(event) {
  remover(event)
})
// Fim botões

// Função para observar a tag section e seus eventos
const section = document.querySelector('section');
const observar = new MutationObserver(() => {

  // Evento ao clicar no botão cadastrar 
  const botaoEnviar = document.getElementById("enviar")
  if (botaoEnviar) {
    botaoEnviar.addEventListener("click", function(event) {
      enviar(event)
      sucesso(event)
    })
  }
  // Fim evento do botão cadastrar

  // Evento do botão para retornar a página inicial após o cadastro ou alteração sendo realizado com sucesso
  const paginaInicial = document.getElementById("paginaInicial")
  if (paginaInicial) {
    paginaInicial.addEventListener("click", function(event) {
      getPagina(event)
    })
  }
  // Fim evento botão página retornar

  // Evento ao clicar no botão alterar
  const alterarCadastro = document.getElementsByClassName("alterar")
  if (alterarCadastro) {
    Array.from(alterarCadastro).map(link => {
      link.addEventListener("click", function(event) {
        alterar(event, this.id)
      })
    })
  }
  // Fim evento do botão alterar

  // Confirmando os dados ao realizar à alteração
  const botaoAlterar = document.getElementById("mudar")
  if (botaoAlterar) {
    botaoAlterar.addEventListener("click", function(event) {
      mudar(event)
      putSucess(event)
    })
  }
  // Fim evento alteração

  // Evento ao clicar no botão de remoção
  const removerCadastro = document.getElementsByClassName("remover")
  if (removerCadastro) {
    Array.from(removerCadastro).map(link => {
      link.addEventListener("click", function(event) {
        excluir(event, this.id)
        excluirSucess(event)
      })
    })
  }
  // Fim evento do botão remoção
})
observar.observe(section, {  childList: true })
// Função para observar a tag section e seus eventos