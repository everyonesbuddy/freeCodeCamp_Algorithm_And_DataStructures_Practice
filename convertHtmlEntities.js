//convert the characters &, <, >, "", ' in a string to their corresponding HTML entities

function convertHTML(str){
    //split the string to avoid problems.

    let temp = str.split("");

    //since we are checking for just a few html elements use a switch
    for(let i = 0; i < temp.length; i++){
    switch(temp[i]) {
        case "<":
            temp[i] = "&lt;";
            break;
        case "&":
            temp[i] = "&amp;";
            break;
        case ">":
            temp[i] ="&gt;";
            break;
        case '"':
            temp[i] = "&quote;";
            break;
        case "'":
            temp[i] = "&apos;";
            break
    }
}
temp = temp.join("");
return temp

}

convertHTML("Dolce & Gabbana");