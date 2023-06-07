// Assume you have an array of weather alerts
const weatherAlerts = [
    { type: 'Alert', message: 'Heavy rain expected tomorrow.' },
    { type: 'High Alert', message: 'Severe thunderstorm warning for your area.' },
    { type: 'Alert', message: 'Drought conditions continue.' }
  ];
  
  // Function to dynamically add alerts to the dashboard
  function addAlerts() {
    const alertsList = document.getElementById('alerts-list');
  
    weatherAlerts.forEach(alert => {
      const listItem = document.createElement('li');
      listItem.textContent = `[${alert.type}] ${alert.message}`;
      alertsList.appendChild(listItem);
    });
  }
  
  // Function to dynamically add high alerts to the dashboard
  function addHighAlerts() {
    const highAlertsList = document.getElementById('high-alerts-list');
  
    weatherAlerts.forEach(alert => {
      if (alert.type === 'High Alert') {
        const listItem = document.createElement('li');
        listItem.textContent = `[${alert.type}] ${alert.message}`;
        highAlertsList.appendChild(listItem);
      }
    });
  }
  
  // Call the functions to add alerts to the dashboard
  addAlerts();
  addHighAlerts();
  // Function to dynamically add alerts to the dashboard
function addAlerts() {
    const alertsList = document.getElementById('alerts-list');
  
    weatherAlerts.forEach(alert => {
      const listItem = document.createElement('li');
      listItem.textContent = `[${alert.type}] ${alert.message}`;
      alertsList.appendChild(listItem);
  
      // Add the "new" class to newly added alerts
      setTimeout(() => {
        listItem.classList.add('new');
      }, 500); // Adjust the delay as needed
    });
  }
  
  // Function to dynamically add high alerts to the dashboard
  function addHighAlerts() {
    const highAlertsList = document.getElementById('high-alerts-list');
  
    weatherAlerts.forEach(alert => {
      if (alert.type === 'High Alert') {
        const listItem = document.createElement('li');
        listItem.textContent = `[${alert.type}] ${alert.message}`;
        highAlertsList.appendChild(listItem);
  
        // Add the "new" class to newly added high alerts
        setTimeout(() => {
          listItem.classList.add('new');
        }, 500); // Adjust the delay as needed
      }
    });
  }
  
  // Call the functions to add alerts to the dashboard
  addAlerts();
  addHighAlerts();
  
  