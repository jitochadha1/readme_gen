function showBadge (license) {
    const badgePath = {
        'MIT': 'https://img.icons8.com/material-sharp/2x/software-license.png',
        'LGPL': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/License_icon-lgpl.svg/256px-License_icon-lgpl.svg.png',
        'Public Domain License': 'https://en.wikipedia.org/wiki/File:Cc-public_domain_mark_white.svg',
        'Permissive': 'https://p7.hiclipart.com/preview/388/68/864/copyleft-copyright-symbol-computer-icons-play-thumbnail.jpg',
        'Copy Left': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Copyleft.svg/440px-Copyleft.svg.png',
        'Proprietary': 'https://plumbr.io/app/uploads/2015/01/thread-lock.jpeg'
        
    }[license] || 'https://i.ebayimg.com/images/g/MbcAAOSwI5FekW-E/s-l400.jpg';

    return `![alt text](${badgePath})`;
}

function generateReadme(data) {
    const {
        title = 'MD Generator',
        description = 'Creating .md files from scratch',
        usageInformation = '...',
        testInstructions = '...',
        installationInstructions = '...',
        guidlines = '...',
        license = 'LGPL',
        username = 'yourusername',
        repo = 'https://github.com/jitochadha1/readme_gen/',
        email = 'your@email.com',
    } = data;

    return `
        ${showBadge(license)}
        # Professional README Generator

        ${repo}
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

        ## Installation
        ${installationInstructions}
        ## Usage
        ${usageInformation}
        ## Credits
        - [${username}](https://github.com/${username})

        ${license ? `
            ## License
            ${license}
        ` : ''}
        ## Contributing Guide Lines
        ${guidlines}
        ## Tests
        ${testInstructions}
        ## Questions
        Feel free to reach out with any question you have about ${title}!
        ### Contact information:
        - GitHub: [${username}](https://www.github.com/${username})
        - Email: [${email}](mailto:${email})

    `.trim().split('\n').map(line => line.trim()).join('\n');
}

module.exports = generateReadme;