window.addEventListener("load", solve);

function solve() {
    let studentNameField = document.getElementById('student');
    let universityField = document.getElementById('university');
    let scoreField = document.getElementById('score');
    let allInputFields = [];
    allInputFields.push(studentNameField);
    allInputFields.push(universityField);
    allInputFields.push(scoreField);
    
    let nextButtonElement = document.getElementById('next-btn');
    nextButtonElement.addEventListener('click', e=>getFormInfo());

    let previewListElement = document.getElementById('preview-list');
    let liItem = '';

    let candidatesListElement = document.getElementById('candidates-list');

    function getFormInfo(){
      if (allInputFields.find(f=>!f.value)){
        return;
      }

      liElement = document.createElement('li');
      liElement.classList.add('application');

      let articleElement = document.createElement('article');

      let hElement = document.createElement('h4');
      hElement.textContent = studentNameField.value;
      articleElement.appendChild(hElement);

      let pElement = document.createElement('p');
      pElement.textContent = `University: ${universityField.value}`;
      articleElement.appendChild(pElement);

      let p2Element = document.createElement('p');
      p2Element.textContent = `Score: ${scoreField.value}`;
      articleElement.appendChild(p2Element);

      liElement.appendChild(articleElement);

      let editbuttonElement = document.createElement('button');
      editbuttonElement.classList.add('action-btn');
      editbuttonElement.classList.add('edit');
      editbuttonElement.textContent = 'edit';
      liElement.appendChild(editbuttonElement);
      editbuttonElement.addEventListener('click', e=>editInfo());

      let applyButtonElement = document.createElement('button');
      applyButtonElement.classList.add('action-btn');
      applyButtonElement.classList.add('apply');
      applyButtonElement.textContent = 'apply';
      liElement.appendChild(applyButtonElement);
      applyButtonElement.addEventListener('click', e=> apply());
      
      previewListElement.appendChild(liElement);

      nextButtonElement.disabled = true;
      allInputFields.forEach(f=>f.value = null);
    }

    function editInfo(){
      studentNameField.value = document.getElementsByClassName('application')[0].getElementsByTagName('h4')[0].textContent;
      universityField.value = document.getElementsByClassName('application')[0].getElementsByTagName('p')[0].textContent.substring(12);
      scoreField.value = document.getElementsByClassName('application')[0].getElementsByTagName('p')[1].textContent.substring(7);
      previewListElement.innerHTML = '';
      nextButtonElement.disabled = false;
    }

    function apply(){
      liElement.remove();
      Array.from(liElement.getElementsByTagName('button')).forEach(e=>e.remove());
      candidatesListElement.appendChild(liElement);
      nextButtonElement.disabled = false;
    }
  }
  