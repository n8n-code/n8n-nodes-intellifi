import type { INodeProperties } from 'n8n-workflow';

export const presencesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					]
				}
			},
			"options": [
				{
					"name": "Get Presences",
					"value": "Get Presences",
					"action": "Get all presences",
					"description": "Get all presences",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/presences"
						}
					}
				},
				{
					"name": "Get Presence By ID",
					"value": "Get Presence By ID",
					"action": "Get presence",
					"description": "Get presence",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/presences/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /presences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.",
			"default": "2016-01-27T08:38:55.255Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "After ID",
			"name": "after_id",
			"description": "Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.",
			"default": "56a88364e783152127d15340",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Before",
			"name": "before",
			"description": "Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.",
			"default": "2016-01-27T08:38:55.255Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "before",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Before ID",
			"name": "before_id",
			"description": "Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.",
			"default": "56a88364e783152127d15340",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "before_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"description": "Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.",
			"default": "2016-01-27T08:38:55.255Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "from",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "From ID",
			"name": "from_id",
			"description": "Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.",
			"default": "56a88364e783152127d15340",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "from_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "ID Only",
			"name": "id_only",
			"description": "Removes `url` fields from output and shows `_id` instead of `_url` in references.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "id_only",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.",
			"default": 5,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Populate",
			"name": "populate",
			"description": "Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.",
			"default": "location,item",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "populate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Results Only",
			"name": "results_only",
			"description": "Removes response envelope with information about query, only sends back a JSON array with the applicable resources.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "results_only",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"description": "Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).",
			"default": "-move_count,technology",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Until",
			"name": "until",
			"description": "Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.",
			"default": "2016-01-27T08:38:55.255Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "until",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Until ID",
			"name": "until_id",
			"description": "Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.",
			"default": "56a88364e783152127d15340",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "until_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Timeout S",
			"name": "timeout_s",
			"description": "Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.",
			"default": 60,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timeout_s",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"description": "Unique identifier",
			"default": "5b8d0b717503c445552a1865",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Time Created",
			"name": "time_created",
			"description": "Filter on the time the resource was created.",
			"default": "2018-08-30T09:51:59.737Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "time_created",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Time Updated",
			"name": "time_updated",
			"description": "Filter on the time the resource was last updated",
			"default": "2018-08-30T09:51:59.737Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "time_updated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Item",
			"name": "item",
			"description": "Filter based on the item",
			"default": "5b7d6cbd7503c445552a1664",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "item",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"description": "Filter based on the location",
			"default": "5b7d6cbd7503c445552a1664",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Proximity",
			"name": "proximity",
			"description": "Filter based on the proximity.",
			"default": "immediate",
			"type": "options",
			"options": [
				{
					"name": "Far",
					"value": "far"
				},
				{
					"name": "Near",
					"value": "near"
				},
				{
					"name": "Immediate",
					"value": "immediate"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "proximity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Technology",
			"name": "technology",
			"description": "Filter based on the detected technology of an item.",
			"default": "rfid",
			"type": "options",
			"options": [
				{
					"name": "Bluetooth",
					"value": "bluetooth"
				},
				{
					"name": "Optical",
					"value": "optical"
				},
				{
					"name": "Rfid",
					"value": "rfid"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "technology",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Cookie Sid API Key",
			"name": "security_cookiesid",
			"type": "string",
			"default": "",
			"description": "This [session cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)\nwill be set after a successful graphical front-end login into the Brain.\nAuthentication via this method is particularly useful for using the API manually via the\n'[tryitout](./tryitout)' tool or by browsing the API using some JSON viewer browser extension.\nA [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) is enforced for cookie authentication.\nTherefore applications accessing the API outside of the Brain, are not\nallowed to be authenticated via this cookie.\n\nSome endpoints, mainly `users` and `keys` can only be used when\nauthenticated via an administrative account using a Cookie. This means\nthat these endpoints can only be used when logged in into the Graphical\nfront-end of the Brain.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ 'brain.sid=' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_headerapikey",
			"type": "string",
			"default": "",
			"description": "Applications are required to provide an API key with every HTTP request\nto the Web API.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Api-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "Query API Key API Key",
			"name": "security_queryapikey",
			"type": "string",
			"default": "",
			"description": "Applications are required to provide an API key with every HTTP request\nto the Web API.\n",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presences"
					]
				}
			}
		},
		{
			"displayName": "GET /presences/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presence By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Unique identifier",
			"default": "5b8d0b717503c445552a1865",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presence By ID"
					]
				}
			}
		},
		{
			"displayName": "Cookie Sid API Key",
			"name": "security_cookiesid",
			"type": "string",
			"default": "",
			"description": "This [session cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)\nwill be set after a successful graphical front-end login into the Brain.\nAuthentication via this method is particularly useful for using the API manually via the\n'[tryitout](./tryitout)' tool or by browsing the API using some JSON viewer browser extension.\nA [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) is enforced for cookie authentication.\nTherefore applications accessing the API outside of the Brain, are not\nallowed to be authenticated via this cookie.\n\nSome endpoints, mainly `users` and `keys` can only be used when\nauthenticated via an administrative account using a Cookie. This means\nthat these endpoints can only be used when logged in into the Graphical\nfront-end of the Brain.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ 'brain.sid=' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presence By ID"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_headerapikey",
			"type": "string",
			"default": "",
			"description": "Applications are required to provide an API key with every HTTP request\nto the Web API.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Api-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presence By ID"
					]
				}
			}
		},
		{
			"displayName": "Query API Key API Key",
			"name": "security_queryapikey",
			"type": "string",
			"default": "",
			"description": "Applications are required to provide an API key with every HTTP request\nto the Web API.\n",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Presences"
					],
					"operation": [
						"Get Presence By ID"
					]
				}
			}
		},
];
