function showBadge (license) {
    const badgePath = {
        'MIT': 'https://news.mit.edu/sites/default/files/download/201810/MIT-Computer-Announce-01-PRESS.jpg',
        'LGPL': 'https://news.mit.edu/sites/default/files/download/201810/MIT-Computer-Announce-01-PRESS.jpg',
    }[license] || 'https://news.mit.edu/sites/default/files/download/201810/MIT-Computer-Announce-01-PRESS.jpg';

    return `![alt text](${badgePath})`;
}

function generateReadme(data) {
    const {
        title,
        description,
        usageInformation,
        testInstructions,
        installationInstructions,
        guidlines,
        license,
        username,
        repo,
        email,
    } = data;

    return `
        ${showBadge(license)}
        # Professional README Generator Starter Code

        [How to create a Professional README](./readme-guide.md)

        ${repo}
        <a href = "#description">${title}</a>
        ## Description
        ${description}
        ## Table of Contents
        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        ${license ? '- [License](#license)' : ''}
        - [Tests](#tests)
        - [Contributing Guide Lines](#contributing)
        - [Questions](#questions)
        <a href = "#installation"></a>
        ## Installation
        ${installationInstructions}
        <a href = "#usage"></a>
        ## Usage
        ${usageInformation}
        <a href = "#credits"></a>
        ## Credits
        - [${username}](https://github.com/${username})

        ${license ? `
            <a href = "#license"></a>
            ## License
            ${license}
        ` : ''}
        <a href = "#contributing"></a>
        ## Contributing Guide Lines
        ${guidlines}
        <a href = "#tests"></a>
        ## Tests
        ${testInstructions}
        <a href = "questions"></a>
        ## Questions
        Feel free to reach out with any question you have about ${title}!
        ### Contact information:
        - GitHub: [${username}](https://www.github.com/${username})
        - Email: [${email}](mailto:${email})
    `.trim().split('\n').map(line => line.trim()).join('\n');
}

module.exports = generateReadme;