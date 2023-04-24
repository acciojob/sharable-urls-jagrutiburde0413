// your code here
  const form = document.querySelector('form');
      const nameInput = document.querySelector('#name');
      const yearInput = document.querySelector('#year');
      const urlText = document.querySelector('#url');
      const button = document.querySelector('#button');

      button.addEventListener('click', () => {
        const name = encodeURIComponent(nameInput.value);
        const year = encodeURIComponent(yearInput.value);
        const url = `https://localhost:8080/?name=${name}&year=${year}`;
        urlText.textContent = url;
		   
      });