const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenidos a la Calculadora de Papi Meyer';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SumaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent';
    },
    handle(handlerInput) {
        const cantidad1 = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidad2 = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad1);
        const numero2 = Number(cantidad2);
        
        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        
        const resultado = numero1 + numero2;
        const speakOutput = `Calculadora Básica Papi Meyer. El resultado de la suma de ${numero1} más ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const RestaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent';
    },
    handle(handlerInput) {
        const cantidad1 = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidad2 = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad1);
        const numero2 = Number(cantidad2);
        
        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        
        const resultado = numero1 - numero2;
        const speakOutput = `Calculadora Básica Papi Meyer. El resultado de la resta de ${numero1} menos ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const MultiplicacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicacionIntent';
    },
    handle(handlerInput) {
        const cantidad1 = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidad2 = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad1);
        const numero2 = Number(cantidad2);
        
        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        
        const resultado = numero1 * numero2;
        const speakOutput = `Calculadora Básica Papi Meyer. El resultado de la multiplicación de ${numero1} por ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const DivisionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivisionIntent';
    },
    handle(handlerInput) {
        const cantidad1 = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidad2 = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad1);
        const numero2 = Number(cantidad2);
        
        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        
        if (numero2 === 0) {
            return handlerInput.responseBuilder
                .speak('No se puede dividir por cero. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        
        const resultado = numero1 / numero2;
        const speakOutput = `Calculadora Básica Papi Meyer. El resultado de la división de ${numero1} entre ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const RaizIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RaizIntent';
    },
    handle(handlerInput) {
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const numero = Number(cantidad);
        
        if (isNaN(numero)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender el número. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        
        if (numero < 0) {
            return handlerInput.responseBuilder
                .speak('No se puede calcular la raíz cuadrada de un número negativo. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        
        const resultado = Math.sqrt(numero);
        const speakOutput = `Calculadora Básica Papi Meyer. El resultado de la raíz cuadrada de ${numero} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const PotenciaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotenciaIntent';
    },
    handle(handlerInput) {
        const base = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const exponente = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(base);
        const numero2 = Number(exponente);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        const resultado = Math.pow(numero1, numero2);
        const speakOutput = `Calculadora Básica Papi Meyer. El resultado de elevar ${numero1} a la potencia de ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ModuloIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ModuloIntent';
    },
    handle(handlerInput) {
        const dividendo = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const divisor = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(dividendo);
        const numero2 = Number(divisor);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        if (numero2 === 0) {
            return handlerInput.responseBuilder
                .speak('No se puede dividir por cero. Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        const resultado = numero1 % numero2;
        const speakOutput = `Calculadora Básica Papi Meyer. El resultado del módulo de ${numero1} dividido por ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        MultiplicacionIntentHandler,
        DivisionIntentHandler,
        RaizIntentHandler,
        PotenciaIntentHandler,
        ModuloIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
