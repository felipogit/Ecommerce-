
// {
//     id: 1,
//     img: "./images/jaqueta.svg",
//     nameItem: "Lightweight Jacket",
//     description:
//       "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
//     value: 100,
//     addCart: "Adicionar ao carrinho",
//     tag: ["Camisetas"],
//   }

{/* <li id= "p_1">
            <img class="img" src="/images/jaqueta.svg" alt="">
            <p class="tag">Camisa</p>
            <h2 class="nameItem">Lightweight Jacket</h2>
            <p class="description">Adicione um pouco de energia ao seu 
              guarda-roupa de inverno com esta jaqueta vibrante...</p>
              <p class="value">R$ 100.00</p>

              <p>Adicionar ao carrinho</p>
</li> */}


function filtrarPorCategoria(tag) {
    if (tag) {
        const listaFiltrada = data.filter(item => {
            return item.tag.includes(tag)
        })
        renderProdutos(listaFiltrada)
    } else {
        renderProdutos(data)
    }

}

function filtrarPeloNome(){
    const entrada = document.querySelector('.search-input').value
    if(entrada){
        const listaFiltrada = data.filter(item => {
            return item.nameItem.includes(entrada)    
        })
        renderProdutos(listaFiltrada)
    }
    



}


function renderProdutos(list) {
    let listaProdutos = document.querySelector('.ul-products')
    listaProdutos.innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        let objeto = list[i];

        let li = document.createElement('li')
        let img = document.createElement('img')
        let tag = document.createElement('p')
        let h2 = document.createElement('h2')
        let description = document.createElement('p')
        let value = document.createElement('p')
        let adicionarCarrinho = document.createElement('p')



        img.className = 'img'
        tag.className = 'tag'
        h2.className = 'nameItem'
        description.className = 'description'
        value.className = 'value'
        adicionarCarrinho.className = 'button'




        // li.id = `p_${objeto.id}`
        img.src = objeto.img
        tag.innerHTML = objeto.tag[0]
        h2.innerHTML = objeto.nameItem
        description.innerHTML = objeto.description
        value.innerHTML = `R$ ${objeto.value}`
        adicionarCarrinho.innerHTML = objeto.addCart
        adicionarCarrinho.id = `item_${objeto.id}`

        li.appendChild(img)
        li.appendChild(img)
        li.appendChild(tag)
        li.appendChild(h2)
        li.appendChild(description)
        li.appendChild(value)
        li.appendChild(adicionarCarrinho)

        listaProdutos.appendChild(li)

        adicionarCarrinho.addEventListener('click', function (e) {
            const idElemento = e.target.id
            const id = parseInt(idElemento.substring(5));

            let objeto = procuraItem(id)

            addProductToCarrinho(objeto)
        })
    }
}


const ulCards = document.querySelector('.cart-list')
const spanValorTotal = document.getElementById('total')
const quantidadeItem = document.getElementById('quantidade-item')
const removerCarrinhoVazio = document.querySelector('.cart-empty')

let quantidade = 0

let total = 0


function addItemPrecoTotal(valorDoItem) {
    total += valorDoItem
    spanValorTotal.innerText = `R$ ${total}`
    quantidade++
    quantidadeItem.innerText = quantidade

    if (quantidade > 0) {
        removerCarrinhoVazio.style.display = 'none'
    }

}



function removeItemPrecoTotal(valorDoItem) {

    total = total - valorDoItem
    spanValorTotal.innerText = `R$ ${total}`
    quantidade--
    quantidadeItem.innerText = quantidade

    if (quantidade == 0) {
        removerCarrinhoVazio.style.display = 'flex'
    }

}




function addProductToCarrinho(product) {
    const liCars = document.createElement('li')
    const imgCars = document.createElement('img')
    const cartInfoContainer = document.createElement('div')
    const h2Cars = document.createElement('h2')
    const priceCars = document.createElement('p')
    const buttonCars = document.createElement('p')

    imgCars.src = product.img
    h2Cars.innerHTML = product.nameItem
    priceCars.innerHTML = `R$ ${product.value}`
    buttonCars.innerHTML = 'Remover item'

    buttonCars.addEventListener('click', function (e) {
        ulCards.removeChild(liCars)

        removeItemPrecoTotal(product.value)
    })



    liCars.className = 'cart-list-item'
    h2Cars.className = 'cart-list-item-head'
    priceCars.className = 'value'
    cartInfoContainer.className = 'cart-info-container'

    buttonCars.className = 'button-car'

    liCars.appendChild(imgCars)
    cartInfoContainer.appendChild(h2Cars)
    cartInfoContainer.appendChild(priceCars)
    cartInfoContainer.appendChild(buttonCars)
    liCars.appendChild(cartInfoContainer)
    ulCards.appendChild(liCars)

    addItemPrecoTotal(product.value)
}




function procuraItem(id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i]
        }
    }
}



function filterItems() {
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput.value.toLowerCase().trim();

    const filteredItems = data.filter(item => {
        const itemName = item.nameItem.toLowerCase();
        const itemDescription = item.description.toLowerCase();
        return itemName.includes(searchText) || itemDescription.includes(searchText);
    });


    return filteredItems;
}





renderProdutos(data)

