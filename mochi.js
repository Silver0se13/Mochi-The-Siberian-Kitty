about.addEventListener('click', function() {
    console.log("About was pressed.");
    cat.src = "images/Mochi_Comfy.jpeg";
    heading_two.innerHTML = "About Mochi";
    text.innerHTML = "Mochi is a cute and gorgeous little Siberian kitty. She has beautiful blue eyes and the fluffiest fur. Mochi's little nose is both pink and black, which her human mama thinks is unique. This kitty is very curious in nature, but does get scared of loud noises (like the vacuum and hair dryer). She's playful and loves cuddling up to her human mama. Mochi is very affectionate towards people she trusts. She's super sweet and hardly bites or scratches, only love bites. This little kitty is known for how much she purrs and how loud her purrs are. A pretty cool fact is that her birth parents are both pretty awesome, having won of titles in offical cat shows!"
    heading_three.innerHTML = "More Details About Mochi:"
    list.innerHTML = "<li><strong>Full TICA Registered Name:</strong> Czarina Cajta Mochi</li> <li><strong>Birthday:</strong> April 08, 2024</li> <li><strong>Gender:</strong> Female</li>"
})

home.addEventListener('click', function() {
    console.log("Coming Home was pressed.");
    cat.src = "images/Sleepy_Mochi.jpeg";
    heading_two.innerHTML = "Coming Home";
    text.innerHTML = ""
    heading_three.innerHTML = ""
    list.innerHTML = ""
})

weeks.addEventListener('click', function() {
    console.log("First Few Weeks was pressed.");
    cat.src = "";
    heading_two.innerHTML = "First Few Weeks";
    text.innerHTML = ""
    heading_three.innerHTML = ""
    list.innerHTML = ""
})

today.addEventListener('click', function() {
    console.log("Growing Today was pressed.");
    cat.src = "";
    heading_two.innerHTML = "Growing up Today";
    text.innerHTML = ""
    heading_three.innerHTML = ""
    list.innerHTML = ""
})