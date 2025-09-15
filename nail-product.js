let nails = [
  {
    id:'0001',
    type: '手部',
    nailItem:'單色(可選兩色)',
    priceCent:539,
    infor:'簡約純美色彩，為指尖增添優雅華麗(包拆原有Gel，服務只限當天使用。)',
    image:'image/nailsItemFeetSingal.png'
  },
  {
    id:'0002',
    type: '腳部',
    nailItem:'單色(可選兩色)',
    priceCent:439,
    infor:'簡約純美色彩，為指尖增添優雅華麗(包拆原有Gel，服務只限當天使用。)',
    image:'image/nailsItemFeetSingal.png'
  },
  {
    id:'0003',
    type: '腳部',
    nailItem:'貓眼',
    priceCent:539,
    infor:'立體感更強，流動感更足(包拆原有Gel，服務只限當天使用)',
    image:'image/nailsItemHandCateyes.png'
  },
  {
    id:'0004',
    type: '手部',
    nailItem:'貓眼',
    priceCent:439,
    infor:'立體感更強，流動感更足(包拆原有Gel，服務只限當天使用)',
    image:'image/nailsItemHandCateyes.png'
  },
  {
    id:'0005',
    type: '',
    nailItem: '指甲修護',
    priceCent: 399,
    infor:'傳統鉸剪修甲技術，沿著甲型邊緣修剪完整死皮，清除腳繭及打磨腳皮，讓甲型更細緻齊整',
    image: 'image/nailsRefix.png'
  }
];

class Nail {
  id;
  type;
  nailItem;
  priceCent;
  image;
  infor;

  constructor(productDails){
    this.id = productDails.id;
    this.nailItem = productDails.nailItem;
    this.priceCent = productDails.priceCent;
    this.image = productDails.image;
    this.type = productDails.type;
    this.infor = productDails.infor;
  }
  getId() {
    return `${this.id}`;
  }
  getImage() {
    return `${this.image};`
  }
  getItem() {
    return `${this.nailItem}`;
  }
  getPrice() {
    return `${this.priceCent}`;
  }
  getInfor() {
    return `${this.infor}`;
  }
  getType() {
    return `${this.type}`;
  }
}
export function loadItem(){
  const item = nails.map(nailsItem => {
    return new Nail(nailsItem);
  });
  return item;

}

export function loadPage() {
  const item = loadItem();

  let html = '';

  item.forEach(nailsItem => {
    html += `
        <div class = "item-container">
          <div class="img-container">
           <img class = "item-img" src = "${nailsItem.image}">    
          </div>
          <div class = "text-container">
            <h1>${nailsItem.getItem()}</h1>
            <p><span class="infor-span">-${nailsItem.getInfor()}</span></p>
            <p class="price-span">$${nailsItem.getPrice()}</p>
            <button class="book-button"><span class="book-text">立即預約</span></button>
          </div>
        </div>
    `
  });
  document.querySelector('.item-container-header').innerHTML =html;
}
