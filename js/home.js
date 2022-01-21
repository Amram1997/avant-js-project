let banking = document.getElementById("banking");
let cart_image = document.querySelector("#cart_image");
let section1_div2 = document.querySelector(".section1-div2");
let apply_minutes = document.getElementById("apply_minutes");
// console.log(apply_minutes)
banking.addEventListener("mousemove", () => {
  cart_image.src = "./images/phone.png";
  cart_image.style.height = 700 + "px";
  cart_image.style.width = 450 + "px";
  section1_div2.innerHTML = `
    <h1>
    Banking that brings you <br>
    closer to your goals..
</h1>
<p>Get paid up to 2 days early2 with</p>
<p>no hidden fees.1</p><br>
<p>Checking your eligibility does not affect your credit score.</p>
<button class="div1-btn1"><a href="">Apply in Minutes</a></button>
            <button class="div1-btn1" id="banking"><a href="">Banking</a></button>
            <button class="div1-btn1"><a href="">Personal Loans</a></button>
            <span>
                 <p class="p1 p2">Avant, LLC is a financial technology company, not a bank. Banking services are provided through</p>
                <p class="p1">Evolve Bank & Trust, Member FDIC.</p>
            </span>`;
});
