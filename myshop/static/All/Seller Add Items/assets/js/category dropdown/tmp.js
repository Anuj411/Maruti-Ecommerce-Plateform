// <script language="javascript" type="text/javascript">
function urlRedirectTo(obj) {
    alert('You Are Selected ' + obj + ' Category ');
    //if('wordpress_version1' == obj)
    //window.location = 'https://wordpress.org/download/';
    //if('wordpress_version2' == obj)
    //window.location = 'https://wordpress.org/download/';
}

function dynamicdropdown(listindex) {
    document.getElementById("sub_subcategory").length = 0;
    document.getElementById("sub_subcategory").options[0] = new Option("Select Select Sub- Category", "");
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
            document.getElementById("subcategory").options[2] = new Option("New Launches", "New Launches");
            document.getElementById("subcategory").options[3] = new Option("Smart & Ultra HD", "Smart & Ultra HD");
            document.getElementById("subcategory").options[4] = new Option("Washing Machine", "Washing Machine");
            document.getElementById("subcategory").options[5] = new Option("Air Conditioners", "Air Conditioners");
            document.getElementById("subcategory").options[6] = new Option("Kitchen Appliances", "Kitchen Appliances");
            document.getElementById("subcategory").options[7] = new Option("Healthy Living Appliances", "Healthy Living Appliances");
            document.getElementById("subcategory").options[8] = new Option("Refrigerators", "Refrigerators");
            break;

        case "men":
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            document.getElementById("subcategory").options[1] = new Option("Footwear", "Footwear");
            document.getElementById("subcategory").options[2] = new Option("Men's Grooming", "Men's Grooming");
            document.getElementById("subcategory").options[3] = new Option("Clothing", "Clothing");
            document.getElementById("subcategory").options[4] = new Option("Top wear", "Top wear");
            document.getElementById("subcategory").options[5] = new Option("Bottom wear", "Bottom wear");
            document.getElementById("subcategory").options[6] = new Option("Suits, Blazers & Waistcoats", "Suits, Blazers & Waistcoats");
            document.getElementById("subcategory").options[7] = new Option("Ties, Socks, Caps & More", "Ties, Socks, Caps & More");
            document.getElementById("subcategory").options[8] = new Option("Fabrics", "Fabrics");
            document.getElementById("subcategory").options[9] = new Option("Winter Wear", "Winter Wear");
            document.getElementById("subcategory").options[10] = new Option("Ethnic wear", "Ethnic wear");
            document.getElementById("subcategory").options[11] = new Option("Innerwear & Loungewear", "Innerwear & Loungewear");
            document.getElementById("subcategory").options[12] = new Option("Watches", "Watches");
            document.getElementById("subcategory").options[13] = new Option("Accessories", "Accessories");
            document.getElementById("subcategory").options[14] = new Option("Sports & Fitness Store", "Sports & Fitness Store");
            document.getElementById("subcategory").options[15] = new Option("Smart Watches", "Smart Watches");
            document.getElementById("subcategory").options[16] = new Option("Smart Bands", "Smart Bands");
            document.getElementById("subcategory").options[17] = new Option("Personal Care Appliances", "Personal Care Appliances");
            document.getElementById("subcategory").options[18] = new Option("Featured", "Featured");
            break;
        case "women":
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            document.getElementById("subcategory").options[1] = new Option("Clothing", "Clothing");
            document.getElementById("subcategory").options[2] = new Option("Western Wear", "Western Wear");
            document.getElementById("subcategory").options[3] = new Option("Lingerie & Sleepwear", "Lingerie & Sleepwear");
            document.getElementById("subcategory").options[4] = new Option("Swim & Beachwear", "Swim & Beachwear");
            document.getElementById("subcategory").options[5] = new Option("Party Dresses", "Party Dresses");
            document.getElementById("subcategory").options[6] = new Option("Sports & Gym Wear", "Sports & Gym Wear");
            document.getElementById("subcategory").options[7] = new Option("Winter & Seasonal Wear", "Winter & Seasonal Wear");
            document.getElementById("subcategory").options[8] = new Option("Ethnic Wear", "Ethnic Wear");
            document.getElementById("subcategory").options[9] = new Option("Sports Wear", "Sports Wear");
            document.getElementById("subcategory").options[10] = new Option("International Brands", "International Brands");
            document.getElementById("subcategory").options[11] = new Option("New arrivals !", "New arrivals !");
            document.getElementById("subcategory").options[12] = new Option("Under 499", "Under 499");
            document.getElementById("subcategory").options[13] = new Option("Footwear", "Footwear");
            document.getElementById("subcategory").options[14] = new Option("Sandals", "Sandals");
            document.getElementById("subcategory").options[15] = new Option("Shoes", "Shoes");
            document.getElementById("subcategory").options[16] = new Option("Ballerinas", "Ballerinas");
            document.getElementById("subcategory").options[17] = new Option("Slippers & Flip- Flop's", "Slippers & Flip- Flop's");
            document.getElementById("subcategory").options[18] = new Option("Watches", "Watches");
            document.getElementById("subcategory").options[19] = new Option("Smart Watches", "Smart Watches");
            document.getElementById("subcategory").options[20] = new Option("Personal Care Appliances", "Personal Care Appliances");
            document.getElementById("subcategory").options[21] = new Option("Beauty & Grooming", "Beauty & Grooming");
            document.getElementById("subcategory").options[22] = new Option("Jewellery", "Jewellery");
            document.getElementById("subcategory").options[23] = new Option("Accessories", "Accessories");
            document.getElementById("subcategory").options[24] = new Option("Featured", "Featured");
            document.getElementById("subcategory").options[25] = new Option("Trending today!", "Trending today!");
            break;

        case "baby":
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            document.getElementById("subcategory").options[1] = new Option("Kids Clothing", "Kids Clothing");
            document.getElementById("subcategory").options[2] = new Option("Boys' Clothing", "Boys' Clothing");
            document.getElementById("subcategory").options[3] = new Option("Girls' Clothing", "Girls' Clothing");
            document.getElementById("subcategory").options[4] = new Option("Baby Boy Clothing", "Baby Boy Clothing");
            document.getElementById("subcategory").options[5] = new Option("Baby Girl Clothing", "Baby Girl Clothing");
            document.getElementById("subcategory").options[6] = new Option("Kids Footwear", "Kids Footwear");
            document.getElementById("subcategory").options[7] = new Option("Boys' Footwear", "Boys' Footwear");
            document.getElementById("subcategory").options[8] = new Option("Girls' Footwear", "Girls' Footwear");
            document.getElementById("subcategory").options[9] = new Option("Baby Footwear", "Baby Footwear");
            document.getElementById("subcategory").options[10] = new Option("Character Shoes", "Character Shoes");
            document.getElementById("subcategory").options[11] = new Option("Kids Winter Wear", "Kids Winter Wear");
            document.getElementById("subcategory").options[12] = new Option("Toys", "Toys");
            document.getElementById("subcategory").options[13] = new Option("School Supplies", "School Supplies");
            document.getElementById("subcategory").options[14] = new Option("Baby Care", "Baby Care");
            document.getElementById("subcategory").options[15] = new Option("Featured brands", "Featured brands");
            break;

        case "furniture":
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            document.getElementById("subcategory").options[1] = new Option("Kitchen, Cookware & Serveware", "Kitchen, Cookware & Serveware");
            document.getElementById("subcategory").options[2] = new Option("Tableware & Dinnerware", "Tableware & Dinnerware");
            document.getElementById("subcategory").options[3] = new Option("Kitchen Storage", "Kitchen Storage");
            document.getElementById("subcategory").options[4] = new Option("Cleaning Supplies", "Cleaning Supplies");
            document.getElementById("subcategory").options[5] = new Option("Furniture Top Offers", "Furniture Top Offers");
            document.getElementById("subcategory").options[6] = new Option("Bed Room Furniture", "Bed Room Furniture");
            document.getElementById("subcategory").options[7] = new Option("Living Room Furniture", "Living Room Furniture");
            document.getElementById("subcategory").options[8] = new Option("Office & Study Furniture", "Office & Study Furniture");
            document.getElementById("subcategory").options[9] = new Option("DIY Furniture", "DIY Furniture");
            document.getElementById("subcategory").options[10] = new Option("Furnishing", "Furnishing");
            document.getElementById("subcategory").options[11] = new Option("Smart Home Automation", "Smart Home Automation");
            document.getElementById("subcategory").options[12] = new Option("Home Improvement", "Home Improvement");
            document.getElementById("subcategory").options[13] = new Option("Home Decor", "Home Decor");
            document.getElementById("subcategory").options[14] = new Option("Home Lighting", "Home Lighting");
            document.getElementById("subcategory").options[15] = new Option("Festive Decor & Gifts", "Festive Decor & Gifts");
            document.getElementById("subcategory").options[16] = new Option("Pet Supplies", "Pet Supplies");
            document.getElementById("subcategory").options[17] = new Option("Durability Certified Furniture", "Durability Certified Furniture");
            document.getElementById("subcategory").options[18] = new Option("Featured", "Featured");
            document.getElementById("subcategory").options[19] = new Option("Christmas Store", "Christmas Store");
            document.getElementById("subcategory").options[20] = new Option("Gardening Store", "Gardening Store");
            document.getElementById("subcategory").options[21] = new Option("Perfect Home Store", "Perfect Home Store");
            break;

        case "sports":
            document.getElementById("subcategory").options[0] = new Option("Select Sub-Category", "");
            document.getElementById("subcategory").options[1] = new Option("Sports", "Sports");
            document.getElementById("subcategory").options[2] = new Option("Exercise Fitness", "Exercise Fitness");
            document.getElementById("subcategory").options[3] = new Option("Food Essentials", "Food Essentials");
            document.getElementById("subcategory").options[4] = new Option("Health & Nutrition", "Health & Nutrition");
            document.getElementById("subcategory").options[5] = new Option("Books", "Books");
            document.getElementById("subcategory").options[6] = new Option("Stationery", "Stationery");
            document.getElementById("subcategory").options[7] = new Option("Auto Accessories", "Auto Accessories");
            document.getElementById("subcategory").options[8] = new Option("Industrial & Scientific tools", "Industrial & Scientific tools");
            document.getElementById("subcategory").options[9] = new Option("Medical Supplies", "Medical Supplies");
            document.getElementById("subcategory").options[10] = new Option("Music", "Music");
            document.getElementById("subcategory").options[11] = new Option("Gaming", "Gaming");
            document.getElementById("subcategory").options[12] = new Option("Grocery (Only in Select Cities)", "Grocery (Only in Select Cities)");
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
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Mi", "Mi");
            document.getElementById("sub_subcategory").options[2] = new Option("Realme", "Realme");
            document.getElementById("sub_subcategory").options[3] = new Option("Samsung", "Samsung");
            document.getElementById("sub_subcategory").options[4] = new Option("Infinix", "Infinix");
            document.getElementById("sub_subcategory").options[5] = new Option("OPPO", "OPPO");
            document.getElementById("sub_subcategory").options[6] = new Option("Apple", "Apple");
            document.getElementById("sub_subcategory").options[7] = new Option("Vivo", "Vivo");
            document.getElementById("sub_subcategory").options[8] = new Option("Honor", "Honor");
            document.getElementById("sub_subcategory").options[9] = new Option("Asus", "Asus");
            document.getElementById("sub_subcategory").options[10] = new Option("Poco X2", "Poco X2");
            document.getElementById("sub_subcategory").options[11] = new Option("realme Narzo 10", "realme Narzo 10");
            document.getElementById("sub_subcategory").options[12] = new Option("Infinix Hot 9", "Infinix Hot 9");
            document.getElementById("sub_subcategory").options[13] = new Option("iPhone SE", "iPhone SE");
            document.getElementById("sub_subcategory").options[14] = new Option("Motorola razr", "Motorola razr");
            document.getElementById("sub_subcategory").options[15] = new Option("realme Narzo 10A", "realme Narzo 10A");
            document.getElementById("sub_subcategory").options[16] = new Option("Motorola g8 power lite", "Sports Shoes");
            break;


        case "Tablets":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Apple iPads", "Apple iPads");
            break;


        case "Mobile Accessories":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Mobile Cases", "Mobile Cases");
            document.getElementById("sub_subcategory").options[2] = new Option("Headphones & Headsets", "Headphones & Headsets");
            document.getElementById("sub_subcategory").options[3] = new Option("Power Banks", "Power Banks");
            document.getElementById("sub_subcategory").options[4] = new Option("Screenguards", "Screenguards");
            document.getElementById("sub_subcategory").options[5] = new Option("Memory Cards", "Memory Cards");
            document.getElementById("sub_subcategory").options[6] = new Option("Smart Headphones", "Smart Headphones");
            document.getElementById("sub_subcategory").options[7] = new Option("Mobile Cables", "Mobile Cables");
            document.getElementById("sub_subcategory").options[8] = new Option("Mobile Chargers", "Mobile Chargers");
            document.getElementById("sub_subcategory").options[9] = new Option("Mobile Holders", "Mobile Holders");
            break;


        case "Smart Wearable Tech":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Smart Watches", "Smart Watches");
            document.getElementById("sub_subcategory").options[2] = new Option("Smart Glasses (VR)", "Smart Glasses (VR)");
            document.getElementById("sub_subcategory").options[3] = new Option("Smart Bands", "Smart Bands");
            break;


        case "Health Care Appliances":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Bp Monitors", "Bp Monitors");
            document.getElementById("sub_subcategory").options[2] = new Option("Weighing Scale", "Weighing Scale");
            break;


        case "Laptops":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
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
            document.getElementById("sub_subcategory").options[9] = new Option("Avita Laptops", "Avita Laptops");
            document.getElementById("sub_subcategory").options[10] = new Option("Razer Laptops", "Razer Laptops");
            document.getElementById("sub_subcategory").options[11] = new Option("Lava Laptops", "Lava Laptops");
            break;


        case "Desktop PCs":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;


        case "Gaming & Accessories":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Gaming Laptops", "Gaming Laptops");
            document.getElementById("sub_subcategory").options[2] = new Option("Gaming PCs", "Gaming PCs");
            break;


        case "Computer Accessories":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("External Hard Disks", "External Hard Disks");
            document.getElementById("sub_subcategory").options[2] = new Option("Pendrives", "Pendrives");
            document.getElementById("sub_subcategory").options[3] = new Option("Laptop Skins & Decals", "Laptop Skins & Decals");
            document.getElementById("sub_subcategory").options[4] = new Option("Laptop Bags", "Laptop Bags");
            document.getElementById("sub_subcategory").options[5] = new Option("Mouse", "Mouse");
            break;


        case "Computer Peripherals":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Printers & Ink Cartridges", "Printers & Ink Cartridges");
            document.getElementById("sub_subcategory").options[2] = new Option("Monitors", "Monitors");
            break;


        case "Speakers":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Home Audio Speakers", "Home Audio Speakers");
            document.getElementById("sub_subcategory").options[2] = new Option("Home Theatres", "Home Theatres");
            document.getElementById("sub_subcategory").options[3] = new Option("Soundbars", "Soundbars");
            document.getElementById("sub_subcategory").options[4] = new Option("Bluetooth Speakers", "Bluetooth Speakers");
            document.getElementById("sub_subcategory").options[5] = new Option("DTH Set Top Box", "DTH Set Top Box");
            break;


        case "Smart Home Automation":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Google Nest", "Google Nest");
            break;


        case "Camera":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("DSLR & Mirrorless", "DSLR & Mirrorless");
            document.getElementById("sub_subcategory").options[2] = new Option("Compact & Bridge Cameras", "Compact & Bridge Cameras");
            document.getElementById("sub_subcategory").options[3] = new Option("Sports & Action", "Sports & Action");
            break;


        case "Camera Accessories":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Lens", "Lens");
            document.getElementById("sub_subcategory").options[2] = new Option("Tripods", "Tripods");
            break;


        case "Network Components":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Routers", "Routers");
            break;


        case "Others":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Your Own category", "Your Own category");
            break;

            // End Electronics Section

            // Start  Tv & appliances Section
        case "Television":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "New Launches":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Smart & Ultra HD":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Top Brands", "Top Brands");
            document.getElementById("sub_subcategory").options[2] = new Option("Mi", "Mi");
            document.getElementById("sub_subcategory").options[3] = new Option("Vu", "Vu");
            document.getElementById("sub_subcategory").options[4] = new Option("Thomson", "Thomson");
            document.getElementById("sub_subcategory").options[5] = new Option("Samsung", "Samsung");
            document.getElementById("sub_subcategory").options[6] = new Option("iFFALCON by TCL", "iFFALCON by TCL");
            document.getElementById("sub_subcategory").options[7] = new Option("Nokia", "Nokia");
            document.getElementById("sub_subcategory").options[8] = new Option("LG", "LG");
            document.getElementById("sub_subcategory").options[9] = new Option("BPL", "BPL");
            document.getElementById("sub_subcategory").options[10] = new Option("Motorola", "Motorola");
            document.getElementById("sub_subcategory").options[11] = new Option("Shop by Screen Size", "Shop by Screen Size");
            document.getElementById("sub_subcategory").options[12] = new Option("24 & below", "24 & below");
            document.getElementById("sub_subcategory").options[13] = new Option("28 - 32", "28 - 32");
            document.getElementById("sub_subcategory").options[14] = new Option("39 - 43", "39 - 43");
            document.getElementById("sub_subcategory").options[15] = new Option("48 - 55", "48 - 55");
            document.getElementById("sub_subcategory").options[16] = new Option("60 & above", "60 & above");
            break;

        case "Washing Machine":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Fully Automatic Front Load", "Fully Automatic Front Load");
            document.getElementById("sub_subcategory").options[2] = new Option("Semi Automatic Top Load", "Semi Automatic Top Load");
            document.getElementById("sub_subcategory").options[3] = new Option("Fully Automatic Top Load", "Fully Automatic Top Load");
            break;

        case "Air Conditioners":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Inverter AC", "Inverter AC");
            document.getElementById("sub_subcategory").options[2] = new Option("Split ACs", "Split ACs");
            document.getElementById("sub_subcategory").options[3] = new Option("Window ACs", "Window ACs");
            document.getElementById("sub_subcategory").options[4] = new Option("Shop By Brand", "Shop By Brand");
            document.getElementById("sub_subcategory").options[5] = new Option("LG", "LG");
            document.getElementById("sub_subcategory").options[6] = new Option("Hitachi", "Hitachi");
            document.getElementById("sub_subcategory").options[7] = new Option("Carrier", "Carrier");
            document.getElementById("sub_subcategory").options[8] = new Option("Refrigerators", "Refrigerators");
            document.getElementById("sub_subcategory").options[9] = new Option("Single Door", "Single Door");
            document.getElementById("sub_subcategory").options[10] = new Option("Double Door", "Double Door");
            document.getElementById("sub_subcategory").options[11] = new Option("Triple door", "Triple door");
            document.getElementById("sub_subcategory").options[12] = new Option("Side by Side", "Side by Side");
            document.getElementById("sub_subcategory").options[13] = new Option("Convertible", "Convertible");
            break;

        case "Kitchen Appliances":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
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
            break;

        case "Healthy Living Appliances":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Small Home Appliances", "Small Home Appliances");
            document.getElementById("sub_subcategory").options[2] = new Option("Irons", "Irons");
            document.getElementById("sub_subcategory").options[3] = new Option("Water Purifiers", "Water Purifiers");
            document.getElementById("sub_subcategory").options[4] = new Option("Fans", "Fans");
            document.getElementById("sub_subcategory").options[5] = new Option("Air Coolers", "Air Coolers");
            document.getElementById("sub_subcategory").options[6] = new Option("Inverters", "Inverters");
            document.getElementById("sub_subcategory").options[7] = new Option("Vacuum Cleaners", "Vacuum Cleaners");
            document.getElementById("sub_subcategory").options[8] = new Option("Sewing Machines", "Sewing Machines");
            document.getElementById("sub_subcategory").options[9] = new Option("Voltage Stabilizers", "Voltage Stabilizers");
            document.getElementById("sub_subcategory").options[10] = new Option("Water Geysers", "Water Geysers");
            document.getElementById("sub_subcategory").options[11] = new Option("Immersion Rods", "Immersion Rods");
            document.getElementById("sub_subcategory").options[12] = new Option("Top Brands", "Top Brands");
            document.getElementById("sub_subcategory").options[13] = new Option("Livpure", "Livpure");
            document.getElementById("sub_subcategory").options[14] = new Option("Philips", "Philips");
            document.getElementById("sub_subcategory").options[15] = new Option("Bajaj", "Bajaj");
            document.getElementById("sub_subcategory").options[16] = new Option("IFB", "IFB");
            document.getElementById("sub_subcategory").options[17] = new Option("Eureka Forbes", "Eureka Forbes");
            document.getElementById("sub_subcategory").options[18] = new Option("Kaff", "Kaff");
            document.getElementById("sub_subcategory").options[19] = new Option("Buying Guides", "Buying Guides");
            document.getElementById("sub_subcategory").options[20] = new Option("Televisions", "Televisions");
            document.getElementById("sub_subcategory").options[21] = new Option("Washing Machines", "Washing Machines");
            break;

        case "Refrigerators":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Air Conditioners", "Air Conditioners");
            document.getElementById("sub_subcategory").options[2] = new Option("Water Purifiers", "Water Purifiers");
            document.getElementById("sub_subcategory").options[3] = new Option("Air Purifiers", "Air Purifiers");
            document.getElementById("sub_subcategory").options[4] = new Option("Chimneys", "Chimneys");
            document.getElementById("sub_subcategory").options[5] = new Option("Water Geysers", "Water Geysers");
            document.getElementById("sub_subcategory").options[6] = new Option("New Launches", "New Launches");
            document.getElementById("sub_subcategory").options[7] = new Option("Coocaa Smart TVs", "Coocaa Smart TVs");
            document.getElementById("sub_subcategory").options[8] = new Option("Nokia (55) 4K Android TV", "Nokia (55) 4K Android TV");
            document.getElementById("sub_subcategory").options[9] = new Option("Mi (32) 4A Pro Android TV", "Mi (32) 4A Pro Android TV");
            document.getElementById("sub_subcategory").options[10] = new Option("MarQ (43) FHD Smart TV", "MarQ (43) FHD Smart TV");
            document.getElementById("sub_subcategory").options[11] = new Option("LG Refrigerators", "LG Refrigerators");
            document.getElementById("sub_subcategory").options[12] = new Option("Thomson (40) 4K Smart TV", "Thomson (40) 4K Smart TV");
            document.getElementById("sub_subcategory").options[13] = new Option("Whirlpool Refrigerators", "Whirlpool Refrigerators");
            document.getElementById("sub_subcategory").options[14] = new Option("Kodak (22) | (32) LED TVs", "Kodak (22) | (32) LED TVs");
            break;
            // End Tv & Appliance Section

            // Start Men Sectiom
        case "Footwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , Product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Casual Shoes", "Casual Shoes");
            document.getElementById("sub_subcategory").options[2] = new Option("Formal Shoes", "Formal Shoes");
            document.getElementById("sub_subcategory").options[3] = new Option("Sports Shoes", "Sports Shoes");
            document.getElementById("sub_subcategory").options[4] = new Option("Sandals & Floaters", "Sandals & Floaters");
            document.getElementById("sub_subcategory").options[5] = new Option("Flip- Flops", "Flip- Flops");
            document.getElementById("sub_subcategory").options[6] = new Option("Loafers", "Loafers");
            document.getElementById("sub_subcategory").options[7] = new Option("Boots", "Boots");
            document.getElementById("sub_subcategory").options[8] = new Option("Running Shoes", "Running Shoes");
            document.getElementById("sub_subcategory").options[9] = new Option("Sneakers", "Sneakers");
            break;

        case "Men's Grooming":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , Product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Deodorants", "Deodorants");
            document.getElementById("sub_subcategory").options[2] = new Option("Perfumes", "Perfumes");
            document.getElementById("sub_subcategory").options[3] = new Option("Beard Care & Grooming", "Beard Care & Grooming");
            document.getElementById("sub_subcategory").options[4] = new Option("Shaving & Aftershave", "Shaving & Aftershave");
            document.getElementById("sub_subcategory").options[5] = new Option("Sexual Wellness", "Sexual Wellness");
            break;

        case "Clothing":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , Product", "");
            break;

        case "Top wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("T-Shirts", "T-Shirts");
            document.getElementById("sub_subcategory").options[2] = new Option("Formal Shirts", "Formal Shirts");
            document.getElementById("sub_subcategory").options[3] = new Option("Casual Shirts", "Casual Shirts");
            break;

        case "Bottom wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Jeans", "Jeans");
            document.getElementById("sub_subcategory").options[2] = new Option("Casual Trousers", "Casual Trousers");
            document.getElementById("sub_subcategory").options[3] = new Option("Formal Trousers", "Formal Trousers");
            document.getElementById("sub_subcategory").options[4] = new Option("Track pants", "Track pants");
            document.getElementById("sub_subcategory").options[5] = new Option("Shorts", "Shorts");
            document.getElementById("sub_subcategory").options[6] = new Option("Cargos", "Cargos");
            document.getElementById("sub_subcategory").options[7] = new Option("Three Fourths", "Three Fourths");
            break;

        case "Suits, Blazers & Waistcoats":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Ties, Socks, Caps & More":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Fabrics":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Winter Wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Sweatshirts", "Sweatshirts");
            document.getElementById("sub_subcategory").options[2] = new Option("Jackets", "Jackets");
            document.getElementById("sub_subcategory").options[3] = new Option("Sweater", "Sweater");
            document.getElementById("sub_subcategory").options[4] = new Option("Tracksuits", "Tracksuits");
            break;

        case "Ethnic wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Kurta", "Kurta");
            document.getElementById("sub_subcategory").options[2] = new Option("Ethnic Sets", "Ethnic Sets");
            document.getElementById("sub_subcategory").options[3] = new Option("Sherwanis", "Sherwanis");
            document.getElementById("sub_subcategory").options[4] = new Option("Ethnic Pyjama", "Ethnic Pyjama");
            document.getElementById("sub_subcategory").options[5] = new Option("Dhoti", "Dhoti");
            document.getElementById("sub_subcategory").options[6] = new Option("Lungi", "Lungi");
            break;

        case "Innerwear & Loungewear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Briefs & Trunks", "Briefs & Trunks");
            document.getElementById("sub_subcategory").options[2] = new Option("Vests", "Vests");
            document.getElementById("sub_subcategory").options[3] = new Option("Boxers", "Boxers");
            document.getElementById("sub_subcategory").options[4] = new Option("Pyjamas and Lounge Pants", "Pyjamas and Lounge Pants");
            document.getElementById("sub_subcategory").options[5] = new Option("Thermals", "Thermals");
            document.getElementById("sub_subcategory").options[6] = new Option("Night Suits", "Night Suits");
            document.getElementById("sub_subcategory").options[7] = new Option("Raincoats & Windcheaters", "Raincoats & Windcheaters");
            break;

        case "Watches":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Fastrack", "Fastrack");
            document.getElementById("sub_subcategory").options[2] = new Option("Casio", "Casio");
            document.getElementById("sub_subcategory").options[3] = new Option("Titan", "Titan");
            document.getElementById("sub_subcategory").options[4] = new Option("Fossil", "Fossil");
            document.getElementById("sub_subcategory").options[5] = new Option("Sonata", "Sonata");
            break;

        case "Accessories":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Backpacks", "Backpacks");
            document.getElementById("sub_subcategory").options[2] = new Option("Wallets", "Wallets");
            document.getElementById("sub_subcategory").options[3] = new Option("Belts", "Belts");
            document.getElementById("sub_subcategory").options[4] = new Option("Sunglasses", "Sunglasses");
            document.getElementById("sub_subcategory").options[5] = new Option("Luggage & Travel", "Luggage & Travel");
            document.getElementById("sub_subcategory").options[6] = new Option("Frames", "Frames");
            document.getElementById("sub_subcategory").options[7] = new Option("Jewellery", "Jewellery");
            break;

        case "Sports & Fitness Store":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Smart Watches":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Smart Bands":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Personal Care Appliances":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Trimmers", "Trimmers");
            document.getElementById("sub_subcategory").options[2] = new Option("Shavers", "Shavers");
            document.getElementById("sub_subcategory").options[3] = new Option("Grooming Kits", "Grooming Kits");
            break;

        case "Featured":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Footwear Club", "Footwear Club");
            document.getElementById("sub_subcategory").options[2] = new Option("Bags & Wallet", "Bags & Wallet");
            document.getElementById("sub_subcategory").options[3] = new Option("T-Shirt Store", "T-Shirt Store");
            document.getElementById("sub_subcategory").options[4] = new Option("Adidas", "Adidas");
            document.getElementById("sub_subcategory").options[5] = new Option("Beardo", "Beardo");
            document.getElementById("sub_subcategory").options[6] = new Option("Reebok", "Reebok");
            document.getElementById("sub_subcategory").options[7] = new Option("Skechers", "Skechers");
            document.getElementById("sub_subcategory").options[8] = new Option("Nike", "Nike");
            break;
            // End Men Section


            // Start Women Section

        case "Clothing":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Western Wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Tops, T-Shirts & Shirts", "Tops, T-Shirts & Shirts");
            document.getElementById("sub_subcategory").options[2] = new Option("Dresses", "Dresses");
            document.getElementById("sub_subcategory").options[3] = new Option("Jeans", "Jeans");
            document.getElementById("sub_subcategory").options[4] = new Option("Shorts", "Shorts");
            document.getElementById("sub_subcategory").options[5] = new Option("Skirts", "Skirts");
            document.getElementById("sub_subcategory").options[6] = new Option("Leggings & Jeggings", "Leggings & Jeggings");
            document.getElementById("sub_subcategory").options[7] = new Option("Trousers & Capris", "Trousers & Capris");
            break;

        case "Lingerie & Sleepwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Bras", "Bras");
            document.getElementById("sub_subcategory").options[2] = new Option("Panties", "Panties");
            document.getElementById("sub_subcategory").options[3] = new Option("Lingerie Sets", "Lingerie Sets");
            document.getElementById("sub_subcategory").options[4] = new Option("Night Dresses & Nighties", "Night Dresses & Nighties");
            document.getElementById("sub_subcategory").options[5] = new Option("Shapewear", "Shapewear");
            document.getElementById("sub_subcategory").options[6] = new Option("Camisoles & Slips", "Camisoles & Slips");
            break;

        case "Swim & Beachwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Party Dresses":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Sports & Gym Wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Winter & Seasonal Wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Ethnic Wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Sarees", "Sarees");
            document.getElementById("sub_subcategory").options[2] = new Option("Kurtas & Kurtis", "Kurtas & Kurtis");
            document.getElementById("sub_subcategory").options[3] = new Option("Dress Material", "Dress Material");
            document.getElementById("sub_subcategory").options[4] = new Option("Lehenga Choli", "Lehenga Choli");
            document.getElementById("sub_subcategory").options[5] = new Option("Blouse", "Blouse");
            document.getElementById("sub_subcategory").options[6] = new Option("Anarkali Suits", "Anarkali Suits");
            document.getElementById("sub_subcategory").options[7] = new Option("Petticoats", "Petticoats");
            document.getElementById("sub_subcategory").options[8] = new Option("Abhayas & Burqas", "Abhayas & Burqas");
            document.getElementById("sub_subcategory").options[9] = new Option("Dupattas", "Dupattas");
            break;

        case "Sports Wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "International Brands":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "New arrivals !":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Under 499":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Footwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Sandals":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Flats", "Flats");
            document.getElementById("sub_subcategory").options[2] = new Option("Heels", "Heels");
            document.getElementById("sub_subcategory").options[3] = new Option("Wedges", "Wedges");
            break;

        case "Shoes":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Sports Shoes", "Sports Shoes");
            document.getElementById("sub_subcategory").options[2] = new Option("Casual Shoes", "Casual Shoes");
            document.getElementById("sub_subcategory").options[3] = new Option("Boots", "Boots");
            break;

        case "Slippers & Flip- Flop's":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Watches":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Smart Watches":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Personal Care Appliances":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Hair Straightners", "Hair Straightners");
            document.getElementById("sub_subcategory").options[2] = new Option("Hair Dryers", "Hair Dryers");
            document.getElementById("sub_subcategory").options[3] = new Option("Epilators", "Epilators");
            break;

        case "Beauty & Grooming":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Make Up", "Make Up");
            document.getElementById("sub_subcategory").options[2] = new Option("Skin Care", "Skin Care");
            document.getElementById("sub_subcategory").options[3] = new Option("Hair Care", "Hair Care");
            document.getElementById("sub_subcategory").options[4] = new Option("Bath & Spa", "Bath & Spa");
            document.getElementById("sub_subcategory").options[5] = new Option("Deodorants & Perfumes", "Deodorants & Perfumes");
            break;

        case "Jewellery":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Artificial Jewellery", "Artificial Jewellery");
            document.getElementById("sub_subcategory").options[2] = new Option("Silver Jewellery", "Silver Jewellery");
            document.getElementById("sub_subcategory").options[3] = new Option("Precious Jewellery", "Precious Jewellery");
            document.getElementById("sub_subcategory").options[4] = new Option("Coins and Bars", "Coins and Bars");
            break;

        case "Accessories":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Handbags", "Handbags");
            document.getElementById("sub_subcategory").options[2] = new Option("Shoulder Bags", "Shoulder Bags");
            document.getElementById("sub_subcategory").options[3] = new Option("Totes", "Totes");
            document.getElementById("sub_subcategory").options[4] = new Option("Sling bags", "Sling bags");
            document.getElementById("sub_subcategory").options[5] = new Option("Clutches", "Clutches");
            document.getElementById("sub_subcategory").options[6] = new Option("Wallets & Belts", "Wallets & Belts");
            document.getElementById("sub_subcategory").options[7] = new Option("Luggage & Travel", "Luggage & Travel");
            document.getElementById("sub_subcategory").options[8] = new Option("Sunglasses", "Sunglasses");
            document.getElementById("sub_subcategory").options[9] = new Option("Frames", "Frames");
            break;

        case "Featured":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Forever 21", "Forever 21");
            document.getElementById("sub_subcategory").options[2] = new Option("Accessorize", "Accessorize");
            document.getElementById("sub_subcategory").options[3] = new Option("Pantaloons", "Pantaloons");
            document.getElementById("sub_subcategory").options[4] = new Option("Chemistry", "Chemistry");
            document.getElementById("sub_subcategory").options[5] = new Option("W", "W");
            document.getElementById("sub_subcategory").options[6] = new Option("Lakme", "Lakme");
            document.getElementById("sub_subcategory").options[7] = new Option("Nivea", "Nivea");
            document.getElementById("sub_subcategory").options[8] = new Option("Catwalk", "Catwalk");
            document.getElementById("sub_subcategory").options[9] = new Option("Titan-Raga", "Titan-Raga");
            document.getElementById("sub_subcategory").options[10] = new Option("Fastrack", "Fastrack");
            document.getElementById("sub_subcategory").options[11] = new Option("Divastri", "Divastri");
            document.getElementById("sub_subcategory").options[12] = new Option("Rare Roots", "Rare Roots");
            document.getElementById("sub_subcategory").options[13] = new Option("Anmi", "Anmi");
            document.getElementById("sub_subcategory").options[14] = new Option("Coins & Bars", "Coins & Bars");
            document.getElementById("sub_subcategory").options[15] = new Option("Crocs", "Crocs");
            break;

        case "Trending today!":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Ruffles & Frills", "Ruffles & Frills");
            document.getElementById("sub_subcategory").options[2] = new Option("Pastel Kurtas & Kurtis", "Pastel Kurtas & Kurtis");
            document.getElementById("sub_subcategory").options[3] = new Option("Designer Net Sarees", "Designer Net Sarees");
            break;
            // End Women Section

            //Start Baby & Kids Section
        case "Kids Clothing":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Boys' Clothing":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Polos & T-Shirts", "Polos & T-Shirts");
            document.getElementById("sub_subcategory").options[2] = new Option("Ethnic Wear", "Ethnic Wear");
            document.getElementById("sub_subcategory").options[3] = new Option("Shorts & 3/4ths", "Shorts & 3/4ths");
            break;

        case "Girls' Clothing":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Dresses & Skirts", "Dresses & Skirts");
            document.getElementById("sub_subcategory").options[2] = new Option("Ethnic Wear", "Ethnic Wear");
            document.getElementById("sub_subcategory").options[3] = new Option("T-shirts & Tops", "T-shirts & Tops");
            break;

        case "Baby Boy Clothing":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Body Suits", "Body Suits");
            document.getElementById("sub_subcategory").options[2] = new Option("Polos & T-Shirts", "Polos & T-Shirts");
            break;

        case "Baby Girl Clothing":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Body Suits", "Body Suits");
            document.getElementById("sub_subcategory").options[2] = new Option("Dresses", "Dresses");
            break;

        case "Kids Footwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Boys' Footwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Sandals", "Sandals");
            document.getElementById("sub_subcategory").options[2] = new Option("Sport Shoes", "Sport Shoes");
            break;

        case "Girls' Footwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Flats & Bellies", "Flats & Bellies");
            document.getElementById("sub_subcategory").options[2] = new Option("Sport Shoes", "Sport Shoes");
            break;

        case "Baby Footwear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Character Shoes":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            break;

        case "Kids Winter Wear":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Boys Winter Wear", "Boys Winter Wear");
            document.getElementById("sub_subcategory").options[2] = new Option("Girls Winter Wear", "Girls Winter Wear");
            document.getElementById("sub_subcategory").options[3] = new Option("Infants Winter Wear", "Infants Winter Wear");
            document.getElementById("sub_subcategory").options[4] = new Option("Thermals", "Thermals");
            document.getElementById("sub_subcategory").options[5] = new Option("Kids' Watches", "Kids' Watches");
            document.getElementById("sub_subcategory").options[6] = new Option("Kids' Sunglasses", "Kids' Sunglasses");
            break;

        case "Toys":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
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
            break;

        case "School Supplies":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("School Bags", "School Bags");
            document.getElementById("sub_subcategory").options[2] = new Option("School Combo Sets", "School Combo Sets");
            document.getElementById("sub_subcategory").options[3] = new Option("Lunch Box", "Lunch Box");
            break;

        case "Baby Care":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
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
            break;

        case "Featured brands":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Miss & Chief", "Miss & Chief");
            document.getElementById("sub_subcategory").options[2] = new Option("Barbie", "Barbie");
            document.getElementById("sub_subcategory").options[3] = new Option("Disney", "Disney");
            document.getElementById("sub_subcategory").options[4] = new Option("United Colors of Benetton", "United Colors of Benetton");
            document.getElementById("sub_subcategory").options[5] = new Option("The Children's Place", "The Children's Place");
            document.getElementById("sub_subcategory").options[6] = new Option("US Polo", "US Polo");
            document.getElementById("sub_subcategory").options[7] = new Option("Flying Machine", "Flying Machine");
            document.getElementById("sub_subcategory").options[8] = new Option("Crocs", "Crocs");
            document.getElementById("sub_subcategory").options[9] = new Option("Puma", "Puma");
            document.getElementById("sub_subcategory").options[10] = new Option("Funskool", "Funskool");
            document.getElementById("sub_subcategory").options[11] = new Option("Lego", "Lego");
            document.getElementById("sub_subcategory").options[12] = new Option("Luvlap", "Luvlap");
            document.getElementById("sub_subcategory").options[13] = new Option("Mamy Poko", "Mamy Poko");
            document.getElementById("sub_subcategory").options[14] = new Option("Mee Mee", "Mee Mee");
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
            break;

        case "Tableware & Dinnerware":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Coffee Mugs", "Coffee Mugs");
            document.getElementById("sub_subcategory").options[2] = new Option("Dinner Set", "Dinner Set");
            document.getElementById("sub_subcategory").options[3] = new Option("Barware", "Barware");
            break;

        case "Kitchen Storage":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Water Bottles", "Water Bottles");
            document.getElementById("sub_subcategory").options[2] = new Option("Lunch Boxes", "Lunch Boxes");
            document.getElementById("sub_subcategory").options[3] = new Option("Flasks", "Flasks");
            document.getElementById("sub_subcategory").options[4] = new Option("Casseroles", "Casseroles");
            document.getElementById("sub_subcategory").options[5] = new Option("Kitchen Containers", "Kitchen Containers");
            break;

        case "Cleaning Supplies":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            break;

        case "Furniture Top Offers":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            break;

        case "Bed Room Furniture":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Beds", "Beds");
            document.getElementById("sub_subcategory").options[2] = new Option("Mattresses", "Mattresses");
            document.getElementById("sub_subcategory").options[3] = new Option("Wardrobes", "Wardrobes");
            break;

        case "Living Room Furniture":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Sofa", "Sofa");
            document.getElementById("sub_subcategory").options[2] = new Option("Sofa Beds", "Sofa Beds");
            document.getElementById("sub_subcategory").options[3] = new Option("TV Units", "TV Units");
            document.getElementById("sub_subcategory").options[4] = new Option("Dining Tables & Chairs", "Dining Tables & Chairs");
            document.getElementById("sub_subcategory").options[5] = new Option("Coffee Tables", "Coffee Tables");
            document.getElementById("sub_subcategory").options[6] = new Option("Shoe Racks", "Shoe Racks");
            break;

        case "Office & Study Furniture":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Kids Room Furniture", "Kids Room Furniture");
            break;

        case "DIY Furniture":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Bean Bags", "Bean Bags");
            document.getElementById("sub_subcategory").options[2] = new Option("Collapsible Wardrobes", "Collapsible Wardrobes");
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
            break;

        case "Smart Home Automation":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Smart Security System", "Smart Security System");
            document.getElementById("sub_subcategory").options[2] = new Option("Smart Door Locks", "Smart Door Locks");
            break;

        case "Home Improvement":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Tools & Measuring Equipments", "Tools & Measuring Equipments");
            document.getElementById("sub_subcategory").options[2] = new Option("Home Utilities & Organizers", "Home Utilities & Organizers");
            document.getElementById("sub_subcategory").options[3] = new Option("Lawn & Gardening", "Lawn & Gardening");
            document.getElementById("sub_subcategory").options[4] = new Option("Bathroom & Kitchen Fittings", "Bathroom & Kitchen Fittings");
            break;

        case "Home Decor":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Paintings", "Paintings");
            document.getElementById("sub_subcategory").options[2] = new Option("Clocks", "Clocks");
            document.getElementById("sub_subcategory").options[3] = new Option("Wall Shelves", "Wall Shelves");
            document.getElementById("sub_subcategory").options[4] = new Option("Stickers", "Stickers");
            document.getElementById("sub_subcategory").options[5] = new Option("Showpieces & Figurines", "Showpieces & Figurines");
            break;

        case "Home Lighting":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Bulbs", "Bulbs");
            document.getElementById("sub_subcategory").options[2] = new Option("Wall Lamp", "Wall Lamp");
            document.getElementById("sub_subcategory").options[3] = new Option("Table Lamp", "Table Lamp");
            document.getElementById("sub_subcategory").options[4] = new Option("Ceiling Lamp", "Ceiling Lamp");
            document.getElementById("sub_subcategory").options[5] = new Option("Emergency Lights", "Emergency Lights");
            break;

        case "Festive Decor & Gifts":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            break;

        case "Pet Supplies":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Dogs", "Dogs");
            document.getElementById("sub_subcategory").options[2] = new Option("Cats", "Cats");
            document.getElementById("sub_subcategory").options[3] = new Option("Fish & Aquatics", "Fish & Aquatics");
            break;

        case "Durability Certified Furniture":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            break;

        case "Featured":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            break;

        case "Christmas Store":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Mugs Store", "Mugs Store");
            break;

        case "Gardening Store":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Stainless Steel Store", "Stainless Steel Store");
            document.getElementById("sub_subcategory").options[2] = new Option("Milton", "Milton");
            document.getElementById("sub_subcategory").options[3] = new Option("Bombay Dyeing", "Bombay Dyeing");
            document.getElementById("sub_subcategory").options[4] = new Option("@home", "@home");
            document.getElementById("sub_subcategory").options[5] = new Option("HomeTown", "HomeTown");
            document.getElementById("sub_subcategory").options[6] = new Option("Ajanta", "Ajanta");
            document.getElementById("sub_subcategory").options[7] = new Option("Spaces by Welspun", "Spaces by Welspun");
            document.getElementById("sub_subcategory").options[8] = new Option("Prestige", "Prestige");
            break;

        case "Perfect Home Store":
            document.getElementById("sub_subcategory").options[0] = new Option("select Brand , product", "");
            break;
            // End Home & Furniture Section



            // Sports , Books & More Section

        case "Sports":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Cricket", "Cricket");
            document.getElementById("sub_subcategory").options[2] = new Option("Badminton", "Badminton");
            document.getElementById("sub_subcategory").options[3] = new Option("Cycling", "Cycling");
            document.getElementById("sub_subcategory").options[4] = new Option("Football", "Football");
            document.getElementById("sub_subcategory").options[5] = new Option("Skating", "Skating");
            document.getElementById("sub_subcategory").options[6] = new Option("Camping & Hiking", "Camping & Hiking");
            document.getElementById("sub_subcategory").options[7] = new Option("Swimming", "Swimming");
            break;




        case "Exercise Fitness":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Cardio Equipment", "Cardio Equipment");
            document.getElementById("sub_subcategory").options[2] = new Option("Home Gyms", "Home Gyms");
            document.getElementById("sub_subcategory").options[3] = new Option("Support", "Support");
            document.getElementById("sub_subcategory").options[4] = new Option("Dumbbells", "Dumbbells");
            document.getElementById("sub_subcategory").options[5] = new Option("Ab Exercisers", "Ab Exercisers");
            document.getElementById("sub_subcategory").options[6] = new Option("Shakers & Sippers", "Shakers & Sippers");
            document.getElementById("sub_subcategory").options[7] = new Option("Yoga Mat", "Yoga Mat");
            document.getElementById("sub_subcategory").options[8] = new Option("Gym Gloves", "Gym Gloves");

            break;



        case "Food Essentials":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Nuts & Dry Fruits", "Nuts & Dry Fruits");
            document.getElementById("sub_subcategory").options[2] = new Option("Tea, Coffee and Beverages", "Tea, Coffee and Beverages");
            document.getElementById("sub_subcategory").options[3] = new Option("Chocolates", "Chocolates");
            document.getElementById("sub_subcategory").options[4] = new Option("Snacks Corner", "Snacks Corner");
            document.getElementById("sub_subcategory").options[5] = new Option("Gifting Combos", "Gifting Combos");
            document.getElementById("sub_subcategory").options[6] = new Option("Sweets Store", "Sweets Store");
            document.getElementById("sub_subcategory").options[7] = new Option("Jams, Spreads and Honey", "Jams, Spreads and Honey");
            document.getElementById("sub_subcategory").options[8] = new Option("Breakfast Items", "Breakfast Items");

            break;



        case "Health & Nutrition":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("All Supplements", "All Supplements");
            document.getElementById("sub_subcategory").options[2] = new Option("Protein Supplements", "Protein Supplements");
            document.getElementById("sub_subcategory").options[3] = new Option("Vitamin Supplements", "Vitamin Supplements");
            document.getElementById("sub_subcategory").options[4] = new Option("Health Drinks", "Health Drinks");
            document.getElementById("sub_subcategory").options[5] = new Option("Ayurvedic Supplements", "Ayurvedic Supplements");

            break;



        case "Books":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Entrance Exams", "Entrance Exams");
            document.getElementById("sub_subcategory").options[2] = new Option("Academics", "Academics");
            document.getElementById("sub_subcategory").options[3] = new Option("Literature & Fiction", "Literature & Fiction");
            document.getElementById("sub_subcategory").options[4] = new Option("Non Fiction", "Non Fiction");
            document.getElementById("sub_subcategory").options[5] = new Option("Young Readers", "Young Readers");
            document.getElementById("sub_subcategory").options[6] = new Option("Self-Help", "Self-Help");
            document.getElementById("sub_subcategory").options[7] = new Option("E-Learning", "E-Learning");
            document.getElementById("sub_subcategory").options[8] = new Option("Preorders", "Preorders");
            document.getElementById("sub_subcategory").options[9] = new Option("Indian Languages", "Indian Languages");

            break;



        case "Stationery":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Pens", "Pens");
            document.getElementById("sub_subcategory").options[2] = new Option("Diaries", "Diaries");
            document.getElementById("sub_subcategory").options[3] = new Option("Card Holders", "Card Holders");
            document.getElementById("sub_subcategory").options[4] = new Option("Desk Organizers", "Desk Organizers");
            document.getElementById("sub_subcategory").options[5] = new Option("Calculators", "Calculators");
            document.getElementById("sub_subcategory").options[6] = new Option("Key Chains", "Key Chains");

            break;



        case "Auto Accessories":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Helmets & Riding Gears", "Helmets & Riding Gears");
            document.getElementById("sub_subcategory").options[2] = new Option("Car Audio/Video", "Car Audio/Video");
            document.getElementById("sub_subcategory").options[3] = new Option("Car Mobile Accessories", "Car Mobile Accessories");
            document.getElementById("sub_subcategory").options[4] = new Option("Car & Bike Care", "Car & Bike Care");
            document.getElementById("sub_subcategory").options[5] = new Option("Vehicle Lubricants", "Vehicle Lubricants");

            break;



        case "Industrial & Scientific tools":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Industrial Measurement Devices", "Industrial Measurement Devices");
            document.getElementById("sub_subcategory").options[2] = new Option("Industrial Testing Devices", "Industrial Testing Devices");
            document.getElementById("sub_subcategory").options[3] = new Option("Lab & Scientific Products", "Lab & Scientific Products");
            document.getElementById("sub_subcategory").options[4] = new Option("Packaging & Shipping Products", "Packaging & Shipping Products");
            document.getElementById("sub_subcategory").options[5] = new Option("Safety Products", "Safety Products");

            break;



        case "Medical Supplies":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Pregnancy and Fertility Kits", "Pregnancy and Fertility Kits");
            document.getElementById("sub_subcategory").options[2] = new Option("Hot Water Bag", "Hot Water Bag");

            break;



        case "Music":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Musical Instruments", "Musical Instruments");
            document.getElementById("sub_subcategory").options[2] = new Option("Music", "Music");
            document.getElementById("sub_subcategory").options[3] = new Option("Movies & Tv shows", "Movies & Tv shows");

            break;



        case "Gaming":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Gaming Consoles", "Gaming Consoles");
            document.getElementById("sub_subcategory").options[2] = new Option("Gaming Accessories", "Gaming Accessories");
            document.getElementById("sub_subcategory").options[3] = new Option("PS4 Games", "PS4 Games");
            document.getElementById("sub_subcategory").options[4] = new Option("Smart Glasses (VR)", "Smart Glasses (VR)");

            break;



        case "Grocery (Only in Select Cities)":
            document.getElementById("sub_subcategory").options[0] = new Option("Select select Brand , product", "");
            document.getElementById("sub_subcategory").options[1] = new Option("Grocery", "Grocery");

            break;

            // End Sports Section



        default:
            document.getElementById("sub_subcategory").options[0] = new Option("Select Select Brand , product", "");
            break;
    }
    return true;
}
// </script>