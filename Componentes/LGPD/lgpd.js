const labelInputNome = document.querySelector('#label-nome')

const labelInputEmail = document.querySelector('#label-email')

const labelInputCpf = document.querySelector('#label-cpf')

const labelInputTelefone = document.querySelector('#label-telefone')

const labelInputMensagem = document.querySelector('#label-mensagem')


function desativaLabel(){
    if (document.querySelector('#input-nome').value == " ") {
        labelInputNome.style.visibility = ` visible `
    } 
    if (document.querySelector('#input-nome').value && " ") {
        labelInputNome.style.visibility = ` hidden `
    }
    labelInputNome.style.color = ` #A3A3A3 `
}
function ativaLabel(){
        labelInputNome.style.visibility = ` visible `
        labelInputNome.style.color = ` #00BD62 `
}



function desativaLabelEmail(){
    if (document.querySelector('#input-email').value == " ") {
        labelInputEmail.style.visibility = ` visible `
    } 
    if (document.querySelector('#input-email').value && " ") {
        labelInputEmail.style.visibility = ` hidden `
    }
    labelInputEmail.style.color = ` #A3A3A3 `
}

function ativaLabelEmail(){
        labelInputEmail.style.visibility = ` visible `
        labelInputEmail.style.color = ` #00BD62 `
}

function desativaLabelCpf(){
    if (document.querySelector('#input-cpf').value == " ") {
        labelInputCpf.style.visibility = ` visible `
    } 
    if (document.querySelector('#input-cpf').value && " ") {
        labelInputCpf.style.visibility = ` hidden `
    }
    labelInputCpf.style.color = ` #A3A3A3 `
}

function ativaLabelCpf(){
        labelInputCpf.style.visibility = ` visible `
        labelInputCpf.style.color = ` #00BD62 `
}

function desativaLabelTelefone(){
    if (document.querySelector('#input-telefone').value == " ") {
        labelInputTelefone.style.visibility = ` visible `
    } 
    if (document.querySelector('#input-telefone').value && " ") {
        labelInputTelefone.style.visibility = ` hidden `
    }
    labelInputTelefone.style.color = ` #A3A3A3 `
}

function ativaLabelTelefone(){
        labelInputTelefone.style.visibility = ` visible `
        labelInputTelefone.style.color = ` #00BD62 `
}

function desativaLabelMensagem(){
    if (document.querySelector('#input-mensagem').value == " ") {
        labelInputMensagem.style.visibility = ` visible `
    } 
    if (document.querySelector('#input-mensagem').value && " ") {
        labelInputMensagem.style.visibility = ` hidden `
    }
    labelInputMensagem.style.color = ` #A3A3A3 `
}

function ativaLabelMensagem(){
        labelInputMensagem.style.visibility = ` visible `
        labelInputMensagem.style.color = ` #00BD62 `
}

window.onload = () => {

        if (document.querySelector('#input-nome').value == " ") {
            labelInputNome.style.visibility = ` visible `
        } 
        if (document.querySelector('#input-nome').value && " ") {
            labelInputNome.style.visibility = ` hidden `
        }
    
    
    
        if (document.querySelector('#input-email').value == " ") {
            labelInputEmail.style.visibility = ` visible `
        } 
        if (document.querySelector('#input-email').value && " ") {
            labelInputEmail.style.visibility = ` hidden `
        }

    
        if (document.querySelector('#input-cpf').value == " ") {
            labelInputCpf.style.visibility = ` visible `
        } 
        if (document.querySelector('#input-cpf').value && " ") {
            labelInputCpf.style.visibility = ` hidden `
        }
    

        if (document.querySelector('#input-telefone').value == " ") {
            labelInputTelefone.style.visibility = ` visible `
        } 
        if (document.querySelector('#input-telefone').value && " ") {
            labelInputTelefone.style.visibility = ` hidden `
        }


        if (document.querySelector('#input-mensagem').value == " ") {
            labelInputMensagem.style.visibility = ` visible `
        } 
        if (document.querySelector('#input-mensagem').value && " ") {
            labelInputMensagem.style.visibility = ` hidden `
        }

}