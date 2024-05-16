// Function to create HTML elements and append them to the root div
function renderAboutPage() {
    const root = document.getElementById('root');

    const container = document.createElement('div');
    container.classList.add('about-container');

    const heading = document.createElement('h1');
    heading.classList.add('about-heading');
    heading.textContent = 'About';

    const main = document.createElement('div');
    main.classList.add('about-main');

    const content1 = document.createElement('p');
    content1.classList.add('about-content');
    content1.textContent = 'Yoga has been the way of life for centuries. By building Urban Yogi we have built a Yoga trainer website where learners can select the pose that they intend to do and then our unique pose detection and pose correction software shall help them navigate their learning experience.';
    const content2 = document.createElement('p');
    content2.classList.add('about-content');
    content2.textContent = 'This AI first predicts keypoints or coordinates of different parts of the body(basically where they are present in an image) and then it use another classification model to classify the poses if someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are doing correctly(by making virtual skeleton green). We have used Tensorflow pretrained Movenet Model To Predict the Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose. We have trained the model in python because of tensorflowJS we can leverage the support of browser so I converted the keras/tensorflow model to tensorflowJS.';

    main.appendChild(content1);
    main.appendChild(content2);

    container.appendChild(heading);
    container.appendChild(main);

    root.appendChild(container);
}

// Call the function to render the About page when the window loads
window.onload = function() {
    renderAboutPage();
};
