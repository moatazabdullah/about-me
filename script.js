document.addEventListener("DOMContentLoaded", function () {
  const outputDiv = document.getElementById("terminal-output");
  const commandInput = document.getElementById("command-input");

  function displayWelcomeMessage() {
    const welcomeMessage = "Welcome to My Terminal!\nType 'help' to see the available commands.";
    displayText(welcomeMessage);
  }

  function displayHelpMessage() {
    const helpMessage =
      "Available commands:\n" +
      "- whoami : Display information about me\n" +
      "- findme : Find me on social media\n"+
      "- Clear OR CTRL + L: Clears the screen";
    displayText(helpMessage);
  }

  function handleCommand(command) {
    displayText("$ " + command);

    switch (command) {
      case "help":
        displayHelpMessage();
        break;
      case "clear":
        clearScreen();
        break;
      case "whoami":
        displayWhoAmI();
        break;
      case "findme":
        displayFindMe();
        break;
      default:
        displayErrorMessage(command);
        break;
    }
  }

function displayText(text) {
  const outputContainer = document.getElementById("terminal-output");
  const message = document.createElement("pre");
  message.textContent = text;
  outputContainer.appendChild(message);
  outputContainer.scrollTop = outputContainer.scrollHeight;
}



  function displayWhoAmI() {
    const message = "I'm Moataz, a Networking and Telecommunication Engineer and a cybersecurity enthusiast driven by a deep passion for the field.\n"+"Constantly seeking to develop my skills and knowledge, I am dedicated to staying updated with the latest trends and advancements in cybersecurity."+ "My expertise lies in penetration testing, where I specialize in conducting thorough assessments of systems and networks to identify vulnerabilities." + "Additionally, I have proficiency in web application pentesting, ensuring the security of online platforms." + " Programming languages such as C++ and Python are my tools of choice, allowing me to develop effective and efficient solutions." + " With a relentless drive for improvement, I am committed to making a positive impact in the realm of cybersecurity.";
    displayTextWithTypingEffect(message);
  }

  function displayFindMe() {
    const message =
      "You can find me on:\n\n" +
      "- Website: [your website URL]\n" +
      "- LinkedIn: [your LinkedIn profile URL]\n" +
      "- GitHub: [your GitHub profile URL]\n" +
      "- Email: [your email address]";
    displayText(message);
  }

  function clearScreen() {
    outputDiv.innerHTML = "";
  }

  function displayErrorMessage(command) {
    const message = `Command not found: ${command}`;
    displayText(message);
  }

  function displayTextWithTypingEffect(text) {
    const characters = text.split("");
    const output = document.createElement("pre");
    outputDiv.appendChild(output);

    let index = 0;
    const typingSpeed = 50;

    const typingInterval = setInterval(() => {
      output.textContent += characters[index];
      index++;

      if (index >= characters.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleCommand(commandInput.value);
      commandInput.value = "";
    } else if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();
      clearScreen();
    }
  });

  displayWelcomeMessage();
  commandInput.focus();
});
