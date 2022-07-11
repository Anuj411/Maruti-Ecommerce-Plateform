// <script language="javascript" type="text/javascript">
function urlRedirectTo(obj) {
    // alert('You Are Selected ' + obj + ' Category ');
    //if('wordpress_version1' == obj)
    //window.location = 'https://wordpress.org/download/';
    //if('wordpress_version2' == obj)
    //window.location = 'https://wordpress.org/download/';
}

function dynamicdropdown(listindex) {
    document.getElementById("sub_subcategory").length = 0;
    document.getElementById("sub_subcategory").options[0] = new Option("Select Sub- Category", "");
    document.getElementById("subcategory").length = 0;
    switch (listindex) {
        case "electronics":
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            document.getElementById("subcategory").options[1] = new Option("Mobiles", "Mobiles");
            document.getElementById("subcategory").options[2] = new Option("Tablets", "Tablets");
            document.getElementById("subcategory").options[3] = new Option("Mobile Accessories", "Mobile Accessories");
            document.getElementById("subcategory").options[4] = new Option("Smart Wearable Tech", "Smart Wearable Tech");
            document.getElementById("subcategory").options[5] = new Option("Health Care Appliances", "Health Care Appliances");
            document.getElementById("subcategory").options[6] = new Option("Laptops", "Laptops");
            document.getElementById("subcategory").options[7] = new Option("Desktop PCs", "Desktop PCs");
            document.getElementById("subcategory").options[8] = new Option("Gaming & Accessories", "Gaming & Accessories");
            document.getElementById("subcategory").options[9] = new Option("Computer Accessories", "Computer Accessories");
            document.getElementById("subcategory").options[10] = new Option("Computer Peripherals", "Computer Peripherals");
            document.getElementById("subcategory").options[11] = new Option("Speakers", "Speakers");
            document.getElementById("subcategory").options[12] = new Option("Smart Home Automation", "Smart Home Automation");
            document.getElementById("subcategory").options[13] = new Option("Camera", "Camera");
            document.getElementById("subcategory").options[14] = new Option("Camera Accessories", "Camera Accessories");
            document.getElementById("subcategory").options[15] = new Option("Network Components", "Network Components");
            document.getElementById("subcategory").options[16] = new Option("Others", "Others");
            break;

        case "tv":
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            document.getElementById("subcategory").options[1] = new Option("Television", "Television");
            document.getElementById("subcategory").options[2] = new Option("Washing Machine", "Washing Machine");
            document.getElementById("subcategory").options[3] = new Option("Air Conditioners", "Air Conditioners");
            document.getElementById("subcategory").options[4] = new Option("Kitchen Appliances", "Kitchen Appliances");
            document.getElementById("subcategory").options[5] = new Option("Healthy Living Appliances", "Healthy Living Appliances");
            document.getElementById("subcategory").options[6] = new Option("Refrigerators", "Refrigerators");
            document.getElementById("subcategory").options[7] = new Option("Others", "Others");
            break;

        case "men":
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            document.getElementById("subcategory").options[1] = new Option("Footwear", "Footwear");
            document.getElementById("subcategory").options[2] = new Option("Men's Grooming", "Men's Grooming");
            document.getElementById("subcategory").options[3] = new Option("Clothing", "Clothing");
            document.getElementById("subcategory").options[4] = new Option("Winter Wear", "Winter Wear");
            document.getElementById("subcategory").options[5] = new Option("Ethnic Wear", "Ethnic Wear");
            document.getElementById("subcategory").options[6] = new Option("Innerwear & Loungewear", "Innerwear & Loungewear");
            document.getElementById("subcategory").options[7] = new Option("Watches", "Watches");
            document.getElementById("subcategory").options[8] = new Option("Accessories", "Accessories");
            document.getElementById("subcategory").options[9] = new Option("Personal Care Appliances", "Personal Care Appliances");
            document.getElementById("subcategory").options[10] = new Option("Others", "Others");
            break;
        case "women":
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            document.getElementById("subcategory").options[1] = new Option("Western Wear", "Western Wear");
            document.getElementById("subcategory").options[2] = new Option("Lingerie & Sleepwear", "Lingerie & Sleepwear");
            document.getElementById("subcategory").options[3] = new Option("Swim & Beachwear", "Swim & Beachwear");
            document.getElementById("subcategory").options[4] = new Option("Winter & Seasonal Wear", "Winter & Seasonal Wear");
            document.getElementById("subcategory").options[5] = new Option("Ethnic Wear", "Ethnic Wear");
            document.getElementById("subcategory").options[6] = new Option("Footwear", "Footwear");
            document.getElementById("subcategory").options[7] = new Option("Watches", "Watches");
            document.getElementById("subcategory").options[8] = new Option("Personal Care Appliances", "Personal Care Appliances");
            document.getElementById("subcategory").options[9] = new Option("Beauty & Grooming", "Beauty & Grooming");
            document.getElementById("subcategory").options[10] = new Option("Jewellery", "Jewellery");
            document.getElementById("subcategory").options[11] = new Option("Accessories", "Accessories");
            document.getElementById("subcategory").options[12] = new Option("Others", "Others");
            break;

        case "baby":
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            document.getElementById("subcategory").options[1] = new Option("Kid Boys Clothing", "Kid Boys Clothing");
            document.getElementById("subcategory").options[2] = new Option("Kid Girls' Clothing", "Kid Girls' Clothing");
            document.getElementById("subcategory").options[3] = new Option("Baby Boy Clothing", "Baby Boy Clothing");
            document.getElementById("subcategory").options[4] = new Option("Baby Girl Clothing", "Baby Girl Clothing");
            document.getElementById("subcategory").options[5] = new Option("Kids Footwear", "Kids Footwear");
            document.getElementById("subcategory").options[6] = new Option("Boys Footwear", "Boys Footwear");
            document.getElementById("subcategory").options[7] = new Option("Girls Footwear", "Girls Footwear");
            document.getElementById("subcategory").options[8] = new Option("Kids Winter Wear", "Kids Winter Wear");
            document.getElementById("subcategory").options[9] = new Option("Toys", "Toys");
            document.getElementById("subcategory").options[10] = new Option("School Supplies", "School Supplies");
            document.getElementById("subcategory").options[11] = new Option("Baby Care", "Baby Care");
            document.getElementById("subcategory").options[12] = new Option("Others", "Others");
            break;

        case "furniture":
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            document.getElementById("subcategory").options[1] = new Option("Kitchen, Cookware & Serveware", "Kitchen, Cookware & Serveware");
            document.getElementById("subcategory").options[2] = new Option("Tableware & Dinnerware", "Tableware & Dinnerware");
            document.getElementById("subcategory").options[3] = new Option("Kitchen Storage", "Kitchen Storage");
            document.getElementById("subcategory").options[4] = new Option("Cleaning Supplies", "Cleaning Supplies");
            document.getElementById("subcategory").options[5] = new Option("Bed Room Furniture", "Bed Room Furniture");
            document.getElementById("subcategory").options[6] = new Option("Living Room Furniture", "Living Room Furniture");
            document.getElementById("subcategory").options[7] = new Option("Office & Study Furniture", "Office & Study Furniture");
            document.getElementById("subcategory").options[8] = new Option("Furnishing", "Furnishing");
            document.getElementById("subcategory").options[9] = new Option("Smart Home Automation", "Smart Home Automation");
            document.getElementById("subcategory").options[10] = new Option("Home Improvement", "Home Improvement");
            document.getElementById("subcategory").options[11] = new Option("Home Decor", "Home Decor");
            document.getElementById("subcategory").options[12] = new Option("Home Lighting", "Home Lighting");
            document.getElementById("subcategory").options[13] = new Option("Pet Supplies", "Pet Supplies");
            document.getElementById("subcategory").options[14] = new Option("Durability Certified Furniture", "Durability Certified Furniture");
            document.getElementById("subcategory").options[15] = new Option("Others", "Others");
            break;

        case "Books":
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            document.getElementById("subcategory").options[1] = new Option("Books", "Books");
            document.getElementById("subcategory").options[2] = new Option("Others", "Others");
            break;

        case "Food Essentials":
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            document.getElementById("subcategory").options[1] = new Option("Canned, Jarred, & Pouched Foods", "Canned, Jarred, & Pouched Foods");
            document.getElementById("subcategory").options[2] = new Option("Baking & Cooking Supplies", "Baking & Cooking Supplies");
            document.getElementById("subcategory").options[3] = new Option("Chocolates, Gifts & More", "Chocolates, Gifts & More");
            document.getElementById("subcategory").options[4] = new Option("Others", "Others");
            break;

        case "More Category":
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            document.getElementById("subcategory").options[1] = new Option("Sports", "Sports");
            document.getElementById("subcategory").options[2] = new Option("Exercise Fitness", "Exercise Fitness");
            document.getElementById("subcategory").options[3] = new Option("Health & Nutrition", "Health & Nutrition");
            document.getElementById("subcategory").options[4] = new Option("Stationery", "Stationery");
            document.getElementById("subcategory").options[5] = new Option("Auto Accessories", "Auto Accessories");
            document.getElementById("subcategory").options[6] = new Option("Industrial & Scientific tools", "Industrial & Scientific tools");
            document.getElementById("subcategory").options[7] = new Option("Medical Supplies", "Medical Supplies");
            document.getElementById("subcategory").options[8] = new Option("Music", "Music");
            document.getElementById("subcategory").options[9] = new Option("Others", "Others");
            break;

        default:
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            break;
    }
    return true;
}

function dynamicdropdownone(listindex) {
    document.getElementById("sub_subcategory").length = 0;
    switch (listindex) {
        // Start Electronics Section
        case "Mobiles":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Mi", "Mi");
            document.getElementById("sub_subcategory").options[2] = new Option("Realme", "Realme");
            document.getElementById("sub_subcategory").options[3] = new Option("Samsung", "Samsung");
            document.getElementById("sub_subcategory").options[4] = new Option("Infinix", "Infinix");
            document.getElementById("sub_subcategory").options[5] = new Option("OPPO", "OPPO");
            document.getElementById("sub_subcategory").options[6] = new Option("Apple", "Apple");
            document.getElementById("sub_subcategory").options[7] = new Option("Vivo", "Vivo");
            document.getElementById("sub_subcategory").options[8] = new Option("Honor", "Honor");
            document.getElementById("sub_subcategory").options[9] = new Option("Asus", "Asus");
            document.getElementById("sub_subcategory").options[10] = new Option("Infinix", "Infinix");
            document.getElementById("sub_subcategory").options[11] = new Option("realme", "realme");
            document.getElementById("sub_subcategory").options[12] = new Option("Motorola", "Motorola");
            document.getElementById("sub_subcategory").options[13] = new Option("Nokia", "Nokia");
            document.getElementById("sub_subcategory").options[14] = new Option("Sony", "Sony");
            document.getElementById("sub_subcategory").options[15] = new Option("One Plus", "One Plus");
            document.getElementById("sub_subcategory").options[16] = new Option("Huawei", "Huawei");
            document.getElementById("sub_subcategory").options[17] = new Option("Gionee", "Gionee");
            document.getElementById("sub_subcategory").options[18] = new Option("Karbon", "Karbon");
            document.getElementById("sub_subcategory").options[19] = new Option("LAVA", "LAVA");
            document.getElementById("sub_subcategory").options[20] = new Option("LG", "LG");
            document.getElementById("sub_subcategory").options[21] = new Option("Intex", "Intex");
            document.getElementById("sub_subcategory").options[22] = new Option("Panasonic", "Panasonic");
            document.getElementById("sub_subcategory").options[23] = new Option("LYF", "LYF");
            document.getElementById("sub_subcategory").options[24] = new Option("Google", "Google");
            document.getElementById("sub_subcategory").options[25] = new Option("Blackberry", "Blackberry");
            document.getElementById("sub_subcategory").options[26] = new Option("HTC", "HTC");
            document.getElementById("sub_subcategory").options[27] = new Option("i-ball", "i-ball");
            document.getElementById("sub_subcategory").options[28] = new Option("Reliance", "Reliance");
            document.getElementById("sub_subcategory").options[29] = new Option("Micromax", "Micromax");
            document.getElementById("sub_subcategory").options[30] = new Option("Others", "Others");
            break;


        case "Tablets":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Apple iPads", "Apple iPads");
            document.getElementById("sub_subcategory").options[2] = new Option("Acer", "Acer");
            document.getElementById("sub_subcategory").options[3] = new Option("Asus", "Asus");
            document.getElementById("sub_subcategory").options[4] = new Option("Honor", "Honor");
            document.getElementById("sub_subcategory").options[5] = new Option("HP", "HP");
            document.getElementById("sub_subcategory").options[6] = new Option("Huawei", "Huawei");
            document.getElementById("sub_subcategory").options[7] = new Option("iBall", "iBall");
            document.getElementById("sub_subcategory").options[8] = new Option("Karbonn", "Karbonn");
            document.getElementById("sub_subcategory").options[9] = new Option("Lava", "Lava");
            document.getElementById("sub_subcategory").options[10] = new Option("Lenovo", "Lenovo");
            document.getElementById("sub_subcategory").options[11] = new Option("LG", "LG");
            document.getElementById("sub_subcategory").options[12] = new Option("Micromax", "Micromax");
            document.getElementById("sub_subcategory").options[13] = new Option("Microsoft", "Microsoft");
            document.getElementById("sub_subcategory").options[14] = new Option("Samsung", "Samsung");
            document.getElementById("sub_subcategory").options[15] = new Option("Sony", "Sony");
            document.getElementById("sub_subcategory").options[16] = new Option("Toshiba", "Toshiba");
            document.getElementById("sub_subcategory").options[17] = new Option("Xiaomi", "Xiaomi");
            document.getElementById("sub_subcategory").options[18] = new Option("Others", "Others");
            break;


        case "Mobile Accessories":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Mobile Cases", "Mobile Cases");
            document.getElementById("sub_subcategory").options[2] = new Option("Headphones & Headsets", "Headphones & Headsets");
            document.getElementById("sub_subcategory").options[3] = new Option("Power Banks", "Power Banks");
            document.getElementById("sub_subcategory").options[4] = new Option("Screenguards", "Screenguards");
            document.getElementById("sub_subcategory").options[5] = new Option("Toughened Glass", "Toughened Glass");
            document.getElementById("sub_subcategory").options[6] = new Option("Memory Cards", "Memory Cards");
            document.getElementById("sub_subcategory").options[7] = new Option("Smart Headphones", "Smart Headphones");
            document.getElementById("sub_subcategory").options[8] = new Option("Mobile Cables", "Mobile Cables");
            document.getElementById("sub_subcategory").options[9] = new Option("Mobile Chargers", "Mobile Chargers");
            document.getElementById("sub_subcategory").options[10] = new Option("Mobile Holders", "Mobile Holders");
            document.getElementById("sub_subcategory").options[11] = new Option("Others", "Others");
            break;


        case "Smart Wearable Tech":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Smart Watches", "Smart Watches");
            document.getElementById("sub_subcategory").options[2] = new Option("Smart Glasses (VR)", "Smart Glasses (VR)");
            document.getElementById("sub_subcategory").options[3] = new Option("Smart Bands", "Smart Bands");
            document.getElementById("sub_subcategory").options[4] = new Option("Others", "Others");
            break;


        case "Health Care Appliances":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Bp Monitors", "Bp Monitors");
            document.getElementById("sub_subcategory").options[2] = new Option("Weighing Scale", "Weighing Scale");
            document.getElementById("sub_subcategory").options[3] = new Option("Fitness Tracker", "Fitness Tracker");
            document.getElementById("sub_subcategory").options[4] = new Option("Others", "Others");
            break;


        case "Laptops":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Dell Laptops", "Dell Laptops");
            document.getElementById("sub_subcategory").options[2] = new Option("HP Laptops", "HP Laptops");
            document.getElementById("sub_subcategory").options[3] = new Option("Xiaomi Laptops", "Xiaomi Laptops");
            document.getElementById("sub_subcategory").options[4] = new Option("Asus Laptops", "Asus Laptops");
            document.getElementById("sub_subcategory").options[5] = new Option("Apple MacBook", "Apple MacBook");
            document.getElementById("sub_subcategory").options[6] = new Option("Lenovo Laptops", "Lenovo Laptops");
            document.getElementById("sub_subcategory").options[7] = new Option("Acer Laptops", "Acer Laptops");
            document.getElementById("sub_subcategory").options[8] = new Option("iBall Laptops", "iBall Laptops");
            document.getElementById("sub_subcategory").options[9] = new Option("Samsung Laptops", "Samsung Laptops");
            document.getElementById("sub_subcategory").options[10] = new Option("MSI Laptops", "MSI Laptops");
            document.getElementById("sub_subcategory").options[11] = new Option("Huawei Laptops", "Huawei Laptops");
            document.getElementById("sub_subcategory").options[11] = new Option("Lava Laptops", "Lava Laptops");
            document.getElementById("sub_subcategory").options[12] = new Option("Others", "Others");
            break;


        case "Desktop PCs":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Monitors", "Monitors");
            document.getElementById("sub_subcategory").options[2] = new Option("Desktop PCs", "Desktop PCs");
            document.getElementById("sub_subcategory").options[3] = new Option("Others", "Others");
            break;


        case "Gaming & Accessories":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Gaming Laptops", "Gaming Laptops");
            document.getElementById("sub_subcategory").options[2] = new Option("Gaming PCs", "Gaming PCs");
            document.getElementById("sub_subcategory").options[3] = new Option("Gaming Consoles", "Gaming Consoles");
            document.getElementById("sub_subcategory").options[4] = new Option("Gaming Accessories", "Gaming Accessories");
            document.getElementById("sub_subcategory").options[5] = new Option("PS4 Games", "PS4 Games");
            document.getElementById("sub_subcategory").options[6] = new Option("Smart Glasses (VR)", "Smart Glasses (VR)");
            document.getElementById("sub_subcategory").options[7] = new Option("Others", "Others");
            break;


        case "Computer Accessories":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("External Hard Disks", "External Hard Disks");
            document.getElementById("sub_subcategory").options[2] = new Option("Pendrives", "Pendrives");
            document.getElementById("sub_subcategory").options[3] = new Option("Laptop Skins & Decals", "Laptop Skins & Decals");
            document.getElementById("sub_subcategory").options[4] = new Option("Laptop Bags", "Laptop Bags");
            document.getElementById("sub_subcategory").options[5] = new Option("Mouse", "Mouse");
            document.getElementById("sub_subcategory").options[6] = new Option("Keyboard", "Keyboard");
            document.getElementById("sub_subcategory").options[7] = new Option("Others", "Others");
            break;


        case "Computer Peripherals":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Printers & Ink Cartridges", "Printers & Ink Cartridges");
            document.getElementById("sub_subcategory").options[2] = new Option("Others", "Others");
            break;


        case "Speakers":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Home Audio Speakers", "Home Audio Speakers");
            document.getElementById("sub_subcategory").options[2] = new Option("Home Theatres", "Home Theatres");
            document.getElementById("sub_subcategory").options[3] = new Option("Soundbars", "Soundbars");
            document.getElementById("sub_subcategory").options[4] = new Option("Bluetooth Speakers", "Bluetooth Speakers");
            document.getElementById("sub_subcategory").options[5] = new Option("DTH Set Top Box", "DTH Set Top Box");
            document.getElementById("sub_subcategory").options[6] = new Option("Others", "Others");
            break;


        case "Smart Home Automation":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Smart Locks and Home Security Systems", "Smart Locks and Home Security Systems");
            document.getElementById("sub_subcategory").options[2] = new Option("Smart Lighting", "Smart Lighting");
            document.getElementById("sub_subcategory").options[3] = new Option("Smart Kitchen Appliances", "Smart Kitchen Appliances");
            document.getElementById("sub_subcategory").options[4] = new Option("Smart Vacuums", "Smart Vacuums");
            document.getElementById("sub_subcategory").options[5] = new Option("Smart Home Surveillance Cameras", "Smart Home Surveillance Cameras");
            document.getElementById("sub_subcategory").options[6] = new Option("Smart Home Hubs and Controllers", "Smart Home Hubs and Controllers");
            document.getElementById("sub_subcategory").options[7] = new Option("Others", "Others");
            break;


        case "Camera":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("DSLR & Mirrorless", "DSLR & Mirrorless");
            document.getElementById("sub_subcategory").options[2] = new Option("Compact & Bridge Cameras", "Compact & Bridge Cameras");
            document.getElementById("sub_subcategory").options[3] = new Option("Sports & Action", "Sports & Action");
            document.getElementById("sub_subcategory").options[4] = new Option("Canon", "Canon");
            document.getElementById("sub_subcategory").options[5] = new Option("Nikon", "Nikon");
            document.getElementById("sub_subcategory").options[6] = new Option("Sony", "Sony");
            document.getElementById("sub_subcategory").options[7] = new Option("Panasonic", "Panasonic");
            document.getElementById("sub_subcategory").options[8] = new Option("Others", "Others");
            break;


        case "Camera Accessories":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Lens", "Lens");
            document.getElementById("sub_subcategory").options[2] = new Option("Tripods", "Tripods");
            document.getElementById("sub_subcategory").options[3] = new Option("Super Fast SD Card", "Super Fast SD Card");
            document.getElementById("sub_subcategory").options[4] = new Option("Others", "Others");
            break;


        case "Network Components":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Routers", "Routers");
            document.getElementById("sub_subcategory").options[2] = new Option("Hubs", "Hubs");
            document.getElementById("sub_subcategory").options[3] = new Option("Switches", "Switches");
            document.getElementById("sub_subcategory").options[4] = new Option("Bridges", "Bridges");
            document.getElementById("sub_subcategory").options[5] = new Option("Gateways", "Gateways");
            document.getElementById("sub_subcategory").options[6] = new Option("Network interface cards (NICs)", "Network interface cards (NICs)");
            document.getElementById("sub_subcategory").options[7] = new Option("Wireless access points (WAPs)", "Wireless access points (WAPs)");
            document.getElementById("sub_subcategory").options[8] = new Option("Adapters", "Adapters");
            document.getElementById("sub_subcategory").options[9] = new Option("Routers", "Routers");
            document.getElementById("sub_subcategory").options[10] = new Option("USB Hubs", "USB Hubs");
            document.getElementById("sub_subcategory").options[10] = new Option("Others", "Others");
            break;


        case "Others":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Your Own category", "Your Own category");
            break;

        // End Electronics Section

        // Start  Tv & appliances Section
        case "Television":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Mi", "Mi");
            document.getElementById("sub_subcategory").options[2] = new Option("Thomson", "Thomson");
            document.getElementById("sub_subcategory").options[3] = new Option("Samsung", "Samsung");
            document.getElementById("sub_subcategory").options[4] = new Option("Nokia", "Nokia");
            document.getElementById("sub_subcategory").options[5] = new Option("LG", "LG");
            document.getElementById("sub_subcategory").options[6] = new Option("BPL", "BPL");
            document.getElementById("sub_subcategory").options[7] = new Option("Motorola", "Motorola");
            document.getElementById("sub_subcategory").options[8] = new Option("Sony", "Sony");
            document.getElementById("sub_subcategory").options[9] = new Option("Xiaomi Mi", "Xiaomi Mi");
            document.getElementById("sub_subcategory").options[10] = new Option("Onida", "Onida");
            document.getElementById("sub_subcategory").options[11] = new Option("Haier", "Haier");
            document.getElementById("sub_subcategory").options[12] = new Option("Panasonic", "Panasonic");
            document.getElementById("sub_subcategory").options[13] = new Option("Videocon", "Videocon");
            document.getElementById("sub_subcategory").options[14] = new Option("Philips ", "Philips ");
            document.getElementById("sub_subcategory").options[15] = new Option("Intex", "Intex");
            document.getElementById("sub_subcategory").options[16] = new Option("Toshiba", "Toshiba");
            document.getElementById("sub_subcategory").options[17] = new Option("Others", "Others");
            break;


        case "Washing Machine":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Fully Automatic Front Load", "Fully Automatic Front Load");
            document.getElementById("sub_subcategory").options[2] = new Option("Semi Automatic Top Load", "Semi Automatic Top Load");
            document.getElementById("sub_subcategory").options[3] = new Option("Fully Automatic Top Load", "Fully Automatic Top Load");
            document.getElementById("sub_subcategory").options[4] = new Option("Others", "Others");
            break;

        case "Air Conditioners":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Inverter AC", "Inverter AC");
            document.getElementById("sub_subcategory").options[2] = new Option("Split ACs", "Split ACs");
            document.getElementById("sub_subcategory").options[3] = new Option("Window ACs", "Window ACs");
            document.getElementById("sub_subcategory").options[4] = new Option("Others", "Others");
            break;

        case "Kitchen Appliances":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Microwave Ovens", "Microwave Ovens");
            document.getElementById("sub_subcategory").options[2] = new Option("Oven Toaster Grills (OTG)", "Oven Toaster Grills (OTG)");
            document.getElementById("sub_subcategory").options[3] = new Option("Juicer/Mixer/Grinder", "Juicer/Mixer/Grinder");
            document.getElementById("sub_subcategory").options[4] = new Option("Electric Kettle", "Electric Kettle");
            document.getElementById("sub_subcategory").options[5] = new Option("Induction Cooktops", "Induction Cooktops");
            document.getElementById("sub_subcategory").options[6] = new Option("Chimneys", "Chimneys");
            document.getElementById("sub_subcategory").options[7] = new Option("Hand Blenders", "Hand Blenders");
            document.getElementById("sub_subcategory").options[8] = new Option("Sandwich Makers", "Sandwich Makers");
            document.getElementById("sub_subcategory").options[9] = new Option("Pop Up Toasters", "Pop Up Toasters");
            document.getElementById("sub_subcategory").options[10] = new Option("Electric Cookers", "Electric Cookers");
            document.getElementById("sub_subcategory").options[11] = new Option("Wet Grinders", "Wet Grinders");
            document.getElementById("sub_subcategory").options[12] = new Option("Food Processors", "Food Processors");
            document.getElementById("sub_subcategory").options[13] = new Option("Coffee Makers", "Coffee Makers");
            document.getElementById("sub_subcategory").options[14] = new Option("Dishwashers", "Dishwashers");
            document.getElementById("sub_subcategory").options[15] = new Option("Others", "Others");
            break;

        case "Healthy Living Appliances":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Small Home Appliances", "Small Home Appliances");
            document.getElementById("sub_subcategory").options[2] = new Option("Irons", "Irons");
            document.getElementById("sub_subcategory").options[3] = new Option("Air Conditioners", "Air Conditioners");
            document.getElementById("sub_subcategory").options[4] = new Option("Water Purifiers", "Water Purifiers");
            document.getElementById("sub_subcategory").options[5] = new Option("Fans", "Fans");
            document.getElementById("sub_subcategory").options[6] = new Option("Air Coolers", "Air Coolers");
            document.getElementById("sub_subcategory").options[7] = new Option("Inverters", "Inverters");
            document.getElementById("sub_subcategory").options[8] = new Option("Vacuum Cleaners", "Vacuum Cleaners");
            document.getElementById("sub_subcategory").options[9] = new Option("Sewing Machines", "Sewing Machines");
            document.getElementById("sub_subcategory").options[10] = new Option("Voltage Stabilizers", "Voltage Stabilizers");
            document.getElementById("sub_subcategory").options[11] = new Option("Water Geysers", "Water Geysers");
            document.getElementById("sub_subcategory").options[12] = new Option("Others", "Others");
            break;

        case "Refrigerators":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Chimneys", "Chimneys");
            document.getElementById("sub_subcategory").options[2] = new Option("Water Geysers", "Water Geysers");
            document.getElementById("sub_subcategory").options[3] = new Option("LG Refrigerators", "LG Refrigerators");
            document.getElementById("sub_subcategory").options[4] = new Option("Whirlpool Refrigerators", "Whirlpool Refrigerators");
            document.getElementById("sub_subcategory").options[5] = new Option("Single Door", "Single Door");
            document.getElementById("sub_subcategory").options[6] = new Option("Double Door", "Double Door");
            document.getElementById("sub_subcategory").options[7] = new Option("Triple door", "Triple door");
            document.getElementById("sub_subcategory").options[8] = new Option("Side by Side", "Side by Side");
            document.getElementById("sub_subcategory").options[9] = new Option("Convertible", "Convertible");
            document.getElementById("sub_subcategory").options[10] = new Option("Others", "Others");
            break;

        case "Others":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Your Own category", "Your Own category");
            break;
        // End Tv & Appliance Section

        // Start Men Sectiom
        case "Footwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , Product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Sports Shoes", "Sports Shoes");
            document.getElementById("sub_subcategory").options[2] = new Option("Casual Shoes", "Casual Shoes");
            document.getElementById("sub_subcategory").options[3] = new Option("Formal Shoes", "Formal Shoes");
            document.getElementById("sub_subcategory").options[4] = new Option("Sandals & Floaters", "Sandals & Floaters");
            document.getElementById("sub_subcategory").options[5] = new Option("Flip- Flops", "Flip- Flops");
            document.getElementById("sub_subcategory").options[6] = new Option("Loafers", "Loafers");
            document.getElementById("sub_subcategory").options[7] = new Option("Boots", "Boots");
            document.getElementById("sub_subcategory").options[8] = new Option("Running Shoes", "Running Shoes");
            document.getElementById("sub_subcategory").options[9] = new Option("Sneakers", "Sneakers");
            document.getElementById("sub_subcategory").options[10] = new Option("Others", "Others");
            break;

        case "Men's Grooming":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , Product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Deodorants", "Deodorants");
            document.getElementById("sub_subcategory").options[2] = new Option("Perfumes", "Perfumes");
            document.getElementById("sub_subcategory").options[3] = new Option("Beard Care & Grooming", "Beard Care & Grooming");
            document.getElementById("sub_subcategory").options[4] = new Option("Shaving & Aftershave", "Shaving & Aftershave");
            document.getElementById("sub_subcategory").options[5] = new Option("Others", "Others");
            break;

        case "Clothing":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , Product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("T-Shirts", "T-Shirts");
            document.getElementById("sub_subcategory").options[2] = new Option("Formal Shirts", "Formal Shirts");
            document.getElementById("sub_subcategory").options[3] = new Option("Casual Shirts", "Casual Shirts");
            document.getElementById("sub_subcategory").options[4] = new Option("Jeans", "Jeans");
            document.getElementById("sub_subcategory").options[5] = new Option("Casual Trousers", "Casual Trousers");
            document.getElementById("sub_subcategory").options[6] = new Option("Formal Trousers", "Formal Trousers");
            document.getElementById("sub_subcategory").options[7] = new Option("Track pants", "Track pants");
            document.getElementById("sub_subcategory").options[8] = new Option("Shorts", "Shorts");
            document.getElementById("sub_subcategory").options[9] = new Option("Cargos", "Cargos");
            document.getElementById("sub_subcategory").options[10] = new Option("Three Fourths", "Three Fourths");
            document.getElementById("sub_subcategory").options[11] = new Option("Suits, Blazers & Waistcoats", "Suits, Blazers & Waistcoats");
            document.getElementById("sub_subcategory").options[12] = new Option("Ties, Socks, Caps & More", "Ties, Socks, Caps & More");
            document.getElementById("sub_subcategory").options[13] = new Option("Fabrics", "Fabrics");
            document.getElementById("sub_subcategory").options[14] = new Option("Others", "Others");
            break;

        case "Winter Wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Sweatshirts", "Sweatshirts");
            document.getElementById("sub_subcategory").options[2] = new Option("Jackets", "Jackets");
            document.getElementById("sub_subcategory").options[3] = new Option("Sweater", "Sweater");
            document.getElementById("sub_subcategory").options[4] = new Option("Tracksuits", "Tracksuits");
            document.getElementById("sub_subcategory").options[5] = new Option("Others", "Others");
            break;

        case "Ethnic wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Kurta", "Kurta");
            document.getElementById("sub_subcategory").options[2] = new Option("Ethnic Sets", "Ethnic Sets");
            document.getElementById("sub_subcategory").options[3] = new Option("Sherwanis", "Sherwanis");
            document.getElementById("sub_subcategory").options[4] = new Option("Ethnic Pyjama", "Ethnic Pyjama");
            document.getElementById("sub_subcategory").options[5] = new Option("Dhoti", "Dhoti");
            document.getElementById("sub_subcategory").options[6] = new Option("Lungi", "Lungi");
            document.getElementById("sub_subcategory").options[7] = new Option("Others", "Others");
            break;

        case "Innerwear & Loungewear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Briefs & Trunks", "Briefs & Trunks");
            document.getElementById("sub_subcategory").options[2] = new Option("Vests", "Vests");
            document.getElementById("sub_subcategory").options[3] = new Option("Boxers", "Boxers");
            document.getElementById("sub_subcategory").options[4] = new Option("Pyjamas and Lounge Pants", "Pyjamas and Lounge Pants");
            document.getElementById("sub_subcategory").options[5] = new Option("Thermals", "Thermals");
            document.getElementById("sub_subcategory").options[6] = new Option("Night Suits", "Night Suits");
            document.getElementById("sub_subcategory").options[7] = new Option("Raincoats & Windcheaters", "Raincoats & Windcheaters");
            document.getElementById("sub_subcategory").options[8] = new Option("Others", "Others");
            break;

        case "Watches":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Fastrack", "Fastrack");
            document.getElementById("sub_subcategory").options[2] = new Option("Casio", "Casio");
            document.getElementById("sub_subcategory").options[3] = new Option("Titan", "Titan");
            document.getElementById("sub_subcategory").options[4] = new Option("Fossil", "Fossil");
            document.getElementById("sub_subcategory").options[5] = new Option("Sonata", "Sonata");
            document.getElementById("sub_subcategory").options[6] = new Option("Others", "Others");
            break;

        case "Accessories":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Backpacks", "Backpacks");
            document.getElementById("sub_subcategory").options[2] = new Option("Wallets", "Wallets");
            document.getElementById("sub_subcategory").options[3] = new Option("Belts", "Belts");
            document.getElementById("sub_subcategory").options[4] = new Option("Sunglasses", "Sunglasses");
            document.getElementById("sub_subcategory").options[5] = new Option("Luggage & Travel", "Luggage & Travel");
            document.getElementById("sub_subcategory").options[6] = new Option("Frames", "Frames");
            document.getElementById("sub_subcategory").options[7] = new Option("Bags", "Bags");
            document.getElementById("sub_subcategory").options[8] = new Option("Jewellery", "Jewellery");
            document.getElementById("sub_subcategory").options[9] = new Option("Others", "Others");
            break;

        case "Personal Care Appliances":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Trimmers", "Trimmers");
            document.getElementById("sub_subcategory").options[2] = new Option("Shavers", "Shavers");
            document.getElementById("sub_subcategory").options[3] = new Option("Grooming Kits", "Grooming Kits");
            document.getElementById("sub_subcategory").options[4] = new Option("Others", "Others");
            break;

        case "Others":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Your Own category", "Your Own category");
            break;
        // End Men Section


        // Start Women Section

        case "Western Wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Tops, T-Shirts & Shirts", "Tops, T-Shirts & Shirts");
            document.getElementById("sub_subcategory").options[2] = new Option("Dresses", "Dresses");
            document.getElementById("sub_subcategory").options[3] = new Option("Jeans", "Jeans");
            document.getElementById("sub_subcategory").options[4] = new Option("Shorts", "Shorts");
            document.getElementById("sub_subcategory").options[5] = new Option("Skirts", "Skirts");
            document.getElementById("sub_subcategory").options[6] = new Option("Leggings & Jeggings", "Leggings & Jeggings");
            document.getElementById("sub_subcategory").options[7] = new Option("Trousers & Capris", "Trousers & Capris");
            document.getElementById("sub_subcategory").options[8] = new Option("Party Dresses", "Party Dresses");
            document.getElementById("sub_subcategory").options[9] = new Option("Others", "Others");
            break;

        case "Lingerie & Sleepwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Bras", "Bras");
            document.getElementById("sub_subcategory").options[2] = new Option("Panties", "Panties");
            document.getElementById("sub_subcategory").options[3] = new Option("Lingerie Sets", "Lingerie Sets");
            document.getElementById("sub_subcategory").options[4] = new Option("Night Dresses & Nighties", "Night Dresses & Nighties");
            document.getElementById("sub_subcategory").options[5] = new Option("Shapewear", "Shapewear");
            document.getElementById("sub_subcategory").options[6] = new Option("Camisoles & Slips", "Camisoles & Slips");
            document.getElementById("sub_subcategory").options[7] = new Option("Others", "Others");
            break;

        case "Swim & Beachwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Swim & Beachwear", "Swim & Beachwear");
            document.getElementById("sub_subcategory").options[2] = new Option("Others", "Others");
            break;

        case "Winter & Seasonal Wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Winter & Seasonal Wear", "Winter & Seasonal Wear");
            document.getElementById("sub_subcategory").options[2] = new Option("Others", "Others");
            break;

        case "Ethnic Wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Sarees", "Sarees");
            document.getElementById("sub_subcategory").options[2] = new Option("Kurtas & Kurtis", "Kurtas & Kurtis");
            document.getElementById("sub_subcategory").options[3] = new Option("Dress Material", "Dress Material");
            document.getElementById("sub_subcategory").options[4] = new Option("Lehenga Choli", "Lehenga Choli");
            document.getElementById("sub_subcategory").options[5] = new Option("Blouse", "Blouse");
            document.getElementById("sub_subcategory").options[6] = new Option("Anarkali Suits", "Anarkali Suits");
            document.getElementById("sub_subcategory").options[7] = new Option("Petticoats", "Petticoats");
            document.getElementById("sub_subcategory").options[8] = new Option("Abhayas & Burqas", "Abhayas & Burqas");
            document.getElementById("sub_subcategory").options[9] = new Option("Dupattas", "Dupattas");
            document.getElementById("sub_subcategory").options[10] = new Option("Others", "Others");
            break;


        case "Footwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Sandals", "Sandals");
            document.getElementById("sub_subcategory").options[2] = new Option("Shoes", "Shoes");
            document.getElementById("sub_subcategory").options[3] = new Option("Sports Shoes", "Sports Shoes");
            document.getElementById("sub_subcategory").options[4] = new Option("Casual Shoes", "Casual Shoes");
            document.getElementById("sub_subcategory").options[5] = new Option("Boots", "Boots");
            document.getElementById("sub_subcategory").options[6] = new Option("Ballerinas", "Ballerinas");
            document.getElementById("sub_subcategory").options[7] = new Option("Slippers & Flip- Flop's", "Slippers & Flip- Flop's");
            document.getElementById("sub_subcategory").options[8] = new Option("Others", "Others");
            break;

        case "Watches":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Fastrack", "Fastrack");
            document.getElementById("sub_subcategory").options[2] = new Option("Casio", "Casio");
            document.getElementById("sub_subcategory").options[3] = new Option("Titan", "Titan");
            document.getElementById("sub_subcategory").options[4] = new Option("Fossil", "Fossil");
            document.getElementById("sub_subcategory").options[5] = new Option("Sonata", "Sonata");
            document.getElementById("sub_subcategory").options[6] = new Option("Others", "Others");
            break;

        case "Personal Care Appliances":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Hair Straightners", "Hair Straightners");
            document.getElementById("sub_subcategory").options[2] = new Option("Hair Dryers", "Hair Dryers");
            document.getElementById("sub_subcategory").options[3] = new Option("Epilators", "Epilators");
            document.getElementById("sub_subcategory").options[4] = new Option("Others", "Others");
            break;

        case "Beauty & Grooming":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Make Up", "Make Up");
            document.getElementById("sub_subcategory").options[2] = new Option("Skin Care", "Skin Care");
            document.getElementById("sub_subcategory").options[3] = new Option("Hair Care", "Hair Care");
            document.getElementById("sub_subcategory").options[4] = new Option("Bath & Spa", "Bath & Spa");
            document.getElementById("sub_subcategory").options[5] = new Option("Deodorants & Perfumes", "Deodorants & Perfumes");
            document.getElementById("sub_subcategory").options[6] = new Option("Others", "Others");
            break;

        case "Jewellery":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Artificial Jewellery", "Artificial Jewellery");
            document.getElementById("sub_subcategory").options[2] = new Option("Silver Jewellery", "Silver Jewellery");
            document.getElementById("sub_subcategory").options[3] = new Option("Precious Jewellery", "Precious Jewellery");
            document.getElementById("sub_subcategory").options[4] = new Option("Coins and Bars", "Coins and Bars");
            document.getElementById("sub_subcategory").options[5] = new Option("Others", "Others");
            break;

        case "Accessories":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Handbags", "Handbags");
            document.getElementById("sub_subcategory").options[2] = new Option("Shoulder Bags", "Shoulder Bags");
            document.getElementById("sub_subcategory").options[3] = new Option("Totes", "Totes");
            document.getElementById("sub_subcategory").options[4] = new Option("Sling bags", "Sling bags");
            document.getElementById("sub_subcategory").options[5] = new Option("Clutches", "Clutches");
            document.getElementById("sub_subcategory").options[6] = new Option("Wallets & Belts", "Wallets & Belts");
            document.getElementById("sub_subcategory").options[7] = new Option("Luggage & Travel", "Luggage & Travel");
            document.getElementById("sub_subcategory").options[8] = new Option("Sunglasses", "Sunglasses");
            document.getElementById("sub_subcategory").options[9] = new Option("Frames", "Frames");
            document.getElementById("sub_subcategory").options[10] = new Option("Others", "Others");
            break;

        case "Others":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Your Own category", "Your Own category");
            break;
        // End Women Section

        //Start Baby & Kids Section

        case "Kid Boys' Clothing":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Polos & T-Shirts", "Polos & T-Shirts");
            document.getElementById("sub_subcategory").options[2] = new Option("Ethnic Wear", "Ethnic Wear");
            document.getElementById("sub_subcategory").options[3] = new Option("Shorts & 3/4ths", "Shorts & 3/4ths");
            document.getElementById("sub_subcategory").options[4] = new Option("Others", "Others");
            break;

        case "Kid Girls' Clothing":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Dresses & Skirts", "Dresses & Skirts");
            document.getElementById("sub_subcategory").options[2] = new Option("Ethnic Wear", "Ethnic Wear");
            document.getElementById("sub_subcategory").options[3] = new Option("T-shirts & Tops", "T-shirts & Tops");
            document.getElementById("sub_subcategory").options[4] = new Option("Others", "Others");
            break;

        case "Baby Boy Clothing":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Body Suits", "Body Suits");
            document.getElementById("sub_subcategory").options[2] = new Option("Polos & T-Shirts", "Polos & T-Shirts");
            document.getElementById("sub_subcategory").options[3] = new Option("Others", "Others");
            break;

        case "Baby Girl Clothing":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Body Suits", "Body Suits");
            document.getElementById("sub_subcategory").options[2] = new Option("Dresses", "Dresses");
            document.getElementById("sub_subcategory").options[3] = new Option("Others", "Others");
            break;

        case "Kids Footwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Kids Foorwear", "Kids Foorwear");
            document.getElementById("sub_subcategory").options[2] = new Option("Others", "Others");
            break;

        case "Boys Footwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Sandals", "Sandals");
            document.getElementById("sub_subcategory").options[2] = new Option("Sport Shoes", "Sport Shoes");
            document.getElementById("sub_subcategory").options[3] = new Option("Others", "Others");
            break;

        case "Girls Footwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Flats & Bellies", "Flats & Bellies");
            document.getElementById("sub_subcategory").options[2] = new Option("Sport Shoes", "Sport Shoes");
            document.getElementById("sub_subcategory").options[3] = new Option("Others", "Others");
            break;

        case "Kids Winter Wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Boys Winter Wear", "Boys Winter Wear");
            document.getElementById("sub_subcategory").options[2] = new Option("Girls Winter Wear", "Girls Winter Wear");
            document.getElementById("sub_subcategory").options[3] = new Option("Infants Winter Wear", "Infants Winter Wear");
            document.getElementById("sub_subcategory").options[4] = new Option("Thermals", "Thermals");
            document.getElementById("sub_subcategory").options[5] = new Option("Kids' Watches", "Kids' Watches");
            document.getElementById("sub_subcategory").options[6] = new Option("Kids' Sunglasses", "Kids' Sunglasses");
            document.getElementById("sub_subcategory").options[7] = new Option("Others", "Others");
            break;

        case "Toys":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Remote Control Toys", "Remote Control Toys");
            document.getElementById("sub_subcategory").options[2] = new Option("Educational Toys", "Educational Toys");
            document.getElementById("sub_subcategory").options[3] = new Option("Soft Toys", "Soft Toys");
            document.getElementById("sub_subcategory").options[4] = new Option("Cars & Die-cast Vehicles", "Cars & Die-cast Vehicles");
            document.getElementById("sub_subcategory").options[5] = new Option("Outdoor Toys", "Outdoor Toys");
            document.getElementById("sub_subcategory").options[6] = new Option("Action Figures", "Action Figures");
            document.getElementById("sub_subcategory").options[7] = new Option("Board Games", "Board Games");
            document.getElementById("sub_subcategory").options[8] = new Option("Musical Toys", "Musical Toys");
            document.getElementById("sub_subcategory").options[9] = new Option("Dolls & Doll Houses", "Dolls & Doll Houses");
            document.getElementById("sub_subcategory").options[10] = new Option("Puzzles", "Puzzles");
            document.getElementById("sub_subcategory").options[11] = new Option("S.T.E.M Toys", "S.T.E.M Toys");
            document.getElementById("sub_subcategory").options[12] = new Option("Helicopter & Drones", "Helicopter & Drones");
            document.getElementById("sub_subcategory").options[13] = new Option("Toy Guns", "Toy Guns");
            document.getElementById("sub_subcategory").options[14] = new Option("Party Supplies", "Party Supplies");
            document.getElementById("sub_subcategory").options[15] = new Option("Others", "Others");
            break;

        case "School Supplies":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("School Bags", "School Bags");
            document.getElementById("sub_subcategory").options[2] = new Option("School Combo Sets", "School Combo Sets");
            document.getElementById("sub_subcategory").options[3] = new Option("Lunch Box", "Lunch Box");
            document.getElementById("sub_subcategory").options[4] = new Option("Others", "Others");
            break;

        case "Baby Care":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Diapers", "Diapers");
            document.getElementById("sub_subcategory").options[2] = new Option("Wipes", "Wipes");
            document.getElementById("sub_subcategory").options[3] = new Option("Diapering & Potty Training", "Diapering & Potty Training");
            document.getElementById("sub_subcategory").options[4] = new Option("Baby Bath, Hair & Skin Care", "Baby Bath, Hair & Skin Care");
            document.getElementById("sub_subcategory").options[5] = new Option("Baby Grooming", "Baby Grooming");
            document.getElementById("sub_subcategory").options[6] = new Option("Baby Bathing Accessories", "Baby Bathing Accessories");
            document.getElementById("sub_subcategory").options[7] = new Option("Baby Gift Sets & Combo", "Baby Gift Sets & Combo");
            document.getElementById("sub_subcategory").options[8] = new Option("Baby Oral Care", "Baby Oral Care");
            document.getElementById("sub_subcategory").options[9] = new Option("Nursing & Breast Feeding", "Nursing & Breast Feeding");
            document.getElementById("sub_subcategory").options[10] = new Option("Baby Food", "Baby Food");
            document.getElementById("sub_subcategory").options[11] = new Option("Baby Feeding Bottle & Accessories", "Baby Feeding Bottle & Accessories");
            document.getElementById("sub_subcategory").options[12] = new Option("Baby Feeding Utensils & Accessories", "Baby Feeding Utensils & Accessories");
            document.getElementById("sub_subcategory").options[13] = new Option("Baby Bedding", "Baby Bedding");
            document.getElementById("sub_subcategory").options[14] = new Option("Baby Gear", "Baby Gear");
            document.getElementById("sub_subcategory").options[15] = new Option("Baby Medical & Health Care", "Baby Medical & Health Care");
            document.getElementById("sub_subcategory").options[16] = new Option("Baby Proofing & Safety", "Baby Proofing & Safety");
            document.getElementById("sub_subcategory").options[17] = new Option("Baby Cleaners & Detergents", "Baby Cleaners & Detergents");
            document.getElementById("sub_subcategory").options[18] = new Option("Others", "Others");
            break;

        case "Others":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Your Own category", "Your Own category");
            break;
        // End Baby & kids Section

        // Start Home & Furniture Section
        case "Kitchen, Cookware & Serveware":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Pans", "Pans");
            document.getElementById("sub_subcategory").options[2] = new Option("Tawas", "Tawas");
            document.getElementById("sub_subcategory").options[3] = new Option("Pressure Cookers", "Pressure Cookers");
            document.getElementById("sub_subcategory").options[4] = new Option("Kitchen tools", "Kitchen tools");
            document.getElementById("sub_subcategory").options[5] = new Option("Gas Stoves", "Gas Stoves");
            document.getElementById("sub_subcategory").options[6] = new Option("Others", "Others");
            break;

        case "Tableware & Dinnerware":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Coffee Mugs", "Coffee Mugs");
            document.getElementById("sub_subcategory").options[2] = new Option("Dinner Set", "Dinner Set");
            document.getElementById("sub_subcategory").options[3] = new Option("Barware", "Barware");
            document.getElementById("sub_subcategory").options[4] = new Option("Others", "Others");
            break;

        case "Kitchen Storage":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Water Bottles", "Water Bottles");
            document.getElementById("sub_subcategory").options[2] = new Option("Lunch Boxes", "Lunch Boxes");
            document.getElementById("sub_subcategory").options[3] = new Option("Flasks", "Flasks");
            document.getElementById("sub_subcategory").options[4] = new Option("Casseroles", "Casseroles");
            document.getElementById("sub_subcategory").options[5] = new Option("Kitchen Containers", "Kitchen Containers");
            document.getElementById("sub_subcategory").options[6] = new Option("Others", "Others");
            break;

        case "Cleaning Supplies":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Cleaning Supplies", "Cleaning Supplies");
            document.getElementById("sub_subcategory").options[2] = new Option("Others", "Others");
            break;

        case "Bed Room Furniture":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Beds", "Beds");
            document.getElementById("sub_subcategory").options[2] = new Option("Mattresses", "Mattresses");
            document.getElementById("sub_subcategory").options[3] = new Option("Wardrobes", "Wardrobes");
            document.getElementById("sub_subcategory").options[4] = new Option("Others", "Others");
            break;

        case "Living Room Furniture":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Sofa", "Sofa");
            document.getElementById("sub_subcategory").options[2] = new Option("Sofa Beds", "Sofa Beds");
            document.getElementById("sub_subcategory").options[3] = new Option("TV Units", "TV Units");
            document.getElementById("sub_subcategory").options[4] = new Option("Dining Tables & Chairs", "Dining Tables & Chairs");
            document.getElementById("sub_subcategory").options[5] = new Option("Coffee Tables", "Coffee Tables");
            document.getElementById("sub_subcategory").options[6] = new Option("Shoe Racks", "Shoe Racks");
            document.getElementById("sub_subcategory").options[7] = new Option("Others", "Others");
            break;

        case "Office & Study Furniture":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Kids Room Furniture", "Kids Room Furniture");
            document.getElementById("sub_subcategory").options[2] = new Option("Others", "Others");
            break;

        case "Furnishing":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Bedsheets", "Bedsheets");
            document.getElementById("sub_subcategory").options[2] = new Option("Curtains", "Curtains");
            document.getElementById("sub_subcategory").options[3] = new Option("Cushions & Pillows", "Cushions & Pillows");
            document.getElementById("sub_subcategory").options[4] = new Option("Blankets", "Blankets");
            document.getElementById("sub_subcategory").options[5] = new Option("Bath Towels", "Bath Towels");
            document.getElementById("sub_subcategory").options[6] = new Option("Kitchen & Table Linen", "Kitchen & Table Linen");
            document.getElementById("sub_subcategory").options[7] = new Option("Floor Coverings", "Floor Coverings");
            document.getElementById("sub_subcategory").options[8] = new Option("Others", "Others");
            break;

        case "Smart Home Automation":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Smart Locks and Home Security Systems", "Smart Locks and Home Security Systems");
            document.getElementById("sub_subcategory").options[2] = new Option("Smart Lighting", "Smart Lighting");
            document.getElementById("sub_subcategory").options[3] = new Option("Smart Kitchen Appliances", "Smart Kitchen Appliances");
            document.getElementById("sub_subcategory").options[4] = new Option("Smart Vacuums", "Smart Vacuums");
            document.getElementById("sub_subcategory").options[5] = new Option("Smart Home Surveillance Cameras", "Smart Home Surveillance Cameras");
            document.getElementById("sub_subcategory").options[6] = new Option("Smart Home Hubs and Controllers", "Smart Home Hubs and Controllers");
            document.getElementById("sub_subcategory").options[7] = new Option("Others", "Others");
            break;

        case "Home Improvement":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Tools & Measuring Equipments", "Tools & Measuring Equipments");
            document.getElementById("sub_subcategory").options[2] = new Option("Home Utilities & Organizers", "Home Utilities & Organizers");
            document.getElementById("sub_subcategory").options[3] = new Option("Lawn & Gardening", "Lawn & Gardening");
            document.getElementById("sub_subcategory").options[4] = new Option("Bathroom & Kitchen Fittings", "Bathroom & Kitchen Fittings");
            document.getElementById("sub_subcategory").options[5] = new Option("Others", "Others");
            break;

        case "Home Decor":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Paintings", "Paintings");
            document.getElementById("sub_subcategory").options[2] = new Option("Clocks", "Clocks");
            document.getElementById("sub_subcategory").options[3] = new Option("Wall Shelves", "Wall Shelves");
            document.getElementById("sub_subcategory").options[4] = new Option("Stickers", "Stickers");
            document.getElementById("sub_subcategory").options[5] = new Option("Showpieces & Figurines", "Showpieces & Figurines");
            document.getElementById("sub_subcategory").options[6] = new Option("Others", "Others");
            break;

        case "Home Lighting":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Bulbs", "Bulbs");
            document.getElementById("sub_subcategory").options[2] = new Option("Wall Lamp", "Wall Lamp");
            document.getElementById("sub_subcategory").options[3] = new Option("Table Lamp", "Table Lamp");
            document.getElementById("sub_subcategory").options[4] = new Option("Ceiling Lamp", "Ceiling Lamp");
            document.getElementById("sub_subcategory").options[5] = new Option("Emergency Lights", "Emergency Lights");
            document.getElementById("sub_subcategory").options[6] = new Option("Others", "Others");
            break;

        case "Pet Supplies":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Dogs", "Dogs");
            document.getElementById("sub_subcategory").options[2] = new Option("Cats", "Cats");
            document.getElementById("sub_subcategory").options[3] = new Option("Fish & Aquatics", "Fish & Aquatics");
            document.getElementById("sub_subcategory").options[4] = new Option("Others", "Others");
            break;

        case "Durability Certified Furniture":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Durable Furniture", "Durable Furniture");
            document.getElementById("sub_subcategory").options[2] = new Option("Others", "Others");
            break;

        case "Others":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Your Own category", "Your Own category");
            break;
        // End Home & Furniture Section

        //Books 

        case "Books":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Entrance Exams", "Entrance Exams");
            document.getElementById("sub_subcategory").options[2] = new Option("Academics", "Academics");
            document.getElementById("sub_subcategory").options[3] = new Option("Non Fiction", "Non Fiction");
            document.getElementById("sub_subcategory").options[4] = new Option("Young Readers", "Young Readers");
            document.getElementById("sub_subcategory").options[5] = new Option("E-Learning", "E-Learning");
            document.getElementById("sub_subcategory").options[6] = new Option("Indian Languages", "Indian Languages");
            document.getElementById("sub_subcategory").options[7] = new Option("Fantasy", "Fantasy");
            document.getElementById("sub_subcategory").options[8] = new Option("Adventure", "Adventure");
            document.getElementById("sub_subcategory").options[9] = new Option("Romance", "Romance");
            document.getElementById("sub_subcategory").options[10] = new Option("Contemporary", "Contemporary");
            document.getElementById("sub_subcategory").options[11] = new Option("Dystopian", "Dystopian");
            document.getElementById("sub_subcategory").options[12] = new Option("Mystery", "Mystery");
            document.getElementById("sub_subcategory").options[13] = new Option("Horror", "Horror");
            document.getElementById("sub_subcategory").options[14] = new Option("Thriller", "Thriller");
            document.getElementById("sub_subcategory").options[15] = new Option("Paranormal", "Paranormal");
            document.getElementById("sub_subcategory").options[16] = new Option("Historical fiction", "Historical fiction");
            document.getElementById("sub_subcategory").options[17] = new Option("Science Fiction", "Science Fiction");
            document.getElementById("sub_subcategory").options[18] = new Option("Memoir", "Memoir");
            document.getElementById("sub_subcategory").options[19] = new Option("Cooking", "Cooking");
            document.getElementById("sub_subcategory").options[20] = new Option("Art", "Art");
            document.getElementById("sub_subcategory").options[21] = new Option("Self-help / Personal", "Self-help / Personal");
            document.getElementById("sub_subcategory").options[22] = new Option("Development", "Development");
            document.getElementById("sub_subcategory").options[23] = new Option("Motivational", "Motivational");
            document.getElementById("sub_subcategory").options[24] = new Option("Health", "Health");
            document.getElementById("sub_subcategory").options[25] = new Option("History", "History");
            document.getElementById("sub_subcategory").options[26] = new Option("Travel", "Travel");
            document.getElementById("sub_subcategory").options[27] = new Option("Guide / How-to", "Guide / How-to");
            document.getElementById("sub_subcategory").options[28] = new Option("Families & Relationships", "Families & Relationships");
            document.getElementById("sub_subcategory").options[29] = new Option("Humor", "Humor");
            document.getElementById("sub_subcategory").options[30] = new Option("Children’s", "Children’s");
            document.getElementById("sub_subcategory").options[31] = new Option("Others", "Others");
            break;


        // End Books

        // Food Essentials

        case "Canned, Jarred, & Pouched Foods":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Soups", "Soups");
            document.getElementById("sub_subcategory").options[2] = new Option("Dried fruit & Nuts", "Dried fruit & Nuts");
            document.getElementById("sub_subcategory").options[3] = new Option("Sauces (tomato, spaghetti, pizza)", "Sauces (tomato, spaghetti, pizza)");
            document.getElementById("sub_subcategory").options[4] = new Option("Pasta", "Pasta");
            document.getElementById("sub_subcategory").options[5] = new Option("Rice", "Rice");
            document.getElementById("sub_subcategory").options[6] = new Option("Oats", "Oats");
            document.getElementById("sub_subcategory").options[7] = new Option("Jams, Spreads and Honey", "Jams, Spreads and Honey");
            document.getElementById("sub_subcategory").options[8] = new Option("Others", "Others");
            break;

        case "Baking & Cooking Supplies":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Flour", "Flour");
            document.getElementById("sub_subcategory").options[2] = new Option("Sugar", "Sugar");
            document.getElementById("sub_subcategory").options[3] = new Option("Tea, Coffee and Beverages", "Tea, Coffee and Beverages");
            document.getElementById("sub_subcategory").options[4] = new Option("Seasonings & spices", "Seasonings & spices");
            document.getElementById("sub_subcategory").options[5] = new Option("Oil for cooking", "Oil for cooking");
            document.getElementById("sub_subcategory").options[6] = new Option("Vinegar", "Vinegar");
            document.getElementById("sub_subcategory").options[7] = new Option("Ketchup", "Ketchup");
            document.getElementById("sub_subcategory").options[8] = new Option("Mustard", "Mustard");
            document.getElementById("sub_subcategory").options[9] = new Option("Mayonnaise", "Mayonnaise");
            document.getElementById("sub_subcategory").options[10] = new Option("Others", "Others");
            break;

        case "Chocolates, Gifts & More":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Chocolates", "Chocolates");
            document.getElementById("sub_subcategory").options[2] = new Option("Gifting Combos", "Gifting Combos");
            document.getElementById("sub_subcategory").options[3] = new Option("Others", "Others");

        case "Others":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Your Own category", "Your Own category");
            break;
        // End Food Essentials

        // Sports , Books & More Section

        case "Sports":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Cricket", "Cricket");
            document.getElementById("sub_subcategory").options[2] = new Option("Badminton", "Badminton");
            document.getElementById("sub_subcategory").options[3] = new Option("Cycling", "Cycling");
            document.getElementById("sub_subcategory").options[4] = new Option("Football", "Football");
            document.getElementById("sub_subcategory").options[5] = new Option("Skating", "Skating");
            document.getElementById("sub_subcategory").options[6] = new Option("Camping & Hiking", "Camping & Hiking");
            document.getElementById("sub_subcategory").options[7] = new Option("Swimming", "Swimming");
            document.getElementById("sub_subcategory").options[8] = new Option("Tennis", "Tennis");
            document.getElementById("sub_subcategory").options[9] = new Option("Chess", "Chess");
            document.getElementById("sub_subcategory").options[10] = new Option("Hockey", "Hockey");
            document.getElementById("sub_subcategory").options[11] = new Option("Basketball", "Basketball");
            document.getElementById("sub_subcategory").options[12] = new Option("Baseball", "Baseball");
            document.getElementById("sub_subcategory").options[13] = new Option("Golf", "Golf");
            document.getElementById("sub_subcategory").options[14] = new Option("Volleyball", "Volleyball");
            document.getElementById("sub_subcategory").options[15] = new Option("Boxing", "Boxing");
            document.getElementById("sub_subcategory").options[16] = new Option("Others", "Others");
            break;




        case "Exercise Fitness":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Cardio Equipment", "Cardio Equipment");
            document.getElementById("sub_subcategory").options[2] = new Option("Home Gyms", "Home Gyms");
            document.getElementById("sub_subcategory").options[3] = new Option("Dumbbells", "Dumbbells");
            document.getElementById("sub_subcategory").options[4] = new Option("Shakers & Sippers", "Shakers & Sippers");
            document.getElementById("sub_subcategory").options[5] = new Option("Yoga Mat", "Yoga Mat");
            document.getElementById("sub_subcategory").options[6] = new Option("Gym Gloves", "Gym Gloves");
            document.getElementById("sub_subcategory").options[7] = new Option("Others", "Others");
            break;

        case "Health & Nutrition":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("All Supplements", "All Supplements");
            document.getElementById("sub_subcategory").options[2] = new Option("Protein Supplements", "Protein Supplements");
            document.getElementById("sub_subcategory").options[3] = new Option("Vitamin Supplements", "Vitamin Supplements");
            document.getElementById("sub_subcategory").options[4] = new Option("Health Drinks", "Health Drinks");
            document.getElementById("sub_subcategory").options[5] = new Option("Ayurvedic Supplements", "Ayurvedic Supplements");
            document.getElementById("sub_subcategory").options[6] = new Option("Others", "Others");
            break;

        case "Stationery":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Pens", "Pens");
            document.getElementById("sub_subcategory").options[2] = new Option("Diaries", "Diaries");
            document.getElementById("sub_subcategory").options[3] = new Option("Card Holders", "Card Holders");
            document.getElementById("sub_subcategory").options[4] = new Option("Desk Organizers", "Desk Organizers");
            document.getElementById("sub_subcategory").options[5] = new Option("Calculators", "Calculators");
            document.getElementById("sub_subcategory").options[6] = new Option("Key Chains", "Key Chains");
            document.getElementById("sub_subcategory").options[7] = new Option("Others", "Others");
            break;



        case "Auto Accessories":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Helmets & Riding Gears", "Helmets & Riding Gears");
            document.getElementById("sub_subcategory").options[2] = new Option("Car Audio/Video", "Car Audio/Video");
            document.getElementById("sub_subcategory").options[3] = new Option("Car Mobile Accessories", "Car Mobile Accessories");
            document.getElementById("sub_subcategory").options[4] = new Option("Car & Bike Care", "Car & Bike Care");
            document.getElementById("sub_subcategory").options[5] = new Option("Vehicle Lubricants", "Vehicle Lubricants");
            document.getElementById("sub_subcategory").options[6] = new Option("Others", "Others");
            break;



        case "Industrial & Scientific tools":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Industrial Measurement Devices", "Industrial Measurement Devices");
            document.getElementById("sub_subcategory").options[2] = new Option("Industrial Testing Devices", "Industrial Testing Devices");
            document.getElementById("sub_subcategory").options[3] = new Option("Lab & Scientific Products", "Lab & Scientific Products");
            document.getElementById("sub_subcategory").options[4] = new Option("Packaging & Shipping Products", "Packaging & Shipping Products");
            document.getElementById("sub_subcategory").options[5] = new Option("Safety Products", "Safety Products");
            document.getElementById("sub_subcategory").options[6] = new Option("Others", "Others");
            break;



        case "Medical Supplies":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Pregnancy and Fertility Kits", "Pregnancy and Fertility Kits");
            document.getElementById("sub_subcategory").options[2] = new Option("Hot Water Bag", "Hot Water Bag");
            document.getElementById("sub_subcategory").options[3] = new Option("Others", "Others");
            break;



        case "Music":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Musical Instruments", "Musical Instruments");
            document.getElementById("sub_subcategory").options[2] = new Option("Music", "Music");
            document.getElementById("sub_subcategory").options[3] = new Option("Movies & Tv shows", "Movies & Tv shows");
            document.getElementById("sub_subcategory").options[4] = new Option("Others", "Others");
            break;

        case "Others":
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Your Own category", "Your Own category");
            break;

        // End Sports Section



        default:
            document.getElementById("sub_subcategory").options[0] = new Option("Select Brand , product", "");
            break;
    }
    return true;
}
// </script>