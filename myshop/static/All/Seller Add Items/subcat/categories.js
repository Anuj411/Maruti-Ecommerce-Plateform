var main_cat = new Array("Electronics", "TV & Appliances", "Men", "Women", "Baby & Kids", "Home & Furniture", "Sports, Books & More");

var sub_cat = new Array();
sub_cat[0] = " Mobiles | Tablets | Mobile Accessories | Smart Wearable Tech | Health Care Appliances | Laptops | Desktop PCs | Gaming & Accessories | Computer Accessories | Computer Peripherals | Speakers | Smart Home Automation | Camera | Camera Accessories | Network Components | Others";
sub_cat[1] = " Television | New Launches | Smart & Ultra HD | Washing Machine | Air Conditioners | Kitchen Appliances | Healthy Living Appliances | Refrigerators";
sub_cat[2] = " Footwear | Men's Grooming | Clothing | Top wear | Bottom wear | Suits, Blazers & Waistcoats | Ties, Socks, Caps & More | Fabrics | Winter Wear | Ethnic wear | Innerwear & Loungewear | Watches | Accessories | Sports & Fitness Store | Smart Watches | Smart Bands | Personal Care Appliances | Featured";
sub_cat[3] = " Clothing | Western Wear | Lingerie & Sleepwear | Swim & Beachwear | Party Dresses | Sports & Gym Wear | Winter & Seasonal Wear | Ethnic Wear | Sports Wear | International Brands | New arrivals | Under 499 | Footwear | Sandals | Shoes | Ballerinas | Slippers & Flip- Flop's | Watches | Smart Watches | Personal Care Appliances | Beauty & Grooming | Jewellery | Accessories | Featured | Trending today";
sub_cat[4] = " Kids Clothing | Boys' Clothing | Girls' Clothing | Baby Boy Clothing | Baby Girl Clothing | Kids Footwear | Boys' Footwear | Girls' Footwear | Baby Footwear | Character Shoes | Kids Winter Wear | Toys | School Supplies | Baby Care | Featured brands";
sub_cat[5] = " Kitchen, Cookware & Serveware | Tableware & Dinnerware | Kitchen Storage | Cleaning Supplies | Furniture Top Offers | Bed Room Furniture | Living Room Furniture | Office & Study Furniture | DIY Furniture | Furnishing | Smart Home Automation | Home Improvement | Home Decor | Home Lighting | Festive Decor & Gifts | Pet Supplies | Durability Certified Furniture | Featured | Christmas Store | Gardening Store | Perfect Home Store";
sub_cat[6] = " Sports | Exercise Fitness | Food Essentials | Health & Nutrition | Books | Stationery | Auto Accessories | Industrial & Scientific tools | Medical Supplies | Music | Gaming | Grocery";

var brand = new Array();
brand[0][0] = " Mi | Realme | Samsung | Infinix | OPPO | Apple | Vivo | Honor | Asus | Poco X2 | realme Narzo 10 | Infinix Hot 9 | IQOO 3 | iPhone SE | Motorola razr | realme Narzo 10A | Motorola g8 power lite";
brand[0][1] = " Apple iPads";
brand[0][2] = " Mobile Cases | Headphones & Headsets | Power Banks | Screenguards | Memory Cards | Smart Headphones | Mobile Cables | Mobile Chargers | Mobile Holders";
brand[0][3] = " Smart Watches | Smart Glasses (VR) | Smart Bands";
brand[0][4] = " Bp Monitors | Weighing Scale";
brand[0][5] = " Dell Laptops | HP Laptops | Xiaomi Laptops | Asus Laptops | Apple MacBook | Lenovo Laptops | Acer Laptops | iBall Laptops | Samsung Laptops | MSI Laptops | Huawei Laptops | Avita Laptops | Razer Laptops | Lava Laptops";
brand[0][6] = "";
brand[0][7] = " Gaming Laptops | Gaming PCs";
brand[0][8] = " External Hard Disks | Pendrives | Laptop Skins & Decals | Laptop Bags | Mouse";
brand[0][9] = " Printers & Ink Cartridges | Monitors";
brand[0][10] = " Home Audio Speakers | Home Theatres | Soundbars | Bluetooth Speakers | DTH Set Top Box";
brand[0][11] = " Google Nest";
brand[0][12] = " DSLR & Mirrorless | Compact & Bridge Cameras | Sports & Action";
brand[0][13] = " Lens | Tripods";
brand[0][14] = " Routers";
brand[0][15] = " Your Own category";

brand[1][0] = "";
brand[1][1] = "";
brand[1][2] = " Top Brands | Mi | Vu | Thomson | Samsung | iFFALCON by TCL | Nokia | LG | BPL | Motorola | Shop by Screen Size | 24 & below | 28 - 32 | 39 - 43 | 48 - 55 | 60 & above";
brand[1][3] = " Fully Automatic Front Load | Semi Automatic Top Load | Fully Automatic Top Load";
brand[1][4] = " Inverter AC | Split ACs | Window ACs | Shop By Brand | LG | Hitachi | Carrier | Refrigerators | Single Door | Double Door | Triple door | Side by Side | Convertible";
brand[1][5] = " Microwave Ovens | Oven Toaster Grills (OTG) | Juicer/Mixer/Grinder | Electric Kettle | Induction Cooktops | Chimneys | Hand Blenders | Sandwich Makers | Pop Up Toasters | Electric Cookers | Wet Grinders | Food Processors | Coffee Makers | Dishwashers";
brand[1][6] = " Small Home Appliances | Irons | Water Purifiers | Fans | Air Coolers | Inverters | Vacuum Cleaners | Sewing Machines | Voltage Stabilizers | Water Geysers | Immersion Rods | Top Brands | Livpure | Philips | Bajaj | IFB | Eureka Forbes | Kaff | Buying Guides | Televisions | Washing Machines";
brand[1][7] = " Air Conditioners | Water Purifiers | Air Purifiers | Chimneys | Water Geysers | New Launches | Coocaa Smart TVs | Nokia (55) 4K Android TV | Mi (32) 4A Pro Android TV | MarQ (43) FHD Smart TV | LG Refrigerators | Thomson (40) 4K Smart TV | Whirlpool Refrigerators | Kodak (22) | (32) LED TVs";

brand[2][0] = " Sports Shoes | Casual Shoes | Formal Shoes | Sandals & Floaters | Flip- Flops | Loafers | Boots | Running Shoes | Sneakers";
brand[2][1] = " Deodorants | Perfumes | Beard Care & Grooming | Shaving & Aftershave | Sexual Wellness";
brand[2][2] = "";
brand[2][3] = " T-Shirts | Formal Shirts | Casual Shirts";
brand[2][4] = " Jeans | Casual Trousers | Formal Trousers | Track pants | Shorts | Cargos | Three Fourths";
brand[2][5] = "";
brand[2][6] = "";
brand[2][7] = "";
brand[2][8] = " Sweatshirts | Jackets | Sweater | Tracksuits";
brand[2][9] = " Kurta | Ethnic Sets | Sherwanis | Ethnic Pyjama | Dhoti | Lungi";
brand[2][10] = " Briefs & Trunks | Vests | Boxers | Pyjamas and Lounge Pants | Thermals | Night Suits | Raincoats & Windcheaters";
brand[2][11] = " Fastrack | Casio | Titan | Fossil | Sonata";
brand[2][12] = " Backpacks | Wallets | Belts | Sunglasses | Luggage & Travel | Frames | Jewellery";
brand[2][13] = "";
brand[2][14] = "";
brand[2][15] = "";
brand[2][16] = " Trimmers | Shavers | Grooming Kits";
brand[2][17] = " Watches Store | Footwear Club | Bags & Wallet | T-Shirt Store | Adidas | Beardo | Reebok | Skechers | Nike";

brand[3][0] = "";
brand[3][1] = " Tops, T-Shirts & Shirts | Dresses | Jeans | Shorts | Skirts | Leggings & Jeggings | Trousers & Capris";
brand[3][2] = " Bras | Panties | Lingerie Sets | Night Dresses & Nighties | Shapewear | Camisoles & Slips";
brand[3][3] = "";
brand[3][4] = "";
brand[3][5] = "";
brand[3][6] = "";
brand[3][7] = " Sarees | Kurtas & Kurtis | Dress Material | Lehenga Choli | Blouse | Anarkali Suits | Petticoats | Abhayas & Burqas | Dupattas";
brand[3][8] = "";
brand[3][9] = "";
brand[3][10] = "";
brand[3][11] = "";
brand[3][12] = "";
brand[3][13] = " Flats | Heels | Wedges";
brand[3][14] = " Sports Shoes | Casual Shoes | Boots";
brand[3][15] = "";
brand[3][16] = "";
brand[3][17] = "";
brand[3][18] = "";
brand[3][19] = " Hair Straightners | Hair Dryers | Epilators";
brand[3][20] = " Make Up | Skin Care | Hair Care | Bath & Spa | Deodorants & Perfumes";
brand[3][21] = " Artificial Jewellery | Silver Jewellery | Precious Jewellery | Coins and Bars";
brand[3][22] = " Handbags | Shoulder Bags | Totes | Sling bags | Clutches | Wallets & Belts | Luggage & Travel | Sunglasses | Frames";
brand[3][23] = " Forever 21 | Accessorize | W | Pantaloons | Chemistry | Lakme | Nivea | Catwalk | Titan-Raga | Fastrack | Divastri | Rare Roots | Anmi | Coins & Bars | Crocs";
brand[3][24] = " Ruffles & Frills | Pastel Kurtas & Kurtis | Designer Net Sarees";

brand[4][0] = "";
brand[4][1] = " Polos & T-Shirts | Ethnic Wear | Shorts & 3/4ths";
brand[4][2] = " Dresses & Skirts | Ethnic Wear | T-shirts & Tops";
brand[4][3] = " Body Suits | Polos & T-Shirts";
brand[4][4] = " Body Suits | Dresses";
brand[4][5] = "";
brand[4][6] = " Sandals | Sport Shoes";
brand[4][7] = " Flats & Bellies | Sport Shoes";
brand[4][8] = "";
brand[4][9] = "";
brand[4][10] = " Boys Winter Wear | Girls Winter Wear | Infants Winter Wear | Thermals | Kids' Watches | Kids' Sunglasses";
brand[4][11] = " Remote Control Toys | Educational Toys | Soft Toys | Cars & Die-cast Vehicles | Outdoor Toys | Action Figures | Board Games | Musical Toys | Dolls & Doll Houses | Puzzles | S.T.E.M Toys | Helicopter & Drones | Toy Guns | Party Supplies";
brand[4][12] = " School Bags | School Combo Sets | Lunch Box";
brand[4][13] = " Diapers | Wipes | Diapering & Potty Training | Baby Bath, Hair & Skin Care | Baby Grooming | Baby Bathing Accessories | Baby Gift Sets & Combo | Baby Oral Care | Nursing & Breast Feeding | Baby Food | Baby Feeding Bottle & Accessories | Baby Feeding Utensils & Accessories | Baby Bedding | Baby Gear | Baby Medical & Health Care | Baby Proofing & Safety | Baby Cleaners & Detergents";
brand[4][14] = " Miss & Chief | Barbie | Disney | United Colors of Benetton | The Children's Place | US Polo | Flying Machine | Crocs | Puma | Funskool | Lego | Luvlap | Mamy Poko | Mee Mee";

brand[5][0] = " Pans | Tawas | Pressure Cookers | Kitchen tools | Gas Stoves";
brand[5][1] = " Coffee Mugs | Dinner Set | Barware";
brand[5][2] = " Water Bottles | Lunch Boxes | Flasks | Casseroles | Kitchen C | ontainers";
brand[5][3] = "";
brand[5][4] = "";
brand[5][5] = " Beds | Mattresses | Wardrobes";
brand[5][6] = " Sofa | Sofa Beds | TV Units | Dining Tables & Chairs | Coffee Tables | Shoe Racks";
brand[5][7] = " Kids Room Furniture";
brand[5][8] = " Bean Bags | Collapsible Wardrobes";
brand[5][9] = " Bedsheets | Curtains | Cushions & Pillows | Blankets | Bath Towels | Kitchen & Table Linen | Floor Coverings";
brand[5][10] = " Smart Security System | Smart Door Locks";
brand[5][11] = " Tools & Measuring Equipments | Home Utilities & Organizers | Lawn & Gardening | Bathroom & Kitchen Fittings";
brand[5][12] = " Paintings | Clocks | Wall Shelves | Stickers | Showpieces & Figurines";
brand[5][13] = " Bulbs | Wall Lamp | Table Lamp | Ceiling Lamp | Emergency Lights";
brand[5][14] = "";
brand[5][15] = " Dogs | Cats | Fish & Aquatics";
brand[5][16] = "";
brand[5][17] = "";
brand[5][18] = " Mugs Store";
brand[5][19] = " Stainless Steel Store | Milton | Bombay Dyeing | @home | HomeTown | Ajanta | Spaces by Welspun | Prestige";
brand[5][20] = "";

brand[6][0] = " Cricket | Badminton | Cycling | Football | Skating | Camping & Hiking | Swimming";  
brand[6][1] = "Cardio Equipment | Home Gyms | Support | Dumbbells | Ab Exercisers | Shakers & Sippers | Yoga Mat |  Gym Gloves";                      
brand[6][2] = " Nuts & Dry Fruits | Tea, Coffee and Beverages | Chocolates | Snacks Corner | Gifting Combos | Sweets Store | Jams, Spreads and Honey | Breakfast Items";
brand[6][3] = " All Supplements | Protein Supplements | Vitamin Supplements | Health Drinks | Ayurvedic Supplements";
brand[6][4] = " Entrance Exams | Academics |  Literature & Fiction | Non Fiction | Young Readers | Self-Help | E-Learning | Preorders | Indian Languages ";
brand[6][5] = "Pens | Diaries | Card Holders | Desk Organizers | Calculators | Key Chains ";
brand[6][6] = " Helmets & Riding Gears | Car Audio/Video | Car Mobile Accessories | Car & Bike Care | Vehicle Lubricants";
brand[6][7] = " Industrial Measurement Devices | Industrial Testing Devices | Lab & Scientific Products | Packaging & Shipping Products | Safety Products";
brand[6][8] = " Pregnancy and Fertility Kits | Hot Water Bag";
brand[6][9] = "Musical Instruments | Music | Movies & Tv shows ";
brand[6][10] = " Gaming Consoles | Gaming Accessories | PS4 Games | Smart Glasses (VR)";
brand[6][11] = " ";


function print_main_cat(main_id , main_index) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var option_str = document.getElementById(main_id);
    option_str.length = 0;
    option_str.options[0] = new Option('Select Category', '');
    option_str.selectedIndex = 0;
    for (var i = 0; i < main_cat.length; i++) {
        option_str.options[option_str.length] = new Option(main_cat[i], main_cat[i]);
    }
}

function print_sub_cat(sub_id, sub_index) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var option_str = document.getElementById(sub_id);
    option_str.length = 0;
    option_str.options[0] = new Option('Select Sub Category', '');
    option_str.selectedIndex = 0;
    var sub_arr = sub_cat[sub_index].split("|");
    for (var i = 0; i < sub_cat.length; i++) {
        option_str.options[option_str.length] = new Option(sub_cat[i], sub_cat[i]);
    }
}

function print_brand(brand_id, brand_index) {
    var option_str = document.getElementById(brand_id);
    option_str.length = 0; // Fixed by Julian Woods
    option_str.options[0] = new Option('Select Brand , Product Or Else', '');
    option_str.selectedIndex = 0;
    var brand_arr = brand[brand_index].split("|");
    for (var i = 0; i < brand.length; i++) {
        option_str.options[option_str.length] = new Option(brand[i], brand[i]);
    }
}