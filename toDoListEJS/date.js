// This is an export file , this helps us in creating reusable functions and refactoring

exports.getDay = ()=>{
    var today = new Date();    
    var options = { weekday: "long", day: "numeric", month: "long" };
    return today.toLocaleDateString("en-US", options);
} 