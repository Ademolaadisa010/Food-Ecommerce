// http://127.0.0.1:5500/product-list-with-cart-main/data.json
const article = document.querySelector("#article");
const cartCounter = document.querySelector("#cartCounter");
const emptyCart = document.querySelector("#emptyCart");
const fillCart = document.getElementById("fillCart");
const totalDiv = document.querySelector("#fillCart > nav");
const confirmTotal = document.querySelector("#confirmTotal");
const confirmOrder = document.querySelector("#container > main > aside > div > summary > nav > button");
const wrapper = document.getElementById("wrapper");
const wrapperArticle = document.querySelector("#wrapperArticle");
const asideWrapper = document.querySelector("#wrapper section #wrapperArticle > aside");
const cofirmTotalPrice = document.querySelector("#cofirmTotalPrice");
let counter = 0;
let count = 1;
let totalPrice = 0;
async function Api(){
    const response = await fetch("http://127.0.0.1:5500/product-list-with-cart-main/data.json");
    const data = await response.json();
    console.log(data);

    for(let i = 0; i <= data.length; i++){
        const productContainer = document.createElement("div");

        const productImage = document.createElement("img");
        productImage.src = data[i].image.desktop;

        const productNav = document.createElement("nav");

        const productName = document.createElement("p");
        productName.innerHTML = data[i].category;

        const productDescription = document.createElement("h4");
        productDescription.innerHTML = data[i].name;

        const productPrice = document.createElement("li");
        let productPriceAdd = data[i].price;
        productPrice.innerHTML = "$" + productPriceAdd;
        
        const productButton = document.createElement("button");
        productButton.innerHTML = "Add to Cart";
        productButton.onclick = function(){
            counter++;
            cartCounter.textContent = `Your Cart(${counter})`;
            if(counter > 0){
                emptyCart.style.display = "none";
                fillCart.style.display = "block";
            }
            const fillCartDiv = document.createElement("div");
            const fillCarth4 = document.createElement("h4");
            fillCarth4.innerHTML = productName.innerHTML;

            const fillCartImage = document.createElement("img");
            fillCartImage.src = "assets/images/icon-remove-item.svg";
            fillCartImage.onclick = function(){
                fillCartDiv.style.display = "none";
                counter--;
                cartCounter.textContent = `Your Cart(${counter})`;
                if(counter === 0){
                    emptyCart.style.display = "flex";
                }
                footer.style.display = "none";
            }

            const fillCartspan = document.createElement("span");
            fillCartspan.innerHTML = "1x";

            const fillCartlabel = document.createElement("label");
            let fillCartlabeladd = productPriceAdd;
            fillCartlabel.innerHTML = "@ $" + fillCartlabeladd;

            const fillCarttotal = document.createElement("span");
            fillCarttotal.innerHTML = "$" + 1 * fillCartlabeladd;

            fillCartDiv.append(fillCarth4, fillCartImage, fillCartspan, fillCartlabel, fillCarttotal);
            fillCart.appendChild(fillCartDiv);
            fillCart.insertBefore(fillCartDiv, totalDiv);




            const footer = document.createElement("footer");

            const increament = document.createElement("img");
            increament.src = "assets/images/icon-increment-quantity.svg";
            increament.onclick = function(){
                count++;
                quantity.innerHTML = `${count}`;
                fillCartspan.innerHTML = `${count}x`;
                let fillCarttotal2 = `${count}` * fillCartlabeladd;
                fillCarttotal.innerHTML = "$" + fillCarttotal2;
                totalPrice += fillCartlabeladd;
                confirmTotal.innerHTML = "$" + totalPrice;
                wrapperTotal.innerHTML = fillCarttotal.innerHTML;
                wrapperQuantity.innerHTML = fillCartspan.innerHTML;
                cofirmTotalPrice.innerHTML = "$" + totalPrice;
            }

            const quantity = document.createElement("p");
            quantity.innerHTML = "1";
            const decrement = document.createElement("img");
            decrement.src = "assets/images/icon-decrement-quantity.svg";
            decrement.onclick = function(){
                if(count > 1){
                    count--;
                    quantity.innerHTML = `${count}`;
                    fillCartspan.innerHTML = `${count}x`;
                    let fillCarttotal2 = `${count}` * fillCartlabeladd;
                    fillCarttotal.innerHTML = "$" + fillCarttotal2;
                    totalPrice -= fillCartlabeladd;
                    confirmTotal.innerHTML = "$" + totalPrice;
                    wrapperTotal.innerHTML = fillCarttotal.innerHTML;
                    wrapperQuantity.innerHTML = fillCartspan.innerHTML;
                    cofirmTotalPrice.innerHTML = "$" + totalPrice;
                }
                
            }

            footer.append(decrement, quantity, increament);
            productContainer.appendChild(footer);

            totalPrice += productPriceAdd;
            confirmTotal.innerHTML = "$" + totalPrice;

            const wrapperNav = document.createElement("nav");
            const wrapperImage = document.createElement("img");
            wrapperImage.src = productImage.src;

            const wrapperDiv = document.createElement("div");

            const wrapperName = document.createElement("h4");
            wrapperName.innerHTML = productDescription.innerHTML;

            const wrapperTotal = document.createElement("p");
            wrapperTotal.innerHTML = fillCarttotal.innerHTML;

            const wrapperQuantity = document.createElement("span");
            wrapperQuantity.innerHTML = fillCartspan.innerHTML;

            const wrapperPrice = document.createElement("label");
            wrapperPrice.innerHTML = fillCartlabel.innerHTML;

            wrapperNav.append(wrapperImage, wrapperDiv);
            wrapperDiv.append(wrapperName, wrapperTotal, wrapperQuantity, wrapperPrice);
            wrapperArticle.appendChild(wrapperNav);

            wrapperArticle.insertBefore(wrapperNav, asideWrapper);
            cofirmTotalPrice.innerHTML = "$" + totalPrice;
        }


        const productButtonImage = document.createElement("img");
        productButtonImage.src = "assets/images/icon-add-to-cart.svg";

        // productContainer.insertBefore(productButtonImage, productButton)
        productButton.appendChild(productButtonImage);
        productNav.append(productName, productDescription, productPrice, productButton);
        productContainer.append(productImage, productNav);
        article.appendChild(productContainer);
    }
}
Api();
confirmOrder.onclick = function(){
    wrapper.style.display = "flex";
}