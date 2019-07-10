module.exports = function (plop) {
    plop.setGenerator('actions', {
        description: 'This will generate the actions file',
        prompts: [
            {
                type: 'input',
                name: 'fileName',
                message: 'type the name for your file'
            },
            {
                type: 'input',
                name: 'actionName',
                message: 'type the name for your action'
            }
        ],
        actions: [
            {
                type: 'add',
                path: '{{pascalCase fileName}}.actions.ts',
                templateFile: 'plop-templates/actions/main.hbs',
                skipIfExists: true
            },
            {
                type: 'append',
                path: '{{pascalCase fileName}}.actions.ts',
                pattern: /(\/\/ constants)/g,
                templateFile: 'plop-templates/actions/constants.hbs',
            },
            {
                type: 'append',
                path: '{{pascalCase fileName}}.actions.ts',
                pattern: /(\/\/ actions)/g,
                templateFile: 'plop-templates/actions/actions.hbs',
            },
            {
                type: 'append',
                path: '{{pascalCase fileName}}.actions.ts',
                pattern: /(export\s+type\s[\w]+\s=)/g,
                templateFile: 'plop-templates/actions/typeExport.hbs',
            }
        ]
    });
};