document.addEventListener("DOMContentLoaded", function() {
  const outputDiv = document.getElementById("terminal-output");
  const commandInput = document.getElementById("command-input");

  function displayWelcomeMessage() {
    const welcomeMessage = "Welcome to My Terminal!\nType 'help' to see the available commands.";
    const message = document.createElement("pre");
    message.textContent = welcomeMessage;
    outputDiv.appendChild(message);
  }

  function displayHelpMessage() {
    const helpMessage =
      "Available commands:\n" +
      "- whoami : Display information about me\n" +
      "- findme : Find me on social media\n"+
      "- Clear OR CTRL + L: Clears the screen";
    const message = document.createElement("pre");
    message.textContent = helpMessage;
    outputDiv.appendChild(message);
  }

  function handleCommand(command) {
    const output = document.createElement("p");
    output.textContent = "$ " + command;
    outputDiv.appendChild(output);

    if (command === "help") {
      displayHelpMessage();
    } else if (command === "clear") {
      clearScreen();
    } else if (command === "whoami") {
      displayWhoAmI();
    } else if (command === "findme") {
      displayFindMe();
    } else {
      displayErrorMessage(command);
    }
  }

  function displayWhoAmI() {
    const message = document.createElement("p");
    message.textContent = "I'm Moataz a Networking and Telecommunication Engineer and a cybersecurity enthusiast driven by a deep passion for the field. Constantly seeking to develop my skills and knowledge, I am dedicated to staying updated with the latest trends and advancements in cybersecurity. My expertise lies in penetration testing, where I specialize in conducting thorough assessments of systems and networks to identify vulnerabilities. Additionally, I have proficiency in web application pentesting, ensuring the security of online platforms. Programming languages such as C++ and Python are my tools of choice, allowing me to develop effective and efficient solutions. With a relentless drive for improvement, I am committed to making a positive impact in the realm of cybersecurity.";
    outputDiv.appendChild(message);
  }

  function displayFindMe() {
    const message = document.createElement("p");
    message.innerHTML =
      "<strong>You can find me on:</strong><br><br>" +
      "- <a href='https://example.com'>Website</a><br>" +
      "- <a href='https://linkedin.com/[your_username]'>LinkedIn</a><br>" +
      "- <a href='https://github.com/[your_username]'>GitHub</a><br>" +
      "- Email: youremail@example.com";
    outputDiv.appendChild(message);
  }

  function clearScreen() {
    outputDiv.innerHTML = "";
  }

  function displayErrorMessage(command) {
    const message = document.createElement("p");
    message.textContent = `Command not found: ${command}`;
    outputDiv.appendChild(message);
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleCommand(commandInput.value);
      commandInput.value = "";
    } else if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();
      clearScreen();
    }
  });

  // Call the displayWelcomeMessage function when the page loads
  displayWelcomeMessage();

  commandInput.focus();
});
