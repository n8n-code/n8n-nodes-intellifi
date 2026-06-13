import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class IntellifiApi implements ICredentialType {
        name = 'N8nDevIntellifiApi';

        displayName = 'Intellifi API';

        icon: Icon = { light: 'file:../nodes/Intellifi/intellifi.png', dark: 'file:../nodes/Intellifi/intellifi.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://brain.intellifi.cloud/api',
                        description: 'The base URL of your Intellifi API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'brain.sid': '={{$credentials.apiKey}}',
                        },
                },
        };


}
