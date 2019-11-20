module.exports = function (plop) {

    plop.setHelper('lowerCase', (txt) => txt.toLowerCase());

    plop.setGenerator('component', {
        description: 'template for components',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Component name:'
        }, {
            type: 'input',
            name: 'description',
            message: 'Describe this component:'
        }, {
            type: 'input',
            name: 'type',
            message: 'Component Atomic Design type:'
        }],
        actions: [{
            type: 'add',
            path: 'projects/atomic-component/src/lib/components/{{lowerCase name}}/{{lowerCase name}}.component.ts',
            templateFile: 'plop-templates/component.hbs'
        },
        {
            type: 'add',
            path: 'projects/atomic-component/src/lib/components/{{lowerCase name}}/{{lowerCase name}}.component.spec.ts',
            templateFile: 'plop-templates/component.spec.hbs'
        }]
    });

    plop.setGenerator('story', {
        description: 'template for story',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Story name:'
        }, {
            type: 'input',
            name: 'description',
            message: 'Describe this story:'
        }],
        actions: [{
            type: 'add',
            path: 'src/stories/{{lowerCase name}}/{{lowerCase name}}.stories.ts',
            templateFile: 'plop-templates/story.hbs'
        }]
    });

    plop.setGenerator('svg', {
        description: 'template for svg',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Icon name:'
        }, {
            type: 'input',
            name: 'description',
            message: 'Describe this icon:'
        }],
        actions: [{
            type: 'add',
            path: 'projects/atomic-component/src/lib/svg/{{lowerCase name}}/{{lowerCase name}}-icon.component.ts',
            templateFile: 'plop-templates/svg.hbs'
        }, {
            type: 'add',
            path: 'projects/atomic-component/src/lib/svg/{{lowerCase name}}/{{lowerCase name}}-icon.component.spec.ts',
            templateFile: 'plop-templates/svg.spec.hbs'
        }]
    });

};
