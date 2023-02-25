// Prompt user for Y, y, N or n response
do {
    // If renponse is not valid, continue prompting
    again = prompt("repeat entries? (y or n)" ,"y").toLocaleUpperCase();
} while (!((again === "y") || (again === "n")));

document.write(`Response was ${again}`);