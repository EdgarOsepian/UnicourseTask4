let age = "18";

if (age < 18 && typeof age === 'number') {
    console.log("თქვენ არ შეგიძლიათ მართვის მოწმობის აღება");
} else if (age >= 18 && typeof age === 'number') {
    console.log("თქვენ შეგიძლიათ მართვის მოწმობის აღება");
} else {
    console.log("მითითებული ასაკი არასწორია!");
}