var tag = '';
var backgroundColor = "white";

function highlight() {
    clearHighlight(); // Turn off all highlighting
    pos = document.getElementById("POS").value;
    //console.log(pos);
    tag = pos;
    
    var selects = document.querySelectorAll("[type=\""+pos+"\"]"); 
    
    for (var i = 0; i < selects.length; i++) {
        console.log(selects[i].selectedIndex);
        ind = selects[i].selectedIndex;                
        val = selects[i].options[ind].value;
        if (val=="0") break;
        tag += val;        
    }

    var count = highlightTaggedWords();
    document.getElementById("word_count").innerHTML = count;

    event.preventDefault(); // disable normal form submit behavior

    return false; // prevent further bubbling of event
}

function showHideSelects() {
    pos = document.getElementById("POS").value;

    // Make this type select boxes visible and hide other types
    var selects = document.querySelectorAll("select, label");    
    for (var i = 0; i < selects.length; i++) {
        selects[i].style.display="none";
    };

    var selects = document.querySelectorAll("[class=\""+pos+"\"]");    
    for (var i = 0; i < selects.length; i++) {
        selects[i].style.display="inline-block";
    };

    document.getElementById("POS").style.display="inline-block"
    document.getElementById("POSLabel").style.display="inline-block"
}

function highlightTaggedWords() {
    var this_tag = "[t^=\""+tag+"\"]"
    
    var words = document.querySelectorAll(this_tag);

    if (words.length >= 1) backgroundColor = words[0].style.backgroundColor;

    for (var i = 0; i < words.length; i++) {
        words[i].style.backgroundColor="yellow";
    };
    tag = ''; 
    return words.length;   
}

function clearHighlight() {
    var words = document.querySelectorAll("w");
    for (var i = 0; i < words.length; i++) {
        words[i].style.backgroundColor = backgroundColor;
    };
}