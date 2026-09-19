const products = [
  {cat:"adhesive", tag:"Tile Adhesive", name:"TileTech Pro Fix", desc:"A practical adhesive solution for everyday wall and floor tile applications.", use:"Walls • Floors"},
  {cat:"adhesive", tag:"Tile Adhesive", name:"TileTech Premium Fix", desc:"Designed for projects where dependable bonding and professional finish matter.", use:"Interior • Exterior"},
  {cat:"grout", tag:"Tile Grout", name:"TileTech Colour Grout", desc:"Clean finishing for tile joints with a simple, professional application experience.", use:"Walls • Floors"},
  {cat:"grout", tag:"Tile Grout", name:"TileTech Premium Grout", desc:"A higher-performance grout concept for demanding tiled spaces.", use:"Bathrooms • Kitchens"},
  {cat:"construction", tag:"Construction Solution", name:"TileTech Bond Plus", desc:"A versatile construction bonding solution for selected project applications.", use:"General Construction"},
  {cat:"construction", tag:"Construction Solution", name:"TileTech Surface Care", desc:"A placeholder for future surface preparation and finishing products.", use:"Surface Preparation"}
];

const grid = document.getElementById("productGrid");
function render(filter="all"){
  grid.innerHTML = products.filter(p=>filter==="all"||p.cat===filter).map((p,i)=>`
    <article class="product-card">
      <div class="product-visual">
        <div class="bag"><b>TILE</b><br><strong>TECH</strong><small>${p.tag.toUpperCase()}<br>PROFESSIONAL<br>SOLUTION</small></div>
      </div>
      <div class="product-body">
        <span class="tag">${p.tag}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="details"><span>${p.use}</span><span class="arrow">→</span></div>
      </div>
    </article>`).join("");
}
render();

document.querySelectorAll(".filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.filter);
  });
});

const menuBtn=document.querySelector(".menu-btn"), nav=document.querySelector(".nav");
menuBtn.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded",open);
});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.getElementById("quoteForm").addEventListener("submit",e=>{
  e.preventDefault();
  alert("Thanks! The enquiry form is ready to connect to TileTech email or WhatsApp in the next version.");
});
