const vetorSaude = document.querySelector('.vetor-tab-saude-ocupacional')

const vetorSeguranca = document.querySelector('.vetor-tab-seguranca-trabalho')

const vetorRelatorios = document.querySelector('.vetor-tab-relatorios')

const vetorSocial = document.querySelector('.vetor-tab-e-social')

const vetorSap = document.querySelector('.vetor-tab-integracao-sap')
const vetorSap2 = document.querySelector('.vetor-tab-integracao-sap-2')


function tabSaude(){
    vetorSaude.style.fill = ` #FFFFFF `
    vetorSeguranca.style.fill = ` #00BD62 `
    vetorRelatorios.style.fill = ` #00BD62 `
    vetorSocial.style.fill = ` #00BD62 `
    
    vetorSap.style.stroke = ` #00BD62 `
    vetorSap2.style.stroke = ` #00BD62 `
    
}

function tabSeguranca(){
    vetorSap.style.stroke = ` #00BD62 `
    vetorSap2.style.stroke = ` #00BD62 `

    vetorSaude.style.fill = ` #00BD62 `
    vetorSeguranca.style.fill = ` #FFFFFF `
    vetorRelatorios.style.fill = ` #00BD62 `
    vetorSocial.style.fill = ` #00BD62 `
    
    
}

function tabRelatorios(){
    vetorSap.style.stroke = ` #00BD62 `
    vetorSap2.style.stroke = ` #00BD62 `

    vetorSaude.style.fill = ` #00BD62 `
    vetorSeguranca.style.fill = ` #00BD62 `
    vetorRelatorios.style.fill = ` #FFFFFF `
    vetorSocial.style.fill = ` #00BD62 `
    
}

function tabSocial(){
    vetorSap.style.stroke = ` #00BD62 `
    vetorSap2.style.stroke = ` #00BD62 `

    vetorSaude.style.fill = ` #00BD62 `
    vetorSeguranca.style.fill = ` #00BD62 `
    vetorRelatorios.style.fill = ` #00BD62 `
    vetorSocial.style.fill = ` #FFFFFF `
    
}

function tabSap(){
    vetorSap.style.stroke = ` #FFFFFF `
    vetorSap2.style.stroke = ` #FFFFFF `

    vetorSaude.style.fill = ` #00BD62 `
    vetorSeguranca.style.fill = ` #00BD62 `
    vetorRelatorios.style.fill = ` #00BD62 `
    vetorSocial.style.fill = ` #00BD62 `
}
