
const categories = [
    {
      "name": "Men's Clothing",
      "subcategories": ["Shirts", "Jeans", "T-Shirts"]
    },
    {
      "name": "Women's Clothing",
      "subcategories": ["Sarees", "Tops", "Skirts"]
    },
    {
      "name": "Kids' Clothing",
      "subcategories": ["T-Shirts", "Jeans"]
    },
    {
      "name": "Footwear",
      "subcategories": ["Sneakers", "Heels"]
    },
    {
      "name": "Accessories",
      "subcategories": ["Watches", "Bags", "Belts"]
    }
  ],
  const products = [
   //      Men's Jeans 
    {
      "id": "1",
      "image":"https://levi.in/cdn/shop/files/182981393_02_Front_cf51fd0b-7e14-4999-b87a-84b91cceb5cc.jpg?v=1712742742&width=1445",
      "title": "Men's Light Indigo Slim Fit Jeans Blue",
      "category": "Men's Clothing",
      "subcategory": "Jeans",
      "brand": "Indigo",
      "price": "₹699.00",
      "stock": "550",
      "rating": "4.7",
  "Description":"N/A",
  "Specifications":{
      "Fit": "Slim",
      "Fabric": "Cotton Blead",
      "Light": "Fade Mid Rise Jeans",
      "Clean":"Look",
  }
    },

    {
      "id":"2",
      "image":"https://levi.in/cdn/shop/files/A66680001_01_Style_Shot_0d4a864b-30dc-4dc8-ad0f-326e429ffe57.jpg?v=1712742792",
      "title": "Levi's Men's Jeans",
      "category": "Men's Clothing",
      "subcategory": "Jeans",
      "brand": "Levi's",
      "price": "₹1299.00",
      "stock": "150",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
    "Fabric": "Cotton Blead",
    "Light": "Fade Mid Rise Jeans",
    "Clean":"Look",
  }
    },

    {
      "id": "3",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAiYbMXjrYH6YDHBqJ91KJAu9lFjFvQLQcPj5-7BGMKAQ-fKlS4JtDtkNPywsNw3x4Z_Q&usqp=CAU",
      "title": "Levi's Men's Jeans Navi Blue",
      "category": "Men's Clothing",
      "subcategory": "Jeans",
      "brand": "Levi's",
      "price": "₹1499.00",
      "stock": "20",
      "rating": "4.8",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
    "Fabric": "Cotton Blead",
    "Light": "Fade Mid Rise Jeans",
    "Clean":"Look",
  }
    },

    {
      "id": "4",
      "image":"https://images-static.nykaa.com/uploads/07541bc7-6eb5-40aa-b817-130ec0d24272.jpg?tr=w-200,cm-pad_resize",
      "title": "Jeans For Men ",
      "category": "Men's Clothing",
      "subcategory": "Jeans",
      "brand": "MUFTI",
      "price": "₹1599.00",
      "stock": "8",
      "rating": "4.8",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
    "Fabric": "Cotton Blead",
    "Light": "Fade Mid Rise Jeans",
    "Clean":"Look",
  }
    },

    {
      "id": "5",
      "image":"https://m.media-amazon.com/images/I/91-Z8tWqUAL._AC_UY1100_.jpg",
      "title": "Pepe Jeans Men's Regular Fit Jeans",
      "category": "Men's Clothing",
      "subcategory": "Jeans",
      "brand": "Pepe jeans",
      "price": "₹1899.00",
      "stock": "15",
      "rating": "4.2",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
    "Fabric": "Cotton Blead",
    "Light": "Fade Mid Rise Jeans",
    "Clean":"Look",
  }
    },

    {
      "id": "6",
      "image":"https://img.tatacliq.com/images/i15//437Wx649H/MP000000020839904_437Wx649H_202401200552101.jpeg",
      "title": "celio* Black Slim Fit Lightly Washed Jeans",
      "category": "Men's Clothing",
      "subcategory": "Jeans",
      "brand": "Celio",
      "price": "₹2199.00",
      "stock": "4",
      "rating": "4.8",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
    "Fabric": "Cotton Blead",
    "Light": "Fade Mid Rise Jeans",
    "Clean":"Look",
  }
    },

    //     Men's Shirts
    {
      "id": "7",
      "image":"https://static.zara.net/photos///2023/I/0/2/p/8211/405/538/2/w/1920/8211405538_2_1_1.jpg?ts=1691136025439 ",
      "title": "Zara - Oxford Shirt",
      "category": "Men's Clothing",
      "subcategory": "Shirts",
      "brand": "Zara",
      "price": "₹2999.00",
      "stock": "10",
      "rating": "4.8",
      "color": "Navy Blue",
  "Description":"N/A",
  "Specifications":{
      "Fabric": "Cotton Blead",
      "Light": "Fade Mid Rise Shirts",
      "Sleeve": "Full Sleeve",
      "Clean":"Look",
      
  }
    },

    {
      "id": "8",
      "image":"https://5.imimg.com/data5/ANDROID/Default/2021/10/TA/NA/JX/91259944/product-jpeg.jpg",
      "title": "Denim Levis Shirts",
      "category": "Men's Clothing",
      "subcategory": "Shirts",
      "brand": "Levi's",
      "price": "₹899.00",
      "stock": "250",
      "rating": "4.2",
      "color":"Light Blue",
  "Description":"N/A",
  "Specifications":{
    "Fabric": "Cotton Blead",
    "Light": "Fade Mid Rise Shirts",
    "Sleeve": "Full Sleeve",
    "Clean":"Look",
  }
    },

    {
      "id": "9",
      "image":"https://sslimages.shoppersstop.com/sys-master/images/hc4/hfd/17270352445470/A21BB88C1NA21FN_BROWN_alt3.jpg_230Wx334H",
      "title": "BLACKBERRYS Brown Structured Cotton Slim Fit Mens Formal Shirt",
      "category": "Men's Clothing",
      "subcategory": "Shirts",
      "brand": "BLACKBERRYS",
      "price": "₹2299.00",
      "stock": "50",
      "rating": "4.8",
      "color":"Brown",
    "Description":"N/A",
    "Specifications":{
        "Fabric": "Cotton Blead",
        "Light": "Fade Mid Rise Shirts",
        "Sleeve": "Full Sleeve",
        "Clean":"Look",
  }
    },

    {
      "id": "10",
      "image":"https://m.media-amazon.com/images/I/A1CuPFxkmRL._AC_UY1100_.jpg",
      "title": "Van Heusen Men's Solid Regular Fit Formal Shirt",
      "category": "Men's Clothing",
      "subcategory": "Shirts",
      "brand": "Van Heusen",
      "price": "₹3999.00",
      "stock": "45",
      "rating": "4.9",
      "color": "Blue",
    "Description":"N/A",
    "Specifications":{
        "Fabric": "Cotton Blead",
        "Light": "Fade Mid Rise Shirts",
        "Sleeve": "Full Sleeve",
        "Clean":"Look",
  }
    },

    {
      "id": "11",
      "image":"https://5.imimg.com/data5/ANDROID/Default/2021/1/KC/JO/HP/42692862/product-jpeg-500x500.jpeg",
      "title": "Allen Solly Shirts",
      "category": "Men's Clothing",
      "subcategory": "Shirts",
      "brand": "Allen Solly",
      "price": "₹2599.00",
      "stock": "30",
      "rating": "4.7",
      "color":"cream",
  "Description":"N/A",
  "Specifications":{
    "Fit":"Slim",
    "Fabric": "Cotton Blead",
    "Light": "Fade Mid Rise Shirts",
    "Clean":"Look",
  }
    },

    {
      "id": "12",
      "image":"https://assets.ajio.com/medias/sys_master/root/20240116/ATfm/65a66c7f16fd2c6e6aaa3e73/-473Wx593H-441931914-green-MODEL.jpg",
      "title": "MUFTI Men Tropical Print Slim Fit Shirt",
      "category": "Men's Clothing",
      "subcategory": "Shirts",
      "brand": "MUFTI",
      "price": "₹1299.00",
      "stock": "35",
      "rating": "4.7",
      "color":"White",
  "Description":"N/A",
  "Specifications":{
      "Fit": "Free",
      "Fabric": "Cotton Blead",
      "Light": "Fade Mid Rise Shirts",
      "Clean":"Look",
  }
    },

  //      Men's T-Shirts 

    {
      "id": "13",
      "image":"https://m.media-amazon.com/images/I/81wy4PsxSCL._AC_UY1100_.jpg",
      "title": "TOPLOT T-Shirt for Mens",
      "category": "Men's Clothing",
      "subcategory": "T-Shirts",
      "brand": "TOPLOT",
      "price": "₹349.00",
      "stock": "250",
      "rating": "3.8",
      "colour": "White",
  "Description":"N/A",
  "Specifications":{
      "Fabric" : "Heavy Lycra",
      "Fit Type" : "Regular Fit",
      "Clean":"Look",
  }
    },

    {
      "id": "14",
      "image":"https://m.media-amazon.com/images/I/71IWAG0I1hL._AC_UY1100_.jpg",
      "title": "Lymio Men Regular Fit T-Shirt",
      "category": "Men's Clothing",
      "subcategory": "T-Shirts",
      "brand": "Lymio",
      "price": "₹399.00",
      "stock": "₹180",
      "rating":" 4.0",
      "colour": "Black",
  "Description":"N/A",
  "Specifications":{
      "Fit": "Slim",
      "Pattern Type":"Plain",
      "Sleeve Length":"Short Sleeve",
      "Clean":"Look",
  }
    },

    {
      "id": "15",
      "image":"https://xyxxcrew.com/cdn/shop/files/mens-nova-combed-cotton-polo-t-shirts-merlot-maroon-side.jpg?v=1692777818 ",
      "title": "Nova Combed Cotton Polo T-shirts ",
      "category": "Men's Clothing",
      "subcategory": "T-Shirts",
      "brand": "Nova",
      "price": "₹349.00",
      "stock": "280",
      "rating": "3.9",
      "color": "Maroon",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
    "Pattern Type":"Plain",
    "Sleeve Length":"Short Sleeve",
    "Clean":"Look",
  }
    },

    {
      "id": "16",
      "image":"https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/sleep_more_work_less_half_sleeve_t-shirt_for_men_base_22_12_2023_700x933.jpg ",
      "title": "Sleep More Work Less T-shirt for Men",
      "category": "Men's Clothing",
      "subcategory": "T-Shirts",
      "brand": "Beyong",
      "price": "₹299.00",
      "stock": "150",
      "rating": "4.5",
      "color":"Mustard",
  "Description":"N/A",
  "Specifications":{
      "Neck"	: "Round Neck",
      "Fabric": "Cotton Blead",
      "Light":"Fade Mid Rise T-Shirts",
      "Clean":"Look",
  }
    },

    {
      "id": "17",
      "image":"https://ih1.redbubble.net/image.3459318270.2250/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,600x600.u1.jpg",
      "title": "Eat Sleep Work T-shirt",
      "category": "Men's Clothing",
      "subcategory": "T-Shirts",
      "brand": "Vector",
      "price": "₹289.00",
      "stock": "300",
      "rating": "4.1",
      "color":"Black",
  "Description":"N/A",
  "Specifications":{
      "Fit": "Free",
      "Fabric": "Cotton Blead",
      "Light": "Fade Mid Rise T-Shirts",
      "Clean":"Look"
  }
    },

    {
      "id": "18",
      "image":"https://sslimages.shoppersstop.com/sys-master/images/hb2/h4c/31062280110110/OTMBKMM9692_BLACK_alt1.jpg_2000Wx3000H",
      "title": " MACMERISE Black T-Shirt",
      "category": "Men's Clothing",
      "subcategory": "T-Shirts",
      "brand": "MACMERISE",
      "price":"₹300.00",
      "stock": "300",
      "rating": "4.4",
      "color":"Black",
  "Description":"N/A",
  "Specifications":{
      "Fit": "Free",
      "Fabric": "Cotton Blead",
      "Light" : "Fade Mid Rise T-Shirts",
      "Clean":"Look",
  }
    },

  //          Women's Clothing
  //           Sarees
    {
      "id": "19",
      "image":"https://images.meesho.com/images/products/125764768/vbtaa_512.webp",
      "title": "Women's Fancy Designer Sarees",
      "category": "Women's Clothing",
      "subcategory": "Sarees",
      "brand": "Divastri",
      "price": "₹1589.00",
      "stock": "15",
      "rating": "4.8",
  "Description":"N/A",
  "Specifications":{
      "Pattern" : "Embroidered",
      "Saree Fabric" : "Silk",
      "Blouse" : "Separate Blouse Piece",
      "Clean:": "Look",
  }
    },

    {
      "id": "20",
      "image":"https://images.meesho.com/images/products/124574623/osblc_512.webp",
      "title": "Women's Fancy Designer Sarees",
      "category": "Women's Clothing",
      "subcategory": "Sarees",
      "brand": "Anand",
      "price": "₹1289.00",
      "stock": "150",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Pattern" : "Embroidered",
    "Saree Fabric" : "Silk",
    "Blouse" : "Separate Blouse Piece",
    "Clean": "Look",
  }
    },

    {
      "id": "21",
      "image":"https://cdn.stylecaret.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/1/51125530894_6be69abe67_o.jpg",
      "title": "Fancy Party Wear Saree",
      "category": "Women's Clothing",
      "subcategory": "Sarees",
      "brand": "Fabwomen",
      "price": "₹1199.00",
      "stock": "150",
      "rating": "4.6",
  "Description":"N/A",
  "Specifications":{
    "Pattern" : "Embroidered",
    "Saree Fabric" : "Silk",
    "Blouse" : "Separate Blouse Piece",
    "Clean": "Look",
  }
    },

    {
      "id": "22",
      "image":"https://odette.in/cdn/shop/products/MHTSTFH48267_1_1400x.jpg?v=1678363431",
      "title": "Odette Women Black Silk Saree",
      "category": "Women's Clothing",
      "subcategory": "Sarees",
      "brand": "Odette",
      "price": "₹2799.00",
      "stock": "150",
      "rating": "4.9",
  "Description":"N/A",
  "Specifications":{
    "Pattern" : "Embroidered",
    "Saree Fabric" : "Silk",
    "Blouse" : "Separate Blouse Piece",
    "Clean": "Look",
  }
    },

    {
      "id": "23",
      "image":"https://i.pinimg.com/736x/63/2b/fd/632bfd1067b8ab27aac24ca10c7327a1.jpg",
      "title": "Kanjeevaram Silk Sarees",
      "category": "Women's Clothing",
      "subcategory": "Sarees",
      "brand": "Kanjeevaram",
      "price": "₹4499.00",
      "stock": "2",
      "rating": "4.1",
  "Description":"N/A",
  "Specifications":{
    "Pattern" : "Embroidered",
    "Saree Fabric" : "Silk",
    "Blouse" : "Separate Blouse Piece",
    "Clean": "Look",
  }
    },

    {
      "id": "24",
      "image":"https://kankatala-static.gumlet.io/media/catalog/product/cache/f09ab4cdec5be236cb419739f27c85f0/1/2/1213047304_1.jpg",
      "title": "Kanchipuram Silk Plain Beige Saree",
      "category": "Women's Clothing",
      "subcategory": "Sarees",
      "brand": "Kanchipuram",
      "price": "₹1499.00",
      "stock": "100",
      "rating": "4.1",
  "Description":"N/A",
  "Specifications":{
    "Pattern" : "Embroidered",
    "Saree Fabric" : "Silk",
    "Blouse" : "Separate Blouse Piece",
    "Clean": "Look",
  }
    },

  //              Tops

    {
      "id": "25",
      "image":"https://img3.junaroad.com/uiproducts/17949070/pri_175_p-1629531062.jpg",
      "title": " Girls Top from western ",
      "category": "Women's Clothing",
      "subcategory": "Tops",
      "brand": "Tulsi",
      "price": "₹399.00",
      "stock": "150",
      "rating": "4.1",
  "Description":"N/A",
  "Specifications":{
      "Nack" : "Round Nack",
      "Sleeve Type"	: "Full Sleeves",
      "Clean": "Look",
  }
    },

    {
      "id": "26",
      "image":"https://4.imimg.com/data4/PW/MN/ANDROID-37023138/product.jpeg",
      "title": " Cotton And Chiffon Girls Designer Tops",
      "category": "Women's Clothing",
      "subcategory": "Tops",
      "brand": "Berrylush",
      "price": "₹1299.00",
      "stock": "150",
      "rating": "4.5",
      "reviews": "1200",
  "Description":"N/A",
  "Specifications":{
    "Nack" : "Round Nack",
    "Sleeve Type"	: "Full Sleeves",
    "Clean": "Look",
  }
    },

    {
      "id": "27",
      "image":"https://www.textileinfomedia.com/img/elsc/dhunki-1481-full.jpg",
      "title": "Off Shoulder Girls Top",
      "category": "Women's Clothing",
      "subcategory": "Tops",
      "brand": "Dhunki",
      "price": "₹299.00",
      "stock": "150",
      "rating": "4.3",
  "Description":"N/A",
  "Specifications":{
    "Nack" : "Round Nack",
    "Sleeve Type"	: "Off Shoulder",
    "Clean": "Look"
  }
    },

    {
      "id": "28",
      "image":"https://images.bewakoof.com/web/Bardot-top---Designer-girls-top-design---Bewakoof-Blog.jpg",
      "title": "Girls Top",
      "category": "Women's Clothing",
      "subcategory": "Tops",
      "brand": "Tokyo",
      "price": "₹699.00",
      "stock": "50",
      "rating": "4.7",
  "Description":"N/A",
  "Specifications":{
    "Nack" : "Round Nack",
    "Sleeve Type"	: "Off Shoulder",
    "Clean": "Look"
  }
    },

    {
      "id": "29",
      "image":"https://images.bewakoof.com/web/Tiered-or-Multi-Layered-Tops---Designer-girls-top-design---Bewakoof-Blog.jpg",
      "title": " Girls Top",
      "category": "Women's Clothing",
      "subcategory": "Tops",
      "brand": "Tokyo",
      "price": "₹499.00",
      "stock": "60",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Nack" : "Round Nack",
    "Sleeve Type"	: "Off Shoulder",
    "Clean": "Look"
  }
    },

    {
      "id": "30",
      "image":"https://i.pinimg.com/originals/b3/d1/9f/b3d19f6d0b14282ef647a110a1ebd6d7.jpg",
      "title": "Pin on Trendy Tops",
      "category": "Women's Clothing",
      "subcategory": "Tops",
      "brand": "Pin",
      "price": "₹699.00",
      "stock": "66",
      "rating": "4.2",
  "Description":"N/A",
  "Specifications":{
    "Nack" : "Round Nack",
    "Sleeve Type"	: "Off Shoulder",
    "Look": "Clean", 
  }
    },

    //    Skirts

    {
      "id": "31",
      "image":"https://www.yellow.com.mt/sys/articles/1043/5fd9f5886ee79_5d57a2e67fa94skirtsheroimage.jpg",
      "title": "Skirts",
      "category": "Women's Clothing",
      "subcategory": "Skirts",
      "brand": "Pleated",
      "price": "₹395.00",
      "stock": "200",
      "rating": "4.3",
  "Description":"N/A",
  "Specifications":{
    "Fabric": "Cotton Blead",
    "Type":"Suitable For Western Wear",
    "Clean":"Look",
      
  }
    },

    {
      "id": "32",
      "image":"https://ae01.alicdn.com/kf/Hc5cd7fdef2ff4e3780db3b6a41995d6by.jpg_640x640q90.jpg?smt_ispass_5716647",
      "title": "Women Checkered Pleated Skirt",
      "category": "Women's Clothing",
      "subcategory": "Skirts",
      "brand": "Pleated",
      "price": "₹499.00",
      "stock": "150",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Fabric": "Cotton Blead",
    "Type":"Suitable For Western Wear",
    "Clean":"Look",
    
  }
    },

    {
      "id": "33",
      "image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fonlineshop.oxfam.org.uk%2Fnot-branded-red-tartan-skirt-red-tartan-size-34%2Fproduct%2FHD_302048280&psig=AOvVaw1_wtOLmxbYf_NLN3BCTtBa&ust=1716286836174000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwj8mvLqgJyGAxXbTmwGHT-HC-0QjRx6BAgAEBY",
      "title": "NOT BRANDED RED TARTAN SKIRT RED TARTAN",
      "category": "Women's Clothing",
      "subcategory": "Skirts",
      "brand": "Tokyo",
      "price": "₹999.00",
      "stock": "10",
      "rating": "4.8",
  "Description":"N/A",
    "Specifications":{
      "Fabric": "Cotton Blead",
      "Type":"Suitable For Western Wear",
      "Clean":"Look",
      
  }
    },

    //              Kids' Clothing 
    //             T-Shirts

    {
      "id": "34",
      "image":"https://homafy.com/wp-content/uploads/2024/05/kids-printed-nightsuit-2.webp",
      "title": "Boys Dress | Shirt & Shorts Set",
      "category": "Kids' Clothing",
      "subcategory": "T-Shirts",
      "brand": "Levi's",
      "price": "₹899.00",
      "stock": "190",
      "rating": "4.5",
      "color":"White",
    "Description":"N/A",
    "Specifications":{
      "Fit": "Free",
      "Fabric": "Cotton Blead",
      "Type":"Light Fade Mid Rise T-Shirts",
      "Clean":"Look",
      
  }
    },

    {
      "id": "34",
      "image":"https://cdn-lkjcp.nitrocdn.com/TTzjESNKDJTFfIZroHkrsysXJTbHIAbV/assets/images/optimized/rev-bfdacd8/www.pinkblueindia.com/wp-content/uploads/2024/01/boys2pieceoutfitset.jpg",
      "title": "Kids Bow Tie with Blue Shirt & Denim Jeans ",
      "category": "Kids' Clothing",
      "subcategory": "T-Shirts",
      "brand": "Pink Blue",
      "price": "₹1299.00",
      "stock": "150",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
      "Fit": "Slim",
      "Fabric": "Cotton Blead",
      "Type":"Light Fade Mid Rise T-Shirts",
      "Clean":"Look",
     
  }
    },

    {
      "id": "35",
      "image":"https://images.meesho.com/images/products/328124031/prlaf_512.jpg",
      "title": "kids clothing set boys",
      "category": "Kids' Clothing",
      "subcategory": "T-Shirts",
      "brand": "Levi's",
      "price": "₹799.00",
      "stock": "100",
      "rating": "3.5",
  "Description":"N/A",
  "Specifications":{
      "Fit": "Slim",
      "Fabric": "Cotton Blead",
      "Type":"Light Fade Mid Rise T-Shirts",
      "Clean":"Look",
  }
    },

    {
      "id": "36",
      "image":"https://cf.shopee.ph/file/74f6792326f4fdcd8f866ded313769a1",
      "title": "Baby Boy New Summer Dresses Designs",
      "category": "Kids' Clothing",
      "subcategory": "T-Shirts",
      "brand": "Polo",
      "price": "₹1299.00",
      "stock": "150",
      "rating": "4.6",
  "Description":"N/A",
  "Specifications":{
      "Fit": "Slim",
      "Fabric": "Cotton Blead",
      "Type":"Light Fade Mid Rise T-Shirts",
      "Clean":"Look",
      
  }
    },

    {
      "id": "37",
      "image":"https://i.pinimg.com/236x/2c/07/29/2c0729629c7caa57b72995f1b92c400e.jpg",
      "title": "Kids top design",
      "category": "Kids' Clothing",
      "subcategory": "T-Shirts",
      "brand": "kiti",
      "price": "₹499.00",
      "stock": "200",
      "rating": "3.5",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
    "Fabric": "Cotton Blead",
    "Type":"Light Fade Mid Rise T-Shirts",
    "Clean":"Look",
  }
    },

    {
      "id": "38",
      "image":"https://down-my.img.susercontent.com/file/1b8221b6b2956068f9b20f12b6d384b8",
      "title": "Baju Baby boy clothes",
      "category": "Kids' Clothing",
      "subcategory": "T-Shirts",
      "brand": "Polo",
      "price": "₹599.00",
      "stock": "150",
      "rating": "4.6",
  "Description":"N/A",
  "Specifications":{
      "Fit": "Slim",
      "Fabric": "Cotton Blead",
      "Type":"Light Fade Mid Rise T-Shirts",
      "Clean":"Look",
  }
    },

  //    Jeans

    {
      "id": "39",
      "image":"https://www.mumkins.in/cdn/shop/collections/Catlog-boy-jeans-_-pants.jpg?v=1686808179",
      "title": "Boys Jeans",
      "category": "Kids' Clothing",
      "subcategory": "Jeans",
      "brand": "Levi's",
      "price": "₹899.00",
      "stock": "150",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
    "Fabric": "Cotton Blead",
    "Type":"Light Fade Mid Rise Jeans",
    "Clean": "Look",
  }
    },

    {
      "id": "40",
      "image":"https://5.imimg.com/data5/ANDROID/Default/2020/12/KT/XH/DC/6737895/save-20201230-145756-jpg-500x500.jpg",
      "title": "Boys Denim Kids Stylish Jeans",
      "category": "Kids' Clothing",
      "subcategory": "Jeans",
      "brand": "Killer",
      "price": "₹1299.00",
      "stock": "550",
      "rating":" 4.9",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
    "Fabric": "Cotton Blead",
    "Type":"Light Fade Mid Rise Jeans",
    "Clean": "Look",
  }
    },

    {
      "id": "41",
      "image":"https://5.imimg.com/data5/PP/XU/MY-14049601/kids-girls-jeans.jpg",
      "title": "Tensy Denim Kids Girls Jeans ",
      "category": "Kids' Clothing",
      "subcategory": "Jeans",
      "brand": "Tensy",
      "price": "₹699.00",
      "stock": "490",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
    "Fabric": "Cotton Blead",
    "Type":"Light Fade Mid Rise Jeans",
    "Clean": "Look",
  }
    },

    {
      "id": "42",
      "image":"https://themomedit.com/wp-content/uploads/2021/08/OshKosh-Back-to-School-Kids-Clothes-9-scaled.jpg",
      "title": "Comfy Jeans For Picky Kids & Toddlers",
      "category": "Kids' Clothing",
      "subcategory": "Jeans",
      "brand": "Kidi",
      "price": "₹599.00",
      "stock": "10",
      "rating": "4.2",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
    "Fabric": "Cotton Blead",
    "Type":"Light Fade Mid Rise Jeans",
    "Clean": "Look",
  }
    },

    {
      "id": "43",
      "image":"https://i.pinimg.com/originals/18/d7/16/18d7162824025e2972054d1c785a1a96.png",
      "title": "kid's perfect Jeans",
      "category": "Kids' Clothing",
      "subcategory": "Jeans",
      "brand": "Killer",
      "price": "₹1299.00",
      "stock": "150",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
    "Fabric": "Cotton Blead",
    "Type":"Light Fade Mid Rise Jeans",
    "Clean": "Look",
  }
    },

    {
      "id": "44",
      "image":"https://tiimg.tistatic.com/fp/1/007/655/kids-fashionable-comfortable-breathable-lightweight-printed-shirt-jeans--143.jpg",
      "title": "Breathable Kids Fashionable Jeans",
      "category": "Kids' Clothing",
      "subcategory": "Jeans",
      "brand": "Killer",
      "price": "₹1099.00",
      "stock": "56",
      "rating": "4.7",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
    "Fabric": "Cotton Blead",
    "Type":"Light Fade Mid Rise Jeans",
    "Clean": "Look",
  }
    },

  //   Footwear
  //    Sneakers

    {
      "id": "45",
      "image":"https://image.made-in-china.com/2f0j00BFpTJvjGCozt/Children-Sports-Sandals-Shoes-with-LED-Wall-Light-Kids-Footwear-790-.webp",
      "title": "Children Sports Sandals Shoes with LED Wall Light",
      "category": "Footwear",
      "subcategory": "Sneakers",
      "brand": "X-DX",
      "price": "₹899.00",
      "stock": "50",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
      "Ideal for": "Boys & Girls",
      "Primary color": "Multicolor",
      "Heel Design" :"Flats",
  }
    },

    {
      "id": "46",
      "image":"https://5.imimg.com/data5/SELLER/Default/2022/3/RH/TH/MT/149710568/kids-boys-footwear.jpg",
      "title": "Canvas Black Kids Boys Footwear",
      "category": "Footwear",
      "subcategory": "Sneakers",
      "brand": "Canvas",
      "price": "₹1299.00",
      "stock": "150",
      "rating": "4.6",
  "Description":"N/A",
  "Specifications":{
    "Ideal for" :"Boys & Girls",
    "Primary color": "Multicolor",
    "Heel Design" :"Flats",
  }
    },

    {
      "id": "47",
      "image":"https://assets.ajio.com/medias/sys_master/root/20230905/wLbj/64f72cd5afa4cf41f5a7a593/trz_red_spider-man_slingback_clogs_.jpg",
      "title": "Footwear For Kid's",
      "category": "Footwear",
      "subcategory": "Sneakers",
      "brand": "Loto",
      "price": "₹299.00",
      "stock": "10",
      "rating": "3.5",
  "Description":"N/A",
  "Specifications":{
    "Ideal for": "Boys & Girls",
    "Primary color": "Multicolor",
    "Heel Design" :"Flats",
  }
    },

    {
      "id": "48",
      "image":"https://admin.mochishoes.com/product/46-2/660/46-2M23.jpg",
      "title": "Kids Shoes Sneakers",
      "category": "Footwear",
      "subcategory": "Sneakers",
      "brand": "Levi's",
      "price": "₹1099.00",
      "stock":"50",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Ideal for": "Boys & Girls",
    "Primary color": "Multicolor",
    "Heel Design" :"Flats",
  }
    },

    {
      "id": "49",
      "image":"https://images.jdmagicbox.com/quickquotes/images_main/new-puma-basketball-shoes-2019-2020033256-xd1x679y.jpg",
      "title": "new puma basketball shoes",
      "category": "Footwear",
      "subcategory": "Sneakers",
      "brand": "Puma",
      "price": "₹5999.00",
      "stock": "2",
      "rating": "4.8",
  "Description":"N/A",
  "Specifications":{
      "Fit": "Slim",
      "Fabric": "Cotton Blead",
      "Type":"Light Fade Mid Rise T-Shirts",
      "Clean": "Look",
  }
    },

    {
      "id": "50",
      "image":"https://m.economictimes.com/thumb/msid-101830621,width-1200,height-900,resizemode-4,imgsize-23254/best-nike-sports-shoes-for-men.jpg",
      "title": "nike sports shoes for men",
      "category": "Footwear",
      "subcategory": "Sneakers",
      "brand": "Nike",
      "price": "₹4299.00",
      "stock": "5",
      "rating": "4.9",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
    "Fabric": "Cotton Blead",
    "Type":"Light Fade Mid Rise T-Shirts",
    "Clean": "Look",
  }
    },

  //    Heels

    {
      "id": "51",
      "image":"https://m.media-amazon.com/images/I/71JqtKv-nVL._AC_UY1000_.jpg",
      "title": "JM LOOKS Strappy Heels for Women",
      "category": "Footwear",
      "subcategory": "Heels",
      "brand": "Chunky",
      "price": "₹499.00",
      "stock": "150",
      "rating":" 4.3",
  "Description":"N/A",
  "Specifications":{
      "Type for Heels": "Block Heel",
      "Type for Flats":"Sandal",
      
  }
    },

    {
      "id": "52",
      "image":"https://www.tiesta.in/cdn/shop/products/WhatsAppImage2021-09-20at5.16.49PM_6_-Copy.jpg?v=1648721128",
      "title": "Bridal Block Heels",
      "category": "Footwear",
      "subcategory": "Heels",
      "brand": "Denill",
      "price": "₹699.00",
      "stock": "300",
      "rating": "3.1",
  "Description":"N/A",
  "Specifications":{
    "Type for Heels": "Block Heel",
    "Type for Flats":"Sandal",
  }
    },

    {
      "id": "53",
      "image":"https://www.lulus.com/images/product/xlarge/10651161_539617.jpg?w=375&hdpi=1",
      "title": "White Heels ",
      "category": "Footwear",
      "subcategory": "Heels",
      "brand": "Denill",
      "price": "₹889.00",
      "stock": "150",
      "rating": "4.8",
  "Description":"N/A",
  "Specifications":{
    "Type for Heels": "Block Heel",
    "Type for Flats":"Sandal",
  }
    },

    {
      "id": "54",
      "image":"https://static.toiimg.com/thumb/msid-93643962,width-1280,height-720,resizemode-4/93643962.jpg",
      "title": "Block Heels",
      "category": "Footwear",
      "subcategory": "Heels",
      "brand": "Zapatoz",
      "price": "₹1299.00",
      "stock": "150",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Type for Heels": "Block Heel",
    "Type for Flats":"Sandal",
  }
    },

    {
      "id": "55",
      "image":"https://cdn0.weddingwire.in/article-gallery-o/00000/3_2/960/jpg/articulos-india/2019/non-troncales/type-of-heels/fotowalle-stiletto.jpeg",
      "title": "Party Heels",
      "category": "Footwear",
      "subcategory": "Heels",
      "brand": "Zapatoz",
      "price": "₹459.00",
      "stock": "50",
      "rating": "4.2",
  "Description":"N/A",
  "Specifications":{
    "Type for Heels":" Stappy Heel",
    "Type for Flats":"Sandal",
  }
    },

    {
      "id": "56",
      "image":"https://bswh-p-001.sitecorecontenthub.cloud/api/public/content/803c806d3f2342f79a55f6b512ace592?v=183e85d0",
      "title": "High Hills",
      "category": "Footwear",
      "subcategory": "Heels",
      "brand": "Zapatoz",
      "price": "₹800.00",
      "stock": "300",
      "rating": "4.0",
  "Description":"N/A",
  "Specifications":{
    "Type for Heels":" Stappy Heel",
    "Type for Flats":"Sandal",
  }
    },

  //    Accessories
  //     Watches

    {
      "id": "57",
      "image":"https://static.chrono24.com/magazine/wp-content/uploads/2019/11/Straps-Watchgecko-Tudor-Black-Bay-58.jpg",
      "title": "Automatic Analog Watch - For Men ",
      "category": "Accessories",
      "subcategory": "Watches",
      "brand": "",
      "price": "₹1299.00",
      "stock": "50",
      "rating": "4.6",
  "Description":"N/A",
  "Specifications":{
      "Fit": "Slim",
      "Display Type": "Analog",
      "Occasion": "Casual, Formal, Party-Wedding, Sports",
      "Clean": "Look",
  }
    },

    {
      "id": "58",
      "image":"https://www.zupppy.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-11-at-11.01.52-PM.jpeg",
      "title": "Elegance Redefined: Women Watch ",
      "category": "Accessories",
      "subcategory": "Watches",
      "brand": "Rolex",
      "price": "₹2299.00",
      "stock": "70",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Women's": "Watch",
    "Fit": "Slim",
      "Display Type": "Analog",
      "Occasion": "Casual, Formal, Party-Wedding, Sports",
      "Clean": "Look",
  }
    },

    {
      "id": "59",
      "image":"https://5.imimg.com/data5/ECOM/Default/2023/2/MO/CR/OQ/185542060/51qugmnq-rl-500x500.jpg",
      "title": "Nibosi Women Wrist Watches Analog Rose Gold",
      "category": "Accessories",
      "subcategory": "Watches",
      "brand": "Nibosi",
      "price": "₹1599.00",
      "stock":" 80",
      "rating": "4.8",
  "Description":"N/A",
  "Specifications":{
    "Women's": "Watch",
    "Fit": "Slim",
      "Display Type": "Analog",
      "Occasion": "Casual, Formal, Party-Wedding, Sports",
      "Clean": "Look",
  }
    },

    {
      "id": "60",
      "image":"https://www.trendilook.com/wp-content/uploads/2022/09/KW-00004110_5.jpg",
      "title": "Trendilook Multi-character Light Watch for Kids",
      "category": "Accessories",
      "subcategory": "Watches",
      "brand": "Trendilook",
      "price": "₹399.00",
      "stock": "100",
      "rating": "4.0",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
      "Display Type": "Analog",
      "Occasion": "Casual, Formal, Party-Wedding, Sports",
      "Clean": "Look",
  }
    },

    {
      "id": "61",
      "image":"https://c.ndtvimg.com/2023-12/f76th358_watches_625x300_26_December_23.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      "title": "Analog Watch - For Men ",
      "category": "Accessories",
      "subcategory": "Watches",
      "brand": "Allen Solly",
      "price": "₹1599.00",
      "stock": "15",
      "rating": "4.6",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
      "Display Type": "Analog",
      "Occasion": "Casual, Formal, Party-Wedding, Sports",
      "Clean": "Look",
  }
    },

    {
      "id": "62",
      "image":"https://m.media-amazon.com/images/I/71S2kwPJiNL._AC_UY1000_.jpg",
      "title": "Grab These Trendy Metallic Watches",
      "category": "Accessories",
      "subcategory": "Watches",
      "brand": "Jocker & Witch",
      "price": "₹499.00",
      "stock": "150",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Fit": "Slim",
      "Display Type": "Analog",
      "Occasion": "Casual, Formal, Party-Wedding, Sports",
      "Clean": "Look",
  }
    },

    

    //      Bags

    {
      "id": "63",
      "image":"https://m.media-amazon.com/images/I/71S2kwPJiNL._AC_UY1000_.jpg",
      "title": " Hottest Men Street Style Bag",
      "category": "Accessories",
      "subcategory": "Bags",
      "brand": "Wildcraft",
      "price": "₹1599.00",
      "stock":" 20",
      "rating": "4.6",
  "Description":"N/A",
  "Specifications":{
      "Type": "Backpack",
      "Ideal For": "Men & Women",
      "Laptop Sleeve": "No",
  }
    },

    {
      "id": "64",
      "image":"https://imagescdn.thecollective.in/img/app/product/8/866847-10269001.jpg",
      "title":"Men Black Bags",
      "category": "Accessories",
      "subcategory": "Bags",
      "brand": "Viviza",
      "price": "₹399.00",
      "stock": "350",
      "rating": "4.1",
  "Description":"N/A",
  "Specifications":{
    "Type": "Hand Bag",
      "Ideal For": "Men & Women",
      "Laptop Sleeve": "No",
  }
    },

    {
      "id": "65",
      "image":"https://www.monabindia.com/cdn/shop/files/MC-1402C-1_2048X2048_crop_center.jpg?v=1713341734",
      "title": "Travel Accessories for Men & Women | Gym Sports Bags",
      "category": "Accessories",
      "subcategory": "Bags",
      "brand": "Flyboy",
      "price": "₹899.00",
      "stock": "350",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Type": "Hand Bag",
      "Ideal For": "Men & Women",
      "Laptop Sleeve": "No",
  }
    },

    {
      "id": "66",
      "image": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/27458206/2024/2/9/24ab1c50-2b7d-48d8-9299-134b8d8b504d1707465908779Backpacks1.jpg",
      "title":"Accessories For Girls Bags Handbags",
      "category": "Accessories",
      "subcategory": "Bags",
      "brand": "Ruhi",
      "price": "₹399.00",
      "stock": "200",
      "rating": "3.1",
  "Description":"N/A",
  "Specifications":{
    "Type": "Backpack",
    "Ideal For": "Kids",
    "Laptop Sleeve": "No",
  }
    },

    {
      "id": "67",
      "image":"https://m.media-amazon.com/images/I/51-+SFrhYFL._AC_UY1000_.jpg",
      "title": "Fargo Handbag For Women",
      "category": "Accessories",
      "subcategory": "Bags",
      "brand": "Kara",
      "price": "₹299.00",
      "stock": "150",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Type": "Hand Bag",
    "Ideal For": "Women",
    "Laptop Sleeve": "No",
  }
    },

    {
      "id": "68",
      "image":"https://images.meesho.com/images/products/174036102/e4oeb_512.webp",
      "title": "Hand Embroidered Party wear Clutch Bag Purse for Girls",
      "category": "Accessories",
      "subcategory": "Bags",
      "brand": "WildHorn",
      "price": "₹1299.00",
      "stock": "50",
      "rating": "4.1",
  "Description":"N/A",
  "Specifications":{
    "Type": "Hand Bag",
    "Ideal For": "Women",
    "Laptop Sleeve": "No",
  }
    },

  //    Belts

    {
      "id": "69",
      "image":"https://assets.ajio.com/medias/sys_master/root/20230628/8zRL/649b6a92a9b42d15c9fda878/winsome_deal_brown_solid_belt.jpg",
      "title": "Winsome Deal Solid Belt For Men",
      "category": "Accessories",
      "subcategory": "Belts",
      "brand": "Kaezri",
      "price": "₹399.00",
      "stock": "110",
      "rating": "3.8",
  "Description":"N/A",
  "Specifications":{
      "Leather Type" : "Top Grain",
      "Patterned Belt": "Solid",
      "Occasion": "Evening, Party, Formal, Casual",
  }
    },

    {
      "id": "70",
      "image":"https://www.hollywoodreporter.com/wp-content/uploads/2021/07/Gucci-Leather-Belt-lifestyle-e1625763952494.jpeg",
      "title": " Women's Designer Belts",
      "category": "Accessories",
      "subcategory": "Belts",
      "brand": "Gucci",
      "price": "₹2999.00",
      "stock": "15",
      "rating": "4.3",
  "Description":"N/A",
  "Specifications":{
    "Leather Type" : "Top Grain",
      "Patterned Belt": "Solid",
      "Occasion": "Evening, Party, Formal, Casual",
  }
    },

    {
      "id": "71",
      "image":"https://static.fibre2fashion.com/MemberResources/LeadResources/4/2016/2/Seller/16109518/Images/16109518_1_leather%20belt.jpg?tr=w-260,h-260,cm-pad_resize,bg-F3F3F3",
      "title": "Leather belt : Men",
      "category": "Accessories",
      "subcategory": "Belts",
      "brand": "Leather",
      "price": "₹699.00",
      "stock": "100",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Leather Type" : "Top Grain",
      "Patterned Belt": "Solid",
      "Occasion": "Evening, Party, Formal, Casual",
  }
    },

    {
      "id": "72",
      "image":"https://www.andwest.com/cdn/shop/products/blt237-26-detail-lifestyle_2048x.jpg?v=1630010688",
      "title": "Scalloped Longhorn Western Buckle Belt ",
      "category": "Accessories",
      "subcategory": "Belts",
      "brand": "Buffalo",
      "price": "₹1299.00",
      "stock": "50",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Leather Type" : "Top Grain",
      "Patterned Belt": "Solid",
      "Occasion": "Evening, Party, Formal, Casual",
  }
    },

    {
      "id": "73",
      "image":"https://images-cdn.ubuy.co.in/65b6cdfe5443430f9149b7c7-werforu-women-skinny-pu-leather-belt-for.jpg",
      "title": "WERFORU Women's Skinny PU Leather Belt",
      "category": "Accessories",
      "subcategory": "Belts",
      "brand": "WERFORU",
      "price": "₹299.00",
      "stock": "150",
      "rating": "4.5",
  "Description":"N/A",
  "Specifications":{
    "Leather Type" : "Top Grain",
      "Patterned Belt": "Solid",
      "Occasion": "Evening, Party, Formal, Casual",
  }
    },

    {
      "id": "74",
      "image":"https://cdn.fcglcdn.com/brainbees/images/products/280x338/14529507a.webp",
      "title": "Kids Belts, Suspenders",
      "category": "Accessories",
      "subcategory": "Belts",
      "brand": "Kidi",
      "price": "₹199.00",
      "stock": "250",
      "rating": "4.6",
  "Description":"N/A",
  "Specifications":{
    "Leather Type" : "Top Grain",
    "Patterned Belt": "Solid",
    "Occasion": "Evening, Party, Formal, Casual",
  }
},
  ]
