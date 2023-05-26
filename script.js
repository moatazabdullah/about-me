document.addEventListener("DOMContentLoaded", function () {
  const outputDiv = document.getElementById("terminal-output");
  const commandInput = document.getElementById("command-input");

  function displayWelcomeMessage() {
    const welcomeMessage = "Welcome to My Website!\nType 'help' to see the available commands.";
    displayTextWithTypingEffect(welcomeMessage, 15);
  }

  function displayHelpMessage() {
    const helpMessage =
      "Available commands:\n" +
      "- whoami : Display information about me\n" +
      "- findme : Find me on social media\n" +
      "- Clear OR CTRL + L: Clears the screen";
    displayTextWithTypingEffect(helpMessage, 15);
  }

  function handleCommand(command) {
    displayText("root@moataz$ " + command);

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
    const message = "Hi,\nI'm Moataz, a Networking and Telecommunication Engineer and a cybersecurity enthusiast driven by a deep passion for the field.\nConstantly seeking to develop my skills and knowledge, I am dedicated to staying updated with the latest trends and advancements in cybersecurity.\nMy expertise lies in penetration testing, where I specialize in conducting thorough assessments of systems and networks to identify vulnerabilities.\nAdditionally, I have proficiency in web application pentesting, ensuring the security of online platforms. Programming languages such as C++ and Python are my tools of choice,\nallowing me to develop effective and efficient solutions. With a relentless drive for improvement, I am committed to making a positive impact in the realm of cybersecurity.";
    displayTextWithTypingEffect(message, 10);
  }

  function displayFindMe() {
    const message = document.createElement("p");
    message.innerHTML =
      "<strong>You can find me on:</strong><br><br>" +
      "- <a href='https://moatazabdullah.github.com/about-me'>Website</a><br>" +
      "- <a href='https://linkedin.com/moataz-abdullah'>LinkedIn</a><br>" +
      "- <a href='https://github.com/moatazabdullah'>GitHub</a><br>" +
      "- Email: abdullahmoataz90@gmail.com";
    outputDiv.appendChild(message);
  }

  function clearScreen() {
    outputDiv.innerHTML = "";
  }

  function displayErrorMessage(command) {
    const message = `Command not found: ${command}`;
    displayTextWithTypingEffect(message,15);
  }

  function displayTextWithTypingEffect(text, s) {
    const characters = text.split("");
    const output = document.createElement("pre");
    outputDiv.appendChild(output);

    let index = 0;
    const typingSpeed = s;

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
