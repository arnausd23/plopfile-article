module.exports = function (plop) {
    plop.setGenerator('components', {
        description: 'This will generate both the components and the containers folder',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'type the name for your components folder'
        }],
        actions: [{
            type: 'add',
            path: 'src/components/{{name}}.js',
            templateFile: 'plop-templates/components.hbs'
        }]
    });

    plop.setGenerator('container', {
        description: 'This will generate both the components and the containers folder',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'type the name for containers folder'
        }],
        actions: [{
            type: 'add',
            path: 'src/containers/{{name}}.js',
            templateFile: 'plop-templates/container.hbs'
        }]
    });
};