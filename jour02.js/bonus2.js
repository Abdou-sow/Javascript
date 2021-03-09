var month = "ma";

switch (month) {
	case "december":
    case "january":
    case "february":
		console.log("winter");
		break;
	case "march":
    case "april":
    case "may": 
		console.log("spring");
		break;
	case "june":
    case "july":
    case "august":
		console.log("summer");
		break;
	case "september":
    case"october":
    case"november" :
		console.log("autumn");
		break;
	default: 
		console.log("That's not a month...");
}