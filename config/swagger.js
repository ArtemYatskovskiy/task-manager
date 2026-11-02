import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openai: '3.0.0',
        info: {
            title: 'Task Manager API',
            desription: 'Task Manager application',
            version: '1.0.0',
        },
        apis: ['./routes/*.js'],
    },
    components: {
        securitySchemas: {
            basicAuth: {
                type: 'http',
                schema: 'basic',
            },
        },
    },
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
