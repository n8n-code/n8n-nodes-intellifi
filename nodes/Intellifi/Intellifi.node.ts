import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { authinfoDescription } from './resources/authinfo';
import { blobsDescription } from './resources/blobs';
import { eventsDescription } from './resources/events';
import { itemsDescription } from './resources/items';
import { keysDescription } from './resources/keys';
import { kvpairsDescription } from './resources/kvpairs';
import { locationsDescription } from './resources/locations';
import { locationrulesDescription } from './resources/locationrules';
import { presencesDescription } from './resources/presences';
import { servicesDescription } from './resources/services';
import { setsDescription } from './resources/sets';
import { spotsDescription } from './resources/spots';
import { spotsetsDescription } from './resources/spotsets';
import { subscriptionsDescription } from './resources/subscriptions';
import { usersDescription } from './resources/users';

export class Intellifi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Intellifi',
		name: 'N8nDevIntellifi',
		icon: { light: 'file:./intellifi.png', dark: 'file:./intellifi.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Intellifi Brain technical documentation overview.',
		defaults: { name: 'Intellifi' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevIntellifiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Authinfo",
					"value": "Authinfo",
					"description": "Read-only route providing information about how the requesting client is authenticated on the API, as well as corresponding permissions.\n"
				},
				{
					"name": "Blobs",
					"value": "Blobs",
					"description": "The `blobs` resource provides a service for storing binary objects on the Brain, e.g. images.\nIntended for applications that interact with the Brain but do not or cannot have their own (centralized) persistent storage.\n\nSee also the `kvpairs` resource.\n"
				},
				{
					"name": "Events",
					"value": "Events",
					"description": "The `events` resource temporarily holds Brain events that match an event subscription in the `subscriptions` resource.\nThe subscription determines how long the events are held.\n\nSee also the `subscriptions` resource.\n"
				},
				{
					"name": "Items",
					"value": "Items",
					"description": "The `items` resource contains data about things that can be tracked using the Brain.\nWhen an item is detected for the first time by a device connected to the Brain, it will be added to this resource.\nIt will then be updated with information about where the item currently is, or where it has been seen for the last time.\n"
				},
				{
					"name": "Keys",
					"value": "Keys",
					"description": "The `keys` resource contains the access keys used to authenticate requests to this API.\n\nNote that this resource is only accessible for administrator users logged into the Brain Management Console.\nIt is not possible to access this resource using API key authentication.\nThis resource is therefore irrelevant to most applications.\n"
				},
				{
					"name": "Kvpairs",
					"value": "Kvpairs",
					"description": "The `kvpairs` resource provides a service for storing generic JSON key/value pairs on the Brain.\nIntended for applications that interact with the Brain but do not or cannot have their own (centralized) persistent storage.\n\nSee also the `blobs` resource.\n"
				},
				{
					"name": "Locations",
					"value": "Locations",
					"description": "The `locations` resource is an abstraction for the area around a physical location that items can be localized at.\n"
				},
				{
					"name": "Locationrules",
					"value": "Locationrules",
					"description": "Location rules are directives for the localization engine that may be useful for certain solutions.\n"
				},
				{
					"name": "Presences",
					"value": "Presences",
					"description": "The `presences` resource is an abstraction for the detection of an item (from the `items` resource) at a location (from the `locations` resource).\nPresences are always kept current by the Brain, i.e. if the hold time of a presence expires it is simply removed from the resource.\n"
				},
				{
					"name": "Services",
					"value": "Services",
					"description": "The Brain consists of several software components with their own responsibilities, referred to as \"services\".\nSome of these services have status information and/or configuration that can be managed using the `services` resource.\n"
				},
				{
					"name": "Sets",
					"value": "Sets",
					"description": "It can be useful to group items or Smartspots in a list. The `sets` resource can be used to create and manage such list sets.\nSets can be utilized in various Brain Management Console utilities and can also be useful in custom Brain applications.\n"
				},
				{
					"name": "Spots",
					"value": "Spots",
					"description": "The `spots` resource contains representations of Smartspot devices that have connected to this Brain at least once.\nIt is possible to configure Smartspots through this resource.\n\nSmartspots also have their own locally stored sets, referred to as \"spotsets\".\nSpotsets can be created and managed within a single spot instance or by using `spotsets` resource.\nCreated or updated spotsets are automatically synced between Smartspot and server.\n"
				},
				{
					"name": "Spotsets",
					"value": "Spotsets",
					"description": "The `spotsets` resource contains a collection of set definitons for each Smartspot and allows for remote mananagement.\nSpotsets are stored and used on the Smartspot locally and synced between Smartspot and server.\nSpotsets primarly are used as an input for Sense&Control.\n"
				},
				{
					"name": "Subscriptions",
					"value": "Subscriptions",
					"description": "The `subscriptions` resource contains rules to store and/or deliver events from the Brain event system.\n\nSee also the `events` resource.\n"
				},
				{
					"name": "Users",
					"value": "Users",
					"description": "The `users` resource contains the user accounts that can log into the Brain Management Console.\n\nNote that this resource is only accessible for administrator users logged into the Brain Management Console.\nIt is not possible to access this resource using API key authentication.\nThis resource is therefore irrelevant to most applications.\n"
				}
			],
			"default": ""
		},
		...authinfoDescription,
		...blobsDescription,
		...eventsDescription,
		...itemsDescription,
		...keysDescription,
		...kvpairsDescription,
		...locationsDescription,
		...locationrulesDescription,
		...presencesDescription,
		...servicesDescription,
		...setsDescription,
		...spotsDescription,
		...spotsetsDescription,
		...subscriptionsDescription,
		...usersDescription
		],
	};
}
