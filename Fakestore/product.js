
async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    const productList = document.getElementById("productRow");

    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("col-3","col-9", "p-2");

      d.innerHTML = `
        <div class="card border rounded shadow p-3 d-flex flex-row h-100">
    <div class="h-70 d-flex justify-content-start align-items-center">
      <img src=${element.image} alt=${
        element.title
      } class="w-50 h-100 object-fit-contain justify-content-center align-items-center" />
    </div>
    <div class="h-100 p-2 d-flex flex-column justify-content-center align-items-end  ">
      <div class="fw-bold fs-4">${
        element.title.length > 50
          ? element.title.slice(0, 45) + "..."
          : element.title
      }</div>
      <div class="fw-semibold">${element.rating.rate}/5 (${
        element.rating.count
      })</div>
      <div class="fw-semibold fs-5">₹ ${element.price * 100}</div>
      <div class="mb-2">
        ${element.description.slice(0, 80)}...
      </div>
      <div class="d-flex justify-content-center gap-3">

        <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-outline-primary">Add to Cart</button>
      
        </div>
        

        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>`;

      productList.appendChild(d);
    });
  } catch (error) {
    console.log(error.message);
  }
}

getProducts();
